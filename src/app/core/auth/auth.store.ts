import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { EMPTY, pipe, switchMap, tap } from 'rxjs';

import { ApiService } from '../api/api.service';
import { User } from '../models/user.model';
import { TokenService } from './token.service';

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, api = inject(ApiService), tokens = inject(TokenService), router = inject(Router)) => ({
    loadCurrentUser: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { loading: true, error: null })),
        switchMap(() => {
          if (!tokens.exists()) {
            patchState(store, { loading: false });
            return EMPTY;
          }
          return api.me().pipe(
            tap({
              next: (user) => patchState(store, { user, loading: false }),
              error: () => {
                tokens.clear();
                patchState(store, { user: null, loading: false });
              },
            }),
          );
        }),
      ),
    ),

    login: rxMethod<{ email: string; password: string }>(
      pipe(
        tap(() => patchState(store, { loading: true, error: null })),
        switchMap(({ email, password }) =>
          api.login(email, password).pipe(
            tap({
              next: (res) => {
                tokens.set(res.access_token);
                patchState(store, { user: res.user, loading: false, error: null });
                router.navigate(['/teams']);
              },
              error: (err) =>
                patchState(store, {
                  error: err.error?.detail ?? 'Login failed',
                  loading: false,
                }),
            }),
          ),
        ),
      ),
    ),

    register: rxMethod<{ email: string; name: string; password: string }>(
      pipe(
        tap(() => patchState(store, { loading: true, error: null })),
        switchMap(({ email, name, password }) =>
          api.register(email, name, password).pipe(
            tap({
              next: (res) => {
                tokens.set(res.access_token);
                patchState(store, { user: res.user, loading: false, error: null });
                router.navigate(['/teams']);
              },
              error: (err) =>
                patchState(store, {
                  error: err.error?.detail ?? 'Registration failed',
                  loading: false,
                }),
            }),
          ),
        ),
      ),
    ),

    loginViaInvite: rxMethod<{ token: string; email: string; name: string; password: string }>(
      pipe(
        tap(() => patchState(store, { loading: true, error: null })),
        switchMap(({ token, email, name, password }) =>
          api.registerViaInvitation(token, email, name, password).pipe(
            tap({
              next: (res) => {
                tokens.set(res.access_token);
                patchState(store, { user: res.user, loading: false, error: null });
                router.navigate(['/teams']);
              },
              error: (err) =>
                patchState(store, {
                  error: err.error?.detail ?? 'Failed to accept invitation',
                  loading: false,
                }),
            }),
          ),
        ),
      ),
    ),

    logout(): void {
      tokens.clear();
      patchState(store, { user: null, error: null });
      router.navigate(['/auth/login']);
    },

    clearError(): void {
      patchState(store, { error: null });
    },
  })),
);
