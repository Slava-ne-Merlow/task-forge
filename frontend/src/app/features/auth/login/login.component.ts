import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TuiButton, TuiError, TuiInput, TuiTextfield } from '@taiga-ui/core';
import { TuiBadge, TuiButtonLoading } from '@taiga-ui/kit';

import { AuthStore } from '../../../core/auth/auth.store';

interface TestAccount {
  name: string;
  email: string;
  password: string;
  role: string;
  team: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    TuiTextfield,
    TuiInput,
    TuiButton,
    TuiButtonLoading,
    TuiError,
    TuiBadge,
  ],
})
export class LoginComponent {
  protected readonly authStore = inject(AuthStore);
  private readonly fb = inject(FormBuilder);

  protected readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  protected readonly testAccounts: TestAccount[] = [
    {
      name: 'Alice',
      email: 'alice@taskforge.dev',
      password: 'password123',
      role: 'owner',
      team: 'Frontend',
    },
    {
      name: 'Bob',
      email: 'bob@taskforge.dev',
      password: 'password123',
      role: 'lead',
      team: 'Frontend',
    },
    {
      name: 'Charlie',
      email: 'charlie@taskforge.dev',
      password: 'password123',
      role: 'dev',
      team: 'Frontend',
    },
    {
      name: 'Eve',
      email: 'eve@taskforge.dev',
      password: 'password123',
      role: 'owner',
      team: 'Backend',
    },
    {
      name: 'Frank',
      email: 'frank@taskforge.dev',
      password: 'password123',
      role: 'lead',
      team: 'Backend',
    },
    {
      name: 'Grace',
      email: 'grace@taskforge.dev',
      password: 'password123',
      role: 'dev',
      team: 'Backend',
    },
  ];

  protected fillAccount(account: TestAccount): void {
    this.form.patchValue({ email: account.email, password: account.password });
    this.authStore.clearError();
  }

  protected roleAppearance(role: string): string {
    return role === 'owner' ? 'primary' : role === 'lead' ? 'info' : 'neutral';
  }

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { email, password } = this.form.getRawValue();
    this.authStore.login({ email, password });
  }
}
