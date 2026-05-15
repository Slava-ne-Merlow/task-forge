import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { TuiButton, TuiIcon } from '@taiga-ui/core';
import { TuiBadge } from '@taiga-ui/kit';

import { Task, TaskStatus } from '../../../core/models/task.model';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, TuiButton, TuiIcon, TuiBadge],
})
export class TaskCardComponent {
  readonly task = input.required<Task>();
  readonly canEdit = input(false);
  readonly canAdvance = input(false);
  readonly showProject = input(false);
  readonly projectName = input<string>('');

  readonly statusChange = output<TaskStatus>();
  readonly editClick = output<void>();
  readonly deleteClick = output<void>();
  readonly titleClick = output<void>();

  protected readonly isOverdue = computed(() => {
    const dl = this.task().deadline;
    if (!dl || this.task().status === 'done') return false;
    return new Date(dl) < new Date();
  });

  protected readonly progressPercent = computed(() => {
    const t = this.task();
    if (!t.estimatedHours || t.estimatedHours === 0) return null;
    return Math.min(100, Math.round((t.loggedHours / t.estimatedHours) * 100));
  });

  protected readonly priorityAppearance: Record<string, string> = {
    low: 'neutral',
    medium: 'info',
    high: 'warning',
    critical: 'negative',
  };

  protected readonly statusOrder: TaskStatus[] = ['todo', 'in_progress', 'review', 'done'];

  protected nextStatus(): void {
    const current = this.task().status;
    const idx = this.statusOrder.indexOf(current);
    if (idx < this.statusOrder.length - 1) {
      this.statusChange.emit(this.statusOrder[idx + 1]);
    }
  }
}
