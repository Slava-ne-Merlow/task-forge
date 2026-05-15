import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TuiButton, TuiError, TuiIcon, TuiInput, TuiTextfield } from '@taiga-ui/core';
import { TuiBadge, TuiButtonLoading } from '@taiga-ui/kit';

import { ApiService } from '../../../core/api/api.service';
import { AuthStore } from '../../../core/auth/auth.store';
import { TaskDetail, TaskLog, TaskStatus, TASK_STATUSES } from '../../../core/models/task.model';
import { TeamsStore } from '../../teams/teams.store';
import { ProjectsStore } from '../projects.store';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DatePipe,
    ReactiveFormsModule,
    TuiButton,
    TuiButtonLoading,
    TuiIcon,
    TuiBadge,
    TuiTextfield,
    TuiInput,
    TuiError,
  ],
})
export class TaskDetailComponent implements OnInit {
  readonly taskId = input.required<string>();
  readonly teamId = input.required<string>();
  readonly projectId = input.required<string>();

  protected readonly authStore = inject(AuthStore);
  protected readonly teamsStore = inject(TeamsStore);
  protected readonly projectsStore = inject(ProjectsStore);
  private readonly api = inject(ApiService);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  protected readonly task = signal<TaskDetail | null>(null);
  protected readonly loading = signal(true);
  protected readonly submitting = signal(false);
  protected readonly error = signal<string | null>(null);
  protected readonly showLogForm = signal(false);
  protected readonly showRejectForm = signal(false);

  protected readonly logForm = this.fb.nonNullable.group({
    hours: [null as number | null],
    description: ['', Validators.required],
  });

  protected readonly rejectForm = this.fb.nonNullable.group({
    comment: ['', [Validators.required, Validators.minLength(5)]],
  });

  protected readonly currentUserRole = computed(() => {
    const uid = this.authStore.user()?.id;
    return this.teamsStore.members().find((m) => m.user.id === uid)?.role ?? null;
  });

  protected readonly isAssignee = computed(
    () => this.task()?.assignee?.id === this.authStore.user()?.id,
  );

  protected readonly canManage = computed(
    () => this.currentUserRole() === 'owner' || this.currentUserRole() === 'lead',
  );

  protected readonly canClaim = computed(
    () => !this.task()?.assignee && this.task()?.status === 'todo',
  );

  protected readonly canLog = computed(
    () => this.isAssignee() && ['in_progress', 'review'].includes(this.task()?.status ?? ''),
  );

  protected readonly canApproveReject = computed(
    () => this.canManage() && this.task()?.status === 'review',
  );

  protected readonly hasAnyAction = computed(
    () =>
      this.canClaim() ||
      (this.canAdvance() && !!this.nextStatus()) ||
      (this.canLog() && !this.showLogForm()) ||
      this.canApproveReject(),
  );

  protected readonly nextStatus = computed((): TaskStatus | null => {
    const order: TaskStatus[] = ['todo', 'in_progress', 'review', 'done'];
    const s = this.task()?.status as TaskStatus;
    const idx = order.indexOf(s);
    return idx >= 0 && idx < order.length - 1 ? order[idx + 1] : null;
  });

  protected readonly canAdvance = computed(() => {
    const task = this.task();
    if (!task) return false;
    const s = task.status;
    const uid = this.authStore.user()?.id;
    const isAssignee = task.assignee?.id === uid;
    const isUnassigned = !task.assignee;

    if (s === 'done') return false;
    // Review → Done: only via approve button
    if (s === 'review') return false;
    // todo → in_progress: only assignee (or unassigned tasks anyone can start)
    if (s === 'todo') return isUnassigned || isAssignee;
    // in_progress → review: only the assignee
    if (s === 'in_progress') return isAssignee;
    return false;
  });

  protected readonly priorityAppearance: Record<string, string> = {
    low: 'neutral',
    medium: 'info',
    high: 'warning',
    critical: 'negative',
  };

