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
];
