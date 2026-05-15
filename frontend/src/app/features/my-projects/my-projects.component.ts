import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { TuiBadge } from '@taiga-ui/kit';
import { TuiIcon } from '@taiga-ui/core';

import { ApiService } from '../../core/api/api.service';
import { Project } from '../../core/models/project.model';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, TuiBadge, TuiIcon],
})
export class MyProjectsComponent implements OnInit {
  private readonly api = inject(ApiService);
  private readonly router = inject(Router);

  protected readonly projects = signal<Project[]>([]);
  protected readonly loading = signal(true);
  protected readonly error = signal<string | null>(null);

  ngOnInit(): void {
    this.api.getMyProjects().subscribe({
      next: (projects) => {
        this.projects.set(projects);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.error?.detail ?? 'Failed to load projects');
        this.loading.set(false);
      },
    });
  }

  protected open(project: Project): void {
    this.router.navigate(['/teams', project.teamId, 'projects', project.id]);
  }
}
