import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let fixture: ComponentFixture<RegisterComponent>;
  let component: RegisterComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterComponent],
      providers: [provideRouter([]), provideHttpClient(), provideAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should detect password mismatch', () => {
    (component as any).form.patchValue({
      name: 'Test',
      email: 'test@test.com',
      password: 'pass123',
      confirmPassword: 'other',
    });
    (component as any).form.get('confirmPassword')!.markAsTouched();
    expect((component as any).passwordMismatch).toBe(true);
  });

  it('should not have mismatch when passwords match', () => {
    (component as any).form.patchValue({
      name: 'Test',
      email: 'test@test.com',
      password: 'pass123',
      confirmPassword: 'pass123',
    });
    expect((component as any).form.errors?.['passwordMismatch']).toBeFalsy();
  });
});
