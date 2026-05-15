import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ProjectBoardComponent } from './project-board.component';

describe('ProjectBoardComponent', () => {
  let fixture: ComponentFixture<ProjectBoardComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectBoardComponent],
      providers: [provideRouter([]), provideHttpClient(), provideAnimations()],
    }).compileComponents();
    fixture = TestBed.createComponent(ProjectBoardComponent);
    fixture.componentRef.setInput('teamId', 'team-1');
    fixture.componentRef.setInput('projectId', 'proj-1');
    fixture.detectChanges();
  });
  it('should create', () => expect(fixture.componentInstance).toBeTruthy());
  it('should toggle create form', () => {
    const comp = fixture.componentInstance as any;
    comp.openCreateForm();
    expect(comp.showCreateForm()).toBe(true);
    comp.cancelCreate();
    expect(comp.showCreateForm()).toBe(false);
  });
});
