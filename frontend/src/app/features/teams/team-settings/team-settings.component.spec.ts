import { TEST_PROVIDERS, NO_ERRORS_SCHEMA } from '../../../../test-providers';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSettingsComponent } from './team-settings.component';

describe('TeamSettingsComponent', () => {
  let fixture: ComponentFixture<TeamSettingsComponent>;
  let component: TeamSettingsComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamSettingsComponent],
      providers: TEST_PROVIDERS,
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamSettingsComponent);
    fixture.componentRef.setInput('teamId', 'team-123');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isOwner should be false when user has no role', () => {
    expect((component as any).isOwner()).toBe(false);
  });

  it('canInvite should be false when user has no role', () => {
    expect((component as any).canInvite()).toBe(false);
  });
});
