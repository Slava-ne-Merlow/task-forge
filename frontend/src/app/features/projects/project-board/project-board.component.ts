import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TuiButton, TuiDataList, TuiDropdown, TuiError, TuiIcon, TuiInput, TuiTextfield } from '@taiga-ui/core';
import { TuiBadge, TuiButtonLoading } from '@taiga-ui/kit';

import { ApiService } from '../../../core/api/api.service';
import { AuthStore } from '../../../core/auth/auth.store';
import { Task, TaskPriority, TaskStatus, TASK_PRIORITIES, TASK_STATUSES } from '../../../core/models/task.model';
import { TeamMember } from '../../../core/models/team.model';
import { TaskCardComponent } from '../../../shared/components/task-card/task-card.component';
import { TeamsStore } from '../../teams/teams.store';
import { ProjectsStore } from '../projects.store';

@Component({
  selector: 'app-project-board',
  templateUrl: './project-board.component.html',
  styleUrl: './project-board.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    TuiButton, TuiButtonLoading, TuiIcon, TuiBadge,
    TuiTextfield, TuiInput, TuiError,
    TuiDropdown, TuiDataList,
    TaskCardComponent,
  ],
})
export class ProjectBoardComponent implements OnInit {
  readonly teamId = input.required<string>();
  readonly projectId = input.required<string>();

  protected readonly projectsStore = inject(ProjectsStore);
  protected readonly teamsStore = inject(TeamsStore);
  protected readonly authStore = inject(AuthStore);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);
  private readonly api = inject(ApiService);

  protected readonly showCreateForm = signal(false);
  protected readonly editingTask = signal<Task | null>(null);

  // Filter dropdowns
  protected readonly priorityFilterOpen = signal(false);
  protected readonly assigneeFilterOpen = signal(false);
  protected readonly filterPriority = signal<TaskPriority | null>(null);
  protected readonly filterAssigneeId = signal<string | null>(null);

  // Create-form dropdowns
  protected readonly createPriorityOpen = signal(false);
  protected readonly createAssigneeOpen = signal(false);

  // Edit-form dropdowns
  protected readonly editPriorityOpen = signal(false);
  protected readonly editAssigneeOpen = signal(false);

  protected readonly priorities = TASK_PRIORITIES;
  protected readonly statuses = TASK_STATUSES;

  protected readonly currentUserRole = computed(() => {
    const uid = this.authStore.user()?.id;
    return this.teamsStore.members().find((m) => m.user.id === uid)?.role ?? null;
  });

  protected readonly canManage = computed(
    () => this.currentUserRole() === 'owner' || this.currentUserRole() === 'lead',
  );

  protected canAdvanceTask(task: Task): boolean {
    const s = task.status;
    if (s === 'done' || s === 'review') return false;
    const uid = this.authStore.user()?.id;
    const role = this.currentUserRole();
    const isAssignee = task.assignee?.id === uid;
    const isUnassigned = !task.assignee;

    // todo → in_progress: only the assignee (or unassigned tasks can be taken by anyone)
    if (s === 'todo') {
      if (isUnassigned) return true;  // anyone can claim+start
      return isAssignee;             // assigned → only the assignee
    }
    // in_progress → review: only assignee
    if (s === 'in_progress') return isAssignee;
    return false;
  }

  protected readonly filteredTasksByStatus = computed(() =>
    this.projectsStore.tasksByStatus().map((col) => ({
      ...col,
      tasks: col.tasks.filter((t) => {
        if (this.filterPriority() && t.priority !== this.filterPriority()) return false;
        if (this.filterAssigneeId() && t.assignee?.id !== this.filterAssigneeId()) return false;
        return true;
      }),
    })),
  );

  protected readonly createForm = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(2)]],
    description: [''],
    assigneeId: [''],
    deadline: [''],
    estimatedHours: [null as number | null],
    priority: ['medium' as TaskPriority],
  });

  protected readonly editForm = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(2)]],
    description: [''],
    assigneeId: [''],
    deadline: [''],
    estimatedHours: [null as number | null],
    loggedHours: [0],
    priority: ['medium' as TaskPriority],
  });

  ngOnInit(): void {
    this.teamsStore.loadMembers(this.teamId());
    this.projectsStore.loadTasks(this.projectId());
    // Load project info if not already in store
    const existing = this.projectsStore.projects().find((p) => p.id === this.projectId());
    if (existing) {
      this.projectsStore.setCurrentProject(existing);
    } else {
      this.api.getProjects(this.teamId()).subscribe((projects) => {
        const p = projects.find((pr) => pr.id === this.projectId()) ?? null;
        this.projectsStore.setCurrentProject(p);
      });
    }
  }

  protected openCreateForm(): void {
    this.showCreateForm.set(true);
    this.createForm.reset({ priority: 'medium' });
  }

  protected cancelCreate(): void {
    this.showCreateForm.set(false);
  }

  protected submitCreate(): void {
    if (this.createForm.invalid) { this.createForm.markAllAsTouched(); return; }
    const v = this.createForm.getRawValue();
    this.projectsStore.createTask({
      projectId: this.projectId(),
      title: v.title,
      description: v.description || undefined,
      assigneeId: v.assigneeId || undefined,
      deadline: v.deadline || undefined,
      estimatedHours: v.estimatedHours ?? undefined,
      priority: v.priority,
      onSuccess: () => this.showCreateForm.set(false),
    });
  }

  protected openEdit(task: Task): void {
    this.editingTask.set(task);
    this.editForm.patchValue({
      title: task.title,
      description: task.description ?? '',
      assigneeId: task.assignee?.id ?? '',
      deadline: task.deadline ? task.deadline.split('T')[0] : '',
      estimatedHours: task.estimatedHours,
      loggedHours: task.loggedHours,
      priority: task.priority,
    });
  }

  protected cancelEdit(): void {
    this.editingTask.set(null);
  }

  protected submitEdit(): void {
    const task = this.editingTask();
    if (!task || this.editForm.invalid) { this.editForm.markAllAsTouched(); return; }
    const v = this.editForm.getRawValue();
    this.projectsStore.updateTask({
      taskId: task.id,
      changes: {
        title: v.title,
        description: v.description || undefined,
        assigneeId: v.assigneeId || null,
        deadline: v.deadline || null,
        estimatedHours: v.estimatedHours,
        loggedHours: v.loggedHours,
        priority: v.priority,
      },
      onSuccess: () => this.editingTask.set(null),
    });
  }

  protected onStatusChange(task: Task, status: TaskStatus): void {
    this.projectsStore.updateTaskStatus({ taskId: task.id, status });
  }

  protected openTaskDetail(task: Task): void {
    this.router.navigate(['/teams', this.teamId(), 'projects', this.projectId(), 'tasks', task.id]);
  }

  protected deleteTask(task: Task): void {
    this.projectsStore.deleteTask(task.id);
  }

  protected getMemberName(memberId: string): string {
    return this.teamsStore.members().find((m) => m.user.id === memberId)?.user.name ?? '';
  }

  protected priorityLabel(value: string): string {
    return this.priorities.find((p) => p.value === value)?.label ?? value;
  }

  protected assigneeLabel(id: string): string {
    if (!id) return 'Unassigned';
    return this.getMemberName(id) || 'Unassigned';
  }

  protected clearFilters(): void {
    this.filterPriority.set(null);
    this.filterAssigneeId.set(null);
  }

  protected goBack(): void {
    this.router.navigate(['/teams', this.teamId(), 'projects']);
  }
}
