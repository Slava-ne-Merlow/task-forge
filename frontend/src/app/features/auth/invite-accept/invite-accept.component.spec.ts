import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { InviteAcceptComponent } from './invite-accept.component';

describe('InviteAcceptComponent', () => {
  let fixture: ComponentFixture<InviteAcceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteAcceptComponent],
      providers: [provideRouter([]), provideHttpClient(), provideAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(InviteAcceptComponent);
    fixture.componentRef.setInput('token', 'test-token-123');
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should start in loading state', () => {
    expect((fixture.componentInstance as any).pageState()).toBe('loading');
  });
});
