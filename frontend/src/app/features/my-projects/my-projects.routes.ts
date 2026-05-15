import { Routes } from '@angular/router';

export const myProjectsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./my-projects.component').then((m) => m.MyProjectsComponent),
  },
];
