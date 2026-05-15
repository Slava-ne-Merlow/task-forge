import { TEST_PROVIDERS, NO_ERRORS_SCHEMA } from '../../../../test-providers';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let component: LoginComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: TEST_PROVIDERS,
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', () => {
    expect((component as any).form.invalid).toBe(true);
  });

  it('email field should be required', () => {
    const ctrl = (component as any).form.get('email');
    ctrl.setValue('');
    expect(ctrl.hasError('required')).toBe(true);
  });

  it('email field should validate format', () => {
    const ctrl = (component as any).form.get('email');
    ctrl.setValue('not-an-email');
    expect(ctrl.hasError('email')).toBe(true);
  });

  it('password should require min 6 chars', () => {
    const ctrl = (component as any).form.get('password');
    ctrl.setValue('abc');
    expect(ctrl.hasError('minlength')).toBe(true);
  });

  it('form should be valid with correct credentials', () => {
    (component as any).form.patchValue({ email: 'user@test.com', password: 'password123' });
    expect((component as any).form.valid).toBe(true);
  });

  it('submit() should mark form as touched when invalid', () => {
    (component as any).submit();
    expect((component as any).form.touched).toBe(true);
  });
});
