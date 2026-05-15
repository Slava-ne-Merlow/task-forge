import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { TuiButton, TuiIcon } from '@taiga-ui/core';
import { TuiBadge } from '@taiga-ui/kit';

import { ApiService } from '../../../core/api/api.service';
import { AuthStore } from '../../../core/auth/auth.store';
import { Task, TaskStatus, TASK_STATUSES } from '../../../core/models/task.model';
import { TaskCardComponent } from '../../../shared/components/task-card/task-card.component';

@Component({
  selector: 'app-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrl: './task-dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, TuiButton, TuiIcon, TuiBadge, TaskCardComponent],
})
export class TaskDashboardComponent implements OnInit {
  protected readonly authStore = inject(AuthStore);
  private readonly api = inject(ApiService);
  private readonly router = inject(Router);

  protected readonly tasks = signal<Task[]>([]);
  protected readonly loading = signal(true);
  protected readonly error = signal<string | null>(null);
  protected readonly filterStatus = signal<TaskStatus | 'all'>('all');

  protected readonly statuses = TASK_STATUSES;

  protected readonly stats = computed(() => {
    const all = this.tasks();
    return {
      total: all.length,
      todo: all.filter((t) => t.status === 'todo').length,
      inProgress: all.filter((t) => t.status === 'in_progress').length,
      overdue: all.filter((t) => t.deadline && new Date(t.deadline) < new Date() && t.status !== 'done').length,
      done: all.filter((t) => t.status === 'done').length,
    };
  });

  protected readonly filteredTasks = computed(() => {
    const all = this.tasks();
    const status = this.filterStatus();
    const filtered = status === 'all' ? all : all.filter((t) => t.status === status);
    return [...filtered].sort((a, b) => {
      if (!a.deadline && !b.deadline) return 0;
      if (!a.deadline) return 1;
      if (!b.deadline) return -1;
      return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
    });
  });

  ngOnInit(): void {
    this.api.getMyTasks().subscribe({
      next: (tasks) => {
        this.tasks.set(tasks);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.error?.detail ?? 'Failed to load tasks');
        this.loading.set(false);
      },
    });
  }

  protected onStatusChange(task: Task, status: TaskStatus): void {
    this.api.updateTask(task.id, { status }).subscribe({
      next: (updated) => {
        this.tasks.update((tasks) => tasks.map((t) => (t.id === task.id ? updated : t)));
      },
    });
  }

  protected openTask(task: Task): void {
    this.router.navigate(['/teams', task.teamId, 'projects', task.projectId, 'tasks', task.id]);
  }
}
