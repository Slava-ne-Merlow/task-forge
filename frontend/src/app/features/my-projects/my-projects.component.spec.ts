import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MyProjectsComponent } from './my-projects.component';

describe('MyProjectsComponent', () => {
  let fixture: ComponentFixture<MyProjectsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyProjectsComponent],
      providers: [provideRouter([]), provideHttpClient(), provideAnimations()],
    }).compileComponents();
    fixture = TestBed.createComponent(MyProjectsComponent);
    fixture.detectChanges();
  });
  it('should create', () => expect(fixture.componentInstance).toBeTruthy());
  it('should start loading', () => expect((fixture.componentInstance as any).loading()).toBe(true));
});
