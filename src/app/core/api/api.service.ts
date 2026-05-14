import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Invitation } from '../models/invitation.model';
import { Team, TeamMember, TeamRole } from '../models/team.model';
import { User } from '../models/user.model';

export interface AuthResponse {
  access_token: string;
  token_type: string;
  user: User;
}

const API = 'http://localhost:8000';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);

  // Auth
  register(email: string, name: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${API}/auth/register`, { email, name, password });
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${API}/auth/login`, { email, password });
  }

  me(): Observable<User> {
    return this.http.get<User>(`${API}/auth/me`);
  }

  // Teams
  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(`${API}/teams`);
  }

  createTeam(name: string): Observable<Team> {
    return this.http.post<Team>(`${API}/teams`, { name });
  }

  getTeam(teamId: string): Observable<Team> {
    return this.http.get<Team>(`${API}/teams/${teamId}`);
  }

  getMembers(teamId: string): Observable<TeamMember[]> {
    return this.http.get<TeamMember[]>(`${API}/teams/${teamId}/members`);
  }

  updateMemberRole(teamId: string, userId: string, role: TeamRole): Observable<TeamMember> {
    return this.http.patch<TeamMember>(`${API}/teams/${teamId}/members/${userId}/role`, { role });
  }

  removeMember(teamId: string, userId: string): Observable<void> {
    return this.http.delete<void>(`${API}/teams/${teamId}/members/${userId}`);
  }

  // Invitations
  createInvitation(teamId: string, expiresHours = 72): Observable<Invitation> {
    return this.http.post<Invitation>(`${API}/teams/${teamId}/invitations`, {
      expires_hours: expiresHours,
    });
  }

  getInvitation(token: string): Observable<Invitation> {
    return this.http.get<Invitation>(`${API}/invitations/${token}`);
  }

  registerViaInvitation(
    token: string,
    email: string,
    name: string,
    password: string,
  ): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${API}/invitations/${token}/register`, {
      email,
      name,
      password,
    });
  }

  joinViaInvitation(token: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${API}/invitations/${token}/join`, {});
  }
}
