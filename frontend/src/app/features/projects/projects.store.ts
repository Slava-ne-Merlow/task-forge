import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';

import { ApiService } from '../../core/api/api.service';
import { Project } from '../../core/models/project.model';
import { Task, TaskPriority, TaskStatus, TASK_STATUSES } from '../../core/models/task.model';
import { TeamMember } from '../../core/models/team.model';

interface ProjectsState {
  projects: Project[];
  currentProject: Project | null;
  tasks: Task[];
  members: TeamMember[];
  loading: boolean;
  tasksLoading: boolean;
  error: string | null;
}

const initialState: ProjectsState = {
  projects: [],
  currentProject: null,
  tasks: [],
  members: [],
  loading: false,
  tasksLoading: false,
  error: null,
};

export const ProjectsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store) => ({
    tasksByStatus: computed(() =>
      TASK_STATUSES.map((s) => ({
        ...s,
        tasks: store.tasks().filter((t) => t.status === s.value),
      })),
    ),
  })),
  withMethods((store, api = inject(ApiService)) => ({
    loadProjects: rxMethod<string>(
      pipe(
        tap(() => patchState(store, { loading: true, error: null })),
        switchMap((teamId) =>
          api.getProjects(teamId).pipe(
            tap({
              next: (projects) => patchState(store, { projects, loading: false }),
              error: (err) => patchState(store, { error: err.error?.detail ?? 'Failed to load projects', loading: false }),
            }),
          ),
        ),
      ),
    ),

    createProject: rxMethod<{ teamId: string; name: string; description?: string; onSuccess?: (p: Project) => void }>(
      pipe(
        tap(() => patchState(store, { loading: true, error: null })),
        switchMap(({ teamId, name, description, onSuccess }) =>
          api.createProject(teamId, name, description).pipe(
            tap({
              next: (project) => {
                patchState(store, { projects: [...store.projects(), project], loading: false });
                onSuccess?.(project);
              },
              error: (err) => patchState(store, { error: err.error?.detail ?? 'Failed to create project', loading: false }),
            }),
          ),
        ),
      ),
    ),

    loadTasks: rxMethod<string>(
      pipe(
        tap(() => patchState(store, { tasksLoading: true, error: null })),
        switchMap((projectId) =>
          api.getTasks(projectId).pipe(
            tap({
              next: (tasks) => patchState(store, { tasks, tasksLoading: false }),
              error: (err) => patchState(store, { error: err.error?.detail ?? 'Failed to load tasks', tasksLoading: false }),
            }),
          ),
        ),
      ),
    ),

    createTask: rxMethod<{
      projectId: string;
      title: string;
      description?: string;
      assigneeId?: string;
      deadline?: string;
      estimatedHours?: number;
      priority?: TaskPriority;
      onSuccess?: () => void;
    }>(
      pipe(
        switchMap(({ onSuccess, ...body }) =>
          api.createTask(body.projectId, body).pipe(
            tap({
              next: (task) => {
                patchState(store, { tasks: [...store.tasks(), task] });
                onSuccess?.();
              },
              error: (err) => patchState(store, { error: err.error?.detail ?? 'Failed to create task' }),
            }),
          ),
        ),
      ),
    ),

    updateTaskStatus: rxMethod<{ taskId: string; status: TaskStatus }>(
      pipe(
        switchMap(({ taskId, status }) =>
          api.updateTask(taskId, { status }).pipe(
            tap({
              next: (updated) => {
                const tasks = store.tasks().map((t) => (t.id === taskId ? updated : t));
                patchState(store, { tasks });
              },
              error: (err) => patchState(store, { error: err.error?.detail ?? 'Failed to update task' }),
            }),
          ),
        ),
      ),
    ),

    updateTask: rxMethod<{ taskId: string; changes: Parameters<ApiService['updateTask']>[1]; onSuccess?: () => void }>(
      pipe(
        switchMap(({ taskId, changes, onSuccess }) =>
          api.updateTask(taskId, changes).pipe(
            tap({
              next: (updated) => {
                const tasks = store.tasks().map((t) => (t.id === taskId ? updated : t));
                patchState(store, { tasks });
                onSuccess?.();
              },
              error: (err) => patchState(store, { error: err.error?.detail ?? 'Failed to update task' }),
            }),
          ),
        ),
      ),
    ),

    deleteTask: rxMethod<string>(
      pipe(
        switchMap((taskId) =>
          api.deleteTask(taskId).pipe(
            tap({
              next: () => patchState(store, { tasks: store.tasks().filter((t) => t.id !== taskId) }),
              error: (err) => patchState(store, { error: err.error?.detail ?? 'Failed to delete task' }),
            }),
          ),
        ),
      ),
    ),

    setMembers(members: TeamMember[]): void {
      patchState(store, { members });
    },

    setCurrentProject(project: Project | null): void {
      patchState(store, { currentProject: project });
    },

    claimTask: rxMethod<string>(
      pipe(
        switchMap((taskId) =>
          api.claimTask(taskId).pipe(
            tap({
              next: (updated) => {
                const tasks = store.tasks().map((t) => (t.id === taskId ? updated : t));
                patchState(store, { tasks });
              },
              error: (err) => patchState(store, { error: err.error?.detail ?? 'Failed to claim task' }),
            }),
          ),
        ),
      ),
    ),

    approveTask: rxMethod<string>(
      pipe(
        switchMap((taskId) =>
          api.approveTask(taskId).pipe(
            tap({
              next: (updated) => {
                const tasks = store.tasks().map((t) => (t.id === taskId ? updated : t));
                patchState(store, { tasks });
              },
              error: (err) => patchState(store, { error: err.error?.detail ?? 'Failed to approve task' }),
            }),
          ),
        ),
      ),
    ),

    rejectTask: rxMethod<{ taskId: string; comment: string }>(
      pipe(
        switchMap(({ taskId, comment }) =>
          api.rejectTask(taskId, comment).pipe(
            tap({
              next: (updated) => {
                const tasks = store.tasks().map((t) => (t.id === taskId ? updated : t));
                patchState(store, { tasks });
              },
              error: (err) => patchState(store, { error: err.error?.detail ?? 'Failed to reject task' }),
            }),
          ),
        ),
      ),
    ),

    clearError(): void {
      patchState(store, { error: null });
    },

    reset(): void {
      patchState(store, initialState);
    },
  })),
);
