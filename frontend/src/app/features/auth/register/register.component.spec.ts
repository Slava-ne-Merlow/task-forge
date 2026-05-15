import { TEST_PROVIDERS, NO_ERRORS_SCHEMA } from '../../../../test-providers';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let fixture: ComponentFixture<RegisterComponent>;
  let component: RegisterComponent;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [RegisterComponent],
      providers: TEST_PROVIDERS,
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', () => {
    expect((component as any).form.invalid).toBe(true);
  });

  it('should detect password mismatch', () => {
    (component as any).form.patchValue({
      name: 'Test User',
      email: 'test@test.com',
      password: 'pass123',
      confirmPassword: 'different',
    });
    (component as any).form.get('confirmPassword')!.markAsTouched();
    expect((component as any).passwordMismatch).toBe(true);
  });

  it('should not report mismatch when passwords match', () => {
    (component as any).form.patchValue({
      name: 'Test User',
      email: 'test@test.com',
      password: 'pass123',
      confirmPassword: 'pass123',
    });
    expect((component as any).form.errors?.['passwordMismatch']).toBeFalsy();
  });

  it('name should require minimum 2 characters', () => {
    const ctrl = (component as any).form.get('name');
    ctrl.setValue('A');
    expect(ctrl.hasError('minlength')).toBe(true);
  });

  it('form should be valid with all correct fields', () => {
    (component as any).form.patchValue({
      name: 'Valid Name',
      email: 'valid@email.com',
      password: 'pass123',
      confirmPassword: 'pass123',
    });
    expect((component as any).form.valid).toBe(true);
  });

  it('submit() should mark form as touched when invalid', () => {
    (component as any).submit();
    expect((component as any).form.touched).toBe(true);
  });
});