  protected readonly Math = Math;

  protected readonly logActionIcon: Record<string, string> = {
    log: '@tui.clock',
    claim: '@tui.user-check',
    start: '@tui.play',
    approve: '@tui.check-circle',
    reject: '@tui.x-circle',
    status_change: '@tui.arrow-right',
  };

  ngOnInit(): void {
    this.teamsStore.loadMembers(this.teamId());
    this.loadTask();
  }

  private loadTask(): void {
    this.loading.set(true);
    this.api.getTaskDetail(this.taskId()).subscribe({
      next: (t) => {
        this.task.set(t);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.error?.detail ?? 'Failed to load task');
        this.loading.set(false);
      },
    });
  }

  protected advance(): void {
    const next = this.nextStatus();
    if (!next) return;
    this.submitting.set(true);
    this.api.updateTask(this.taskId(), { status: next }).subscribe({
      next: (updated) => {
        this.task.update((t) => (t ? { ...t, ...updated, logs: t.logs } : null));
        this.submitting.set(false);
        this.projectsStore.updateTaskStatus({ taskId: this.taskId(), status: next });
        this.loadTask(); // refresh logs
      },
      error: (err) => {
        this.error.set(err.error?.detail);
        this.submitting.set(false);
      },
    });
  }

  protected claim(): void {
    this.submitting.set(true);
    this.api.claimTask(this.taskId()).subscribe({
      next: (updated) => {
        this.task.update((t) => (t ? { ...t, ...updated, logs: t.logs } : null));
        this.submitting.set(false);
        this.projectsStore.claimTask(this.taskId());
        this.loadTask();
      },
      error: (err) => {
        this.error.set(err.error?.detail);
        this.submitting.set(false);
      },
    });
  }

  protected submitLog(): void {
    if (this.logForm.invalid) {
      this.logForm.markAllAsTouched();
      return;
    }
    const { hours, description } = this.logForm.getRawValue();
    this.submitting.set(true);
    this.api.addTaskLog(this.taskId(), hours, description).subscribe({
      next: (log) => {
        this.task.update((t) =>
          t ? { ...t, logs: [...t.logs, log], loggedHours: t.loggedHours + (hours ?? 0) } : null,
        );
        this.logForm.reset();
        this.showLogForm.set(false);
        this.submitting.set(false);
      },
      error: (err) => {
        this.error.set(err.error?.detail);
        this.submitting.set(false);
      },
    });
  }

  protected approve(): void {
    this.submitting.set(true);
    this.api.approveTask(this.taskId()).subscribe({
      next: (updated) => {
        this.task.update((t) => (t ? { ...t, ...updated, logs: t.logs } : null));
        this.projectsStore.approveTask(this.taskId());
        this.submitting.set(false);
        this.loadTask();
      },
      error: (err) => {
        this.error.set(err.error?.detail);
        this.submitting.set(false);
      },
    });
  }

  protected submitReject(): void {
    if (this.rejectForm.invalid) {
      this.rejectForm.markAllAsTouched();
      return;
    }
    const { comment } = this.rejectForm.getRawValue();
    this.submitting.set(true);
    this.api.rejectTask(this.taskId(), comment).subscribe({
      next: (updated) => {
        this.task.update((t) => (t ? { ...t, ...updated, logs: t.logs } : null));
        this.projectsStore.rejectTask({ taskId: this.taskId(), comment });
        this.rejectForm.reset();
        this.showRejectForm.set(false);
        this.submitting.set(false);
        this.loadTask();
      },
      error: (err) => {
        this.error.set(err.error?.detail);
        this.submitting.set(false);
      },
    });
  }

  protected goBack(): void {
    this.router.navigate(['/teams', this.teamId(), 'projects', this.projectId()]);
  }

  protected nextStatusLabel(): string {
    return TASK_STATUSES.find((s) => s.value === this.nextStatus())?.label ?? '';
  }
}
