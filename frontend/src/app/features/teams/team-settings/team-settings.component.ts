import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { Router } from '@angular/router';
import { TuiButton, TuiDataList, TuiDropdown, TuiIcon } from '@taiga-ui/core';
import { TuiBadge } from '@taiga-ui/kit';

import { ApiService } from '../../../core/api/api.service';
import { AuthStore } from '../../../core/auth/auth.store';
import { TeamMember, TeamRole } from '../../../core/models/team.model';
import { TeamMemberWorkload } from '../../../core/models/workload.model';
import { TeamsStore } from '../teams.store';

@Component({
  selector: 'app-team-settings',
  templateUrl: './team-settings.component.html',
  styleUrl: './team-settings.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TuiButton, TuiBadge, TuiIcon, TuiDropdown, TuiDataList],
})
export class TeamSettingsComponent implements OnInit {
  readonly teamId = input.required<string>();

  protected readonly teamsStore = inject(TeamsStore);
  protected readonly authStore = inject(AuthStore);
  private readonly router = inject(Router);
  private readonly clipboard = inject(Clipboard);
  private readonly api = inject(ApiService);

  protected readonly inviteLink = signal<string | null>(null);
  protected readonly linkCopied = signal(false);
  protected readonly openRoleDropdown = signal<string | null>(null);
  protected readonly workload = signal<TeamMemberWorkload[]>([]);
  protected readonly workloadLoading = signal(false);
  protected readonly activeTab = signal<'members' | 'workload'>('members');

  protected readonly Math = Math;

  protected readonly currentUserRole = computed(() => {
    const userId = this.authStore.user()?.id;
    return this.teamsStore.members().find((m) => m.user.id === userId)?.role ?? null;
  });

  protected readonly isOwner = computed(() => this.currentUserRole() === 'owner');
  protected readonly canInvite = computed(
    () => this.currentUserRole() === 'owner' || this.currentUserRole() === 'lead',
  );

  protected readonly roleOptions: TeamRole[] = ['lead', 'developer'];

  ngOnInit(): void {
    this.teamsStore.loadTeam(this.teamId());
    this.teamsStore.loadMembers(this.teamId());
  }

  protected loadWorkload(): void {
    this.activeTab.set('workload');
    if (this.workload().length > 0) return;
    this.workloadLoading.set(true);
    this.api.getTeamWorkload(this.teamId()).subscribe({
      next: (data) => {
        this.workload.set(data);
        this.workloadLoading.set(false);
      },
      error: () => this.workloadLoading.set(false),
    });
  }

  protected generateInviteLink(): void {
    this.teamsStore.createInvitation({
      teamId: this.teamId(),
      onSuccess: (inv) => {
        const link = `${window.location.origin}/auth/invite/${inv.token}`;
        this.inviteLink.set(link);
      },
    });
  }

  protected copyLink(): void {
    const link = this.inviteLink();
    if (!link) return;
    this.clipboard.copy(link);
    this.linkCopied.set(true);
    setTimeout(() => this.linkCopied.set(false), 2000);
  }

  protected isRoleDropdownOpen(memberId: string): boolean {
    return this.openRoleDropdown() === memberId;
  }

  protected toggleRoleDropdown(memberId: string, open: boolean): void {
    this.openRoleDropdown.set(open ? memberId : null);
  }

  protected changeRole(member: TeamMember, role: TeamRole): void {
    this.openRoleDropdown.set(null);
    this.teamsStore.updateMemberRole({ teamId: this.teamId(), userId: member.user.id, role });
  }

  protected removeMember(member: TeamMember): void {
    this.teamsStore.removeMember({ teamId: this.teamId(), userId: member.user.id });
  }

  protected goBack(): void {
    this.router.navigate(['/teams']);
  }
}
