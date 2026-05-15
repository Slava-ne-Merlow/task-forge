import { Routes } from '@angular/router';

import { authGuard } from '../../core/auth/auth.guard';

export const teamsRoutes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('./team-list/team-list.component').then((m) => m.TeamListComponent),
  },
  {
    path: ':teamId/settings',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./team-settings/team-settings.component').then((m) => m.TeamSettingsComponent),
  },
  {
    path: ':teamId/projects',
    canActivate: [authGuard],
    loadChildren: () => import('../projects/projects.routes').then((m) => m.projectsRoutes),
  },
];
