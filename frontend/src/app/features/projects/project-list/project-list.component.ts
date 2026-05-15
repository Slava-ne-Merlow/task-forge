import { ChangeDetectionStrategy, Component, inject, input, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TuiButton, TuiError, TuiIcon, TuiInput, TuiTextfield } from '@taiga-ui/core';
import { TuiBadge, TuiButtonLoading } from '@taiga-ui/kit';

import { AuthStore } from '../../../core/auth/auth.store';
import { TeamsStore } from '../../teams/teams.store';
import { ProjectsStore } from '../projects.store';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DatePipe,
    ReactiveFormsModule,
    TuiButton,
    TuiButtonLoading,
    TuiTextfield,
    TuiInput,
    TuiError,
    TuiBadge,
    TuiIcon,
  ],
})
export class ProjectListComponent implements OnInit {
  readonly teamId = input.required<string>();

  protected readonly projectsStore = inject(ProjectsStore);
  protected readonly teamsStore = inject(TeamsStore);
  protected readonly authStore = inject(AuthStore);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  protected readonly showCreateForm = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]],
    description: [''],
  });

  protected readonly isOwner = () => {
    const uid = this.authStore.user()?.id;
    return this.teamsStore.members().find((m) => m.user.id === uid)?.role === 'owner';
  };

  ngOnInit(): void {
    this.projectsStore.loadProjects(this.teamId());
    this.teamsStore.loadTeam(this.teamId());
    this.teamsStore.loadMembers(this.teamId());
  }

  protected openCreate(): void {
    this.showCreateForm.set(true);
    this.form.reset();
  }

  protected cancelCreate(): void {
    this.showCreateForm.set(false);
  }

  protected submitCreate(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { name, description } = this.form.getRawValue();
    this.projectsStore.createProject({
      teamId: this.teamId(),
      name,
      description: description || undefined,
      onSuccess: (project) => {
        this.showCreateForm.set(false);
        this.router.navigate(['/teams', this.teamId(), 'projects', project.id]);
      },
    });
  }

  protected openProject(projectId: string): void {
    this.router.navigate(['/teams', this.teamId(), 'projects', projectId]);
  }

  protected goBack(): void {
    this.router.navigate(['/teams']);
  }
}
