import { TEST_PROVIDERS, NO_ERRORS_SCHEMA } from '../../../../test-providers';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteAcceptComponent } from './invite-accept.component';

describe('InviteAcceptComponent', () => {
  let fixture: ComponentFixture<InviteAcceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteAcceptComponent],
      providers: TEST_PROVIDERS,
      schemas: [NO_ERRORS_SCHEMA],
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
