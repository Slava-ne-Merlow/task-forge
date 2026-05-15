import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { EMPTY, pipe, switchMap, tap } from 'rxjs';

import { ApiService } from '../../core/api/api.service';
import { Invitation } from '../../core/models/invitation.model';
import { Team, TeamMember, TeamRole } from '../../core/models/team.model';

interface TeamsState {
  teams: Team[];
  currentTeam: Team | null;
  members: TeamMember[];
  invitations: Invitation[];
  loading: boolean;
  membersLoading: boolean;
  error: string | null;
}

const initialState: TeamsState = {
  teams: [],
  currentTeam: null,
  members: [],
  invitations: [],
  loading: false,
  membersLoading: false,
  error: null,
};

export const TeamsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, api = inject(ApiService)) => ({
    loadTeams: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { loading: true, error: null })),
        switchMap(() =>
          api.getTeams().pipe(
            tap({
              next: (teams) => patchState(store, { teams, loading: false }),
              error: (err) =>
                patchState(store, {
                  error: err.error?.detail ?? 'Failed to load teams',
                  loading: false,
                }),
            }),
          ),
        ),
      ),
    ),

    loadTeam: rxMethod<string>(
      pipe(
        tap(() => patchState(store, { loading: true, error: null })),
        switchMap((teamId) =>
          api.getTeam(teamId).pipe(
            tap({
              next: (team) => patchState(store, { currentTeam: team, loading: false }),
              error: (err) =>
                patchState(store, {
                  error: err.error?.detail ?? 'Failed to load team',
                  loading: false,
                }),
            }),
          ),
        ),
      ),
    ),

    loadMembers: rxMethod<string>(
      pipe(
        tap(() => patchState(store, { membersLoading: true })),
        switchMap((teamId) =>
          api.getMembers(teamId).pipe(
            tap({
              next: (members) => patchState(store, { members, membersLoading: false }),
              error: () => patchState(store, { membersLoading: false }),
            }),
          ),
        ),
      ),
    ),

    createTeam: rxMethod<{ name: string; onSuccess?: (team: Team) => void }>(
      pipe(
        tap(() => patchState(store, { loading: true, error: null })),
        switchMap(({ name, onSuccess }) =>
          api.createTeam(name).pipe(
            tap({
              next: (team) => {
                patchState(store, { teams: [...store.teams(), team], loading: false });
                onSuccess?.(team);
              },
              error: (err) =>
                patchState(store, {
                  error: err.error?.detail ?? 'Failed to create team',
                  loading: false,
                }),
            }),
          ),
        ),
      ),
    ),

    updateMemberRole: rxMethod<{ teamId: string; userId: string; role: TeamRole }>(
      pipe(
        switchMap(({ teamId, userId, role }) =>
          api.updateMemberRole(teamId, userId, role).pipe(
            tap({
              next: (updated) => {
                const members = store
                  .members()
                  .map((m) => (m.user.id === userId ? { ...m, role: updated.role } : m));
                patchState(store, { members });
              },
              error: (err) =>
                patchState(store, { error: err.error?.detail ?? 'Failed to update role' }),
            }),
          ),
        ),
      ),
    ),

    removeMember: rxMethod<{ teamId: string; userId: string }>(
      pipe(
        switchMap(({ teamId, userId }) =>
          api.removeMember(teamId, userId).pipe(
            tap({
              next: () => {
                const members = store.members().filter((m) => m.user.id !== userId);
                patchState(store, { members });
              },
              error: (err) =>
                patchState(store, { error: err.error?.detail ?? 'Failed to remove member' }),
            }),
          ),
        ),
      ),
    ),

    createInvitation: rxMethod<{ teamId: string; onSuccess?: (inv: Invitation) => void }>(
      pipe(
        switchMap(({ teamId, onSuccess }) =>
          api.createInvitation(teamId).pipe(
            tap({
              next: (inv) => {
                patchState(store, { invitations: [...store.invitations(), inv] });
                onSuccess?.(inv);
              },
              error: (err) =>
                patchState(store, { error: err.error?.detail ?? 'Failed to create invitation' }),
            }),
          ),
        ),
      ),
    ),

    clearError(): void {
      patchState(store, { error: null });
    },

    clearCurrentTeam(): void {
      patchState(store, { currentTeam: null, members: [], invitations: [] });
    },
  })),
);
