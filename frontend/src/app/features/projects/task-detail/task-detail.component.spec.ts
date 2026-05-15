import { TEST_PROVIDERS, NO_ERRORS_SCHEMA } from '../../../../test-providers';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskDetailComponent } from './task-detail.component';

describe('TaskDetailComponent', () => {
  let fixture: ComponentFixture<TaskDetailComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDetailComponent],
      providers: TEST_PROVIDERS,
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(TaskDetailComponent);
    fixture.componentRef.setInput('taskId', 'task-1');
    fixture.componentRef.setInput('teamId', 'team-1');
    fixture.componentRef.setInput('projectId', 'proj-1');
    fixture.detectChanges();
  });
  it('should create', () => expect(fixture.componentInstance).toBeTruthy());
});
