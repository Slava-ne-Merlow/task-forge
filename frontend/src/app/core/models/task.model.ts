export type TaskStatus = 'todo' | 'in_progress' | 'review' | 'done';
export type TaskPriority = 'low' | 'medium' | 'high' | 'critical';

export interface TaskAssignee {
  id: string;
  name: string;
  email: string;
}

export interface Task {
  id: string;
  projectId: string;
  title: string;
  description: string | null;
  status: TaskStatus;
  priority: TaskPriority;
  assignee: TaskAssignee | null;
  deadline: string | null;
  estimatedHours: number | null;
  loggedHours: number;
  startedAt: string | null;
  createdAt: string;
}

export type TaskLogAction = 'log' | 'claim' | 'start' | 'approve' | 'reject' | 'status_change';

export interface TaskLog {
  id: string;
  user: TaskAssignee;
  action: TaskLogAction;
  hours: number | null;
  description: string;
  createdAt: string;
}

export interface TaskDetail extends Task {
  logs: TaskLog[];
}

export const TASK_STATUSES: { value: TaskStatus; label: string }[] = [
  { value: 'todo', label: 'To Do' },
  { value: 'in_progress', label: 'In Progress' },
  { value: 'review', label: 'Review' },
  { value: 'done', label: 'Done' },
];

export const TASK_PRIORITIES: { value: TaskPriority; label: string }[] = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
  { value: 'critical', label: 'Critical' },
];
