import { TEST_PROVIDERS, NO_ERRORS_SCHEMA } from '../../../../test-providers';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskDashboardComponent } from './task-dashboard.component';

describe('TaskDashboardComponent', () => {
  let fixture: ComponentFixture<TaskDashboardComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDashboardComponent],
      providers: TEST_PROVIDERS,
      schemas: [NO_ERRORS_SCHEMA],
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
