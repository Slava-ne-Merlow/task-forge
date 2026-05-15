import { TEST_PROVIDERS, NO_ERRORS_SCHEMA } from '../../../../test-providers';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamListComponent } from './team-list.component';

describe('TeamListComponent', () => {
  let fixture: ComponentFixture<TeamListComponent>;
  let component: TeamListComponent;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [TeamListComponent],
      providers: TEST_PROVIDERS,
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());

  it('showCreateForm should default to false', () => {
    expect((component as any).showCreateForm()).toBe(false);
  });

  it('openCreate() should set showCreateForm to true', () => {
    (component as any).openCreate();
    expect((component as any).showCreateForm()).toBe(true);
  });

  it('cancelCreate() should hide the form', () => {
    (component as any).openCreate();
    (component as any).cancelCreate();
    expect((component as any).showCreateForm()).toBe(false);
  });

  it('createForm should be invalid when name is empty', () => {
    expect((component as any).createForm.invalid).toBe(true);
  });

  it('submitCreate() marks form as touched when invalid', () => {
    (component as any).submitCreate();
    expect((component as any).createForm.touched).toBe(true);
  });
});
