import { TEST_PROVIDERS, NO_ERRORS_SCHEMA } from '../../../../test-providers';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellComponent } from './shell.component';

describe('ShellComponent', () => {
  let fixture: ComponentFixture<ShellComponent>;
  let component: ShellComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellComponent],
      providers: TEST_PROVIDERS,
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should compute initials from full name', () => {
    const store = (component as any).authStore;
    store['_state'].update((s: any) => ({
      ...s,
      user: { name: 'John Doe', id: '1', email: 'a@b.com', createdAt: '' },
    }));
    expect((component as any).userInitials).toBe('JD');
  });
});
