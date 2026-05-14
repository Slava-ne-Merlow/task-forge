import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { TeamSettingsComponent } from './team-settings.component';

describe('TeamSettingsComponent', () => {
  let fixture: ComponentFixture<TeamSettingsComponent>;
  let component: TeamSettingsComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamSettingsComponent],
      providers: [provideRouter([]), provideHttpClient(), provideAnimations()],
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
