import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { TokenService } from './token.service';

export const authGuard: CanActivateFn = () => {
  const tokens = inject(TokenService);
  const router = inject(Router);

  if (tokens.exists()) {
    return true;
  }
  return router.createUrlTree(['/auth/login']);
};

export const guestGuard: CanActivateFn = () => {
  const tokens = inject(TokenService);
  const router = inject(Router);

  if (!tokens.exists()) {
    return true;
  }
  return router.createUrlTree(['/teams']);
};
