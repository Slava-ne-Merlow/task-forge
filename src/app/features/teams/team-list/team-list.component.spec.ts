import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { TeamListComponent } from './team-list.component';

describe('TeamListComponent', () => {
  let fixture: ComponentFixture<TeamListComponent>;
  let component: TeamListComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamListComponent],
      providers: [provideRouter([]), provideHttpClient(), provideAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle create form visibility', () => {
    expect((component as any).showCreateForm()).toBe(false);
    (component as any).openCreate();
    expect((component as any).showCreateForm()).toBe(true);
    (component as any).cancelCreate();
    expect((component as any).showCreateForm()).toBe(false);
  });

  it('should mark form as touched on invalid submit', () => {
    (component as any).submitCreate();
    expect((component as any).createForm.touched).toBe(true);
  });
});
