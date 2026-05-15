import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ProjectListComponent } from './project-list.component';

describe('ProjectListComponent', () => {
  let fixture: ComponentFixture<ProjectListComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectListComponent],
      providers: [provideRouter([]), provideHttpClient(), provideAnimations()],
    }).compileComponents();
    fixture = TestBed.createComponent(ProjectListComponent);
    fixture.componentRef.setInput('teamId', 'team-1');
    fixture.detectChanges();
  });
  it('should create', () => expect(fixture.componentInstance).toBeTruthy());
  it('should toggle create form', () => {
    const comp = fixture.componentInstance as any;
    comp.openCreate();
    expect(comp.showCreateForm()).toBe(true);
    comp.cancelCreate();
    expect(comp.showCreateForm()).toBe(false);
  });
});
