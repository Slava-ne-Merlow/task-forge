import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Task } from '../../../core/models/task.model';
import { TaskCardComponent } from './task-card.component';

const mockTask: Task = {
  id: '1',
  projectId: 'p1',
  title: 'Test task',
  description: null,
  status: 'todo',
  priority: 'medium',
  assignee: null,
  deadline: null,
  estimatedHours: null,
  loggedHours: 0,
  createdAt: '',
};

describe('TaskCardComponent', () => {
  let fixture: ComponentFixture<TaskCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskCardComponent],
      providers: [provideAnimations()],
    }).compileComponents();
    fixture = TestBed.createComponent(TaskCardComponent);
    fixture.componentRef.setInput('task', mockTask);
    fixture.detectChanges();
  });

  it('should create', () => expect(fixture.componentInstance).toBeTruthy());

  it('should not be overdue when no deadline', () => {
    expect((fixture.componentInstance as any).isOverdue()).toBe(false);
  });

  it('should compute next status correctly', () => {
    const comp = fixture.componentInstance as any;
    const statuses = comp.statusOrder;
    expect(statuses[statuses.indexOf('todo') + 1]).toBe('in_progress');
  });
});
