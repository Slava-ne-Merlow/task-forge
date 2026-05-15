import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Task } from '../../../core/models/task.model';
import { TaskCardComponent } from './task-card.component';

function makeTask(overrides: Partial<Task> = {}): Task {
  return {
    id: '1',
    projectId: 'p1',
    teamId: 't1',
    title: 'Test task',
    description: null,
    status: 'todo',
    priority: 'medium',
    assignee: null,
    deadline: null,
    estimatedHours: null,
    loggedHours: 0,
    startedAt: null,
    createdAt: new Date().toISOString(),
    ...overrides,
  };
}

describe('TaskCardComponent', () => {
  let fixture: ComponentFixture<TaskCardComponent>;
  let comp: TaskCardComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskCardComponent],
      providers: [provideAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskCardComponent);
    comp = fixture.componentInstance;
    fixture.componentRef.setInput('task', makeTask());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('isOverdue should be false when no deadline', () => {
    expect((comp as any).isOverdue()).toBe(false);
  });

  it('isOverdue should be false for done tasks even with past deadline', () => {
    fixture.componentRef.setInput(
      'task',
      makeTask({ deadline: '2000-01-01T00:00:00Z', status: 'done' }),
    );
    fixture.detectChanges();
    expect((comp as any).isOverdue()).toBe(false);
  });

  it('isOverdue should be true for past deadline on non-done task', () => {
    fixture.componentRef.setInput(
      'task',
      makeTask({ deadline: '2000-01-01T00:00:00Z', status: 'in_progress' }),
    );
    fixture.detectChanges();
    expect((comp as any).isOverdue()).toBe(true);
  });

  it('progressPercent should be null when no estimatedHours', () => {
    expect((comp as any).progressPercent()).toBeNull();
  });

  it('progressPercent should calculate correctly', () => {
    fixture.componentRef.setInput('task', makeTask({ estimatedHours: 10, loggedHours: 3 }));
    fixture.detectChanges();
    expect((comp as any).progressPercent()).toBe(30);
  });

  it('progressPercent should cap at 100 when overlogged', () => {
    fixture.componentRef.setInput('task', makeTask({ estimatedHours: 4, loggedHours: 8 }));
    fixture.detectChanges();
    expect((comp as any).progressPercent()).toBe(100);
  });

  it('statusOrder should flow: todo → in_progress → review → done', () => {
    const order: string[] = (comp as any).statusOrder;
    expect(order.indexOf('todo')).toBeLessThan(order.indexOf('in_progress'));
    expect(order.indexOf('in_progress')).toBeLessThan(order.indexOf('review'));
    expect(order.indexOf('review')).toBeLessThan(order.indexOf('done'));
  });
});
