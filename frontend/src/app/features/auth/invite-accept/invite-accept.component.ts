import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TuiButton, TuiError, TuiInput, TuiTextfield } from '@taiga-ui/core';
import { TuiButtonLoading } from '@taiga-ui/kit';

import { ApiService } from '../../../core/api/api.service';
import { AuthStore } from '../../../core/auth/auth.store';
import { Invitation } from '../../../core/models/invitation.model';

type PageState = 'loading' | 'loaded' | 'error' | 'used';

@Component({
  selector: 'app-invite-accept',
  templateUrl: './invite-accept.component.html',
  styleUrl: './invite-accept.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, RouterLink, TuiTextfield, TuiInput, TuiButton, TuiButtonLoading, TuiError],
})
export class InviteAcceptComponent implements OnInit {
  readonly token = input.required<string>();

  protected readonly authStore = inject(AuthStore);
  private readonly api = inject(ApiService);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  protected readonly pageState = signal<PageState>('loading');
  protected readonly invitation = signal<Invitation | null>(null);
  protected readonly submitError = signal<string | null>(null);
  protected readonly joining = signal(false);

  protected readonly alreadyMember = signal(false);
  protected readonly memberCheckDone = signal(false);

  protected readonly isLoggedIn = computed(() => !!this.authStore.user());

  protected readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required, Validators.minLength(2)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit(): void {
    this.api.getInvitation(this.token()).subscribe({
      next: (inv) => {
        this.invitation.set(inv);
        this.pageState.set('loaded');
        if (this.authStore.user()) {
          this.checkMembership(inv.teamId);
        } else {
          this.memberCheckDone.set(true);
        }
      },
      error: (err) => {
        const detail: string = err.error?.detail ?? 'Invalid invitation';
        this.pageState.set(
          detail.includes('used') || detail.includes('expired') ? 'used' : 'error',
        );
      },
    });
  }

  private checkMembership(teamId: string): void {
    this.api.getMembers(teamId).subscribe({
      next: () => {
        // 200 OK — user is already a member (or is the owner/creator)
        this.alreadyMember.set(true);
        this.memberCheckDone.set(true);
      },
      error: () => {
        // 403 — not a member yet, can join
        this.alreadyMember.set(false);
        this.memberCheckDone.set(true);
      },
    });
  }

  protected joinAsExistingUser(): void {
    this.submitError.set(null);
    this.joining.set(true);
    this.api.joinViaInvitation(this.token()).subscribe({
      next: () => this.router.navigate(['/teams']),
      error: (err) => {
        this.submitError.set(err.error?.detail ?? 'Failed to join');
        this.joining.set(false);
      },
    });
  }

  protected registerAndJoin(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitError.set(null);
    const { email, name, password } = this.form.getRawValue();
    this.authStore.loginViaInvite({ token: this.token(), email, name, password });
  }
}
