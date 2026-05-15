import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TaskDetailComponent } from './task-detail.component';

describe('TaskDetailComponent', () => {
  let fixture: ComponentFixture<TaskDetailComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDetailComponent],
      providers: [provideRouter([]), provideHttpClient(), provideAnimations()],
    }).compileComponents();
    fixture = TestBed.createComponent(TaskDetailComponent);
    fixture.componentRef.setInput('taskId', 'task-1');
    fixture.componentRef.setInput('teamId', 'team-1');
    fixture.componentRef.setInput('projectId', 'proj-1');
    fixture.detectChanges();
  });
  it('should create', () => expect(fixture.componentInstance).toBeTruthy());
});
