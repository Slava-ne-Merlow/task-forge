import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Invitation } from '../models/invitation.model';
import { Project } from '../models/project.model';
import { Task, TaskDetail, TaskLog, TaskPriority, TaskStatus } from '../models/task.model';
import { Team, TeamMember, TeamRole } from '../models/team.model';
import { User } from '../models/user.model';

export interface AuthResponse {
  accessToken: string;
  tokenType: string;
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

  // Projects
  getProjects(teamId: string): Observable<Project[]> {
    return this.http.get<Project[]>(`${API}/teams/${teamId}/projects`);
  }

  createProject(teamId: string, name: string, description?: string): Observable<Project> {
    return this.http.post<Project>(`${API}/teams/${teamId}/projects`, { name, description });
  }

  // Tasks
  getTasks(projectId: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${API}/projects/${projectId}/tasks`);
  }

  createTask(
    projectId: string,
    body: {
      title: string;
      description?: string;
      assigneeId?: string;
      deadline?: string;
      estimatedHours?: number;
      priority?: TaskPriority;
    },
  ): Observable<Task> {
    return this.http.post<Task>(`${API}/projects/${projectId}/tasks`, {
      title: body.title,
      description: body.description,
      assignee_id: body.assigneeId,
      deadline: body.deadline,
      estimated_hours: body.estimatedHours,
      priority: body.priority ?? 'medium',
    });
  }

  updateTask(
    taskId: string,
    body: {
      status?: TaskStatus;
      title?: string;
      description?: string;
      assigneeId?: string | null;
      deadline?: string | null;
      estimatedHours?: number | null;
      loggedHours?: number;
      priority?: TaskPriority;
    },
  ): Observable<Task> {
    const payload: Record<string, unknown> = {};
    if (body.status !== undefined) payload['status'] = body.status;
    if (body.title !== undefined) payload['title'] = body.title;
    if (body.description !== undefined) payload['description'] = body.description;
    if (body.assigneeId !== undefined) payload['assignee_id'] = body.assigneeId ?? '';
    if (body.deadline !== undefined) payload['deadline'] = body.deadline;
    if (body.estimatedHours !== undefined) payload['estimated_hours'] = body.estimatedHours;
    if (body.loggedHours !== undefined) payload['logged_hours'] = body.loggedHours;
    if (body.priority !== undefined) payload['priority'] = body.priority;
    return this.http.patch<Task>(`${API}/tasks/${taskId}`, payload);
  }

  deleteTask(taskId: string): Observable<void> {
    return this.http.delete<void>(`${API}/tasks/${taskId}`);
  }

  getMyTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${API}/me/tasks`);
  }

  getMyProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${API}/me/projects`);
  }

  getTaskDetail(taskId: string): Observable<TaskDetail> {
    return this.http.get<TaskDetail>(`${API}/tasks/${taskId}`);
  }

  claimTask(taskId: string): Observable<Task> {
    return this.http.post<Task>(`${API}/tasks/${taskId}/claim`, {});
  }

  addTaskLog(taskId: string, hours: number | null, description: string): Observable<TaskLog> {
    return this.http.post<TaskLog>(`${API}/tasks/${taskId}/logs`, { hours, description });
  }

  approveTask(taskId: string): Observable<Task> {
    return this.http.post<Task>(`${API}/tasks/${taskId}/approve`, {});
  }

  rejectTask(taskId: string, comment: string): Observable<Task> {
    return this.http.post<Task>(`${API}/tasks/${taskId}/reject`, { comment });
  }
}
