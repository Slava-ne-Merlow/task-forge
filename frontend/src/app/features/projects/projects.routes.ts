import { Routes } from '@angular/router';

export const projectsRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./project-list/project-list.component').then((m) => m.ProjectListComponent),
  },
  {
    path: ':projectId',
    loadComponent: () =>
      import('./project-board/project-board.component').then((m) => m.ProjectBoardComponent),
  },
  {
    path: ':projectId/tasks/:taskId',
    loadComponent: () =>
      import('./task-detail/task-detail.component').then((m) => m.TaskDetailComponent),
  },
];
