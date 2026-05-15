import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TuiButton, TuiDataList, TuiDropdown, TuiIcon } from '@taiga-ui/core';

import { AuthStore } from '../../../core/auth/auth.store';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    TuiButton,
    TuiIcon,
    TuiDropdown,
    TuiDataList,
  ],
})
export class ShellComponent {
  protected readonly authStore = inject(AuthStore);
  protected readonly router = inject(Router);
  protected readonly menuOpen = signal(false);
  protected readonly burgerOpen = signal(false);

  protected get userInitials(): string {
    const name = this.authStore.user()?.name ?? '';
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  protected logout(): void {
    this.menuOpen.set(false);
    this.authStore.logout();
  }
}
