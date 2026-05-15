import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TaskDashboardComponent } from './task-dashboard.component';

describe('TaskDashboardComponent', () => {
  let fixture: ComponentFixture<TaskDashboardComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDashboardComponent],
      providers: [provideRouter([]), provideHttpClient(), provideAnimations()],
    }).compileComponents();
    fixture = TestBed.createComponent(TaskDashboardComponent);
    fixture.detectChanges();
  });
  it('should create', () => expect(fixture.componentInstance).toBeTruthy());
  it('should start with all filter', () => {
    expect((fixture.componentInstance as any).filterStatus()).toBe('all');
  });
  it('should compute zero stats initially', () => {
    const stats = (fixture.componentInstance as any).stats();
    expect(stats.total).toBe(0);
  });
});
