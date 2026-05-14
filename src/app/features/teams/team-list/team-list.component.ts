import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TuiButton, TuiError, TuiIcon, TuiTextfield } from '@taiga-ui/core';
import { TuiBadge, TuiButtonLoading } from '@taiga-ui/kit';

import { AuthStore } from '../../../core/auth/auth.store';
import { TeamsStore } from '../teams.store';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, TuiButton, TuiButtonLoading, TuiTextfield, TuiError, TuiBadge, TuiIcon],
})
export class TeamListComponent implements OnInit {
  protected readonly teamsStore = inject(TeamsStore);
  protected readonly authStore = inject(AuthStore);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  protected readonly showCreateForm = signal(false);

  protected readonly createForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
  });

  ngOnInit(): void {
    this.teamsStore.loadTeams();
  }

  protected openCreate(): void {
    this.showCreateForm.set(true);
    this.createForm.reset();
  }

  protected cancelCreate(): void {
    this.showCreateForm.set(false);
  }

  protected submitCreate(): void {
    if (this.createForm.invalid) {
      this.createForm.markAllAsTouched();
      return;
    }
    const { name } = this.createForm.getRawValue();
    this.teamsStore.createTeam({
      name,
      onSuccess: (team) => {
        this.showCreateForm.set(false);
        this.router.navigate(['/teams', team.id, 'settings']);
      },
    });
  }

  protected goToSettings(teamId: string): void {
    this.router.navigate(['/teams', teamId, 'settings']);
  }
}
