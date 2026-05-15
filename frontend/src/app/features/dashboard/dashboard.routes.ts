import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./task-dashboard/task-dashboard.component').then((m) => m.TaskDashboardComponent),
  },
];
