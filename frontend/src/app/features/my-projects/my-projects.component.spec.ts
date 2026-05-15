import { TEST_PROVIDERS, NO_ERRORS_SCHEMA } from '../../../test-providers';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyProjectsComponent } from './my-projects.component';

describe('MyProjectsComponent', () => {
  let fixture: ComponentFixture<MyProjectsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyProjectsComponent],
      providers: TEST_PROVIDERS,
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(MyProjectsComponent);
    fixture.detectChanges();
  });
  it('should create', () => expect(fixture.componentInstance).toBeTruthy());
  it('should start loading', () => expect((fixture.componentInstance as any).loading()).toBe(true));
});
