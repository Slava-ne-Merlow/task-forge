import { TEST_PROVIDERS, NO_ERRORS_SCHEMA } from '../../../../test-providers';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectBoardComponent } from './project-board.component';

describe('ProjectBoardComponent', () => {
  let fixture: ComponentFixture<ProjectBoardComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectBoardComponent],
      providers: TEST_PROVIDERS,
      schemas: [NO_ERRORS_SCHEMA],
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
