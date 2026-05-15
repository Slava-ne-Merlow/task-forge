import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { TASK_STATUSES } from '../../core/models/task.model';
import { ProjectsStore } from './projects.store';

describe('ProjectsStore', () => {
  let store: InstanceType<typeof ProjectsStore>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([]),
        provideHttpClient(),
        ProjectsStore,
      ],
    });
    store = TestBed.inject(ProjectsStore);
  });

  it('should initialise with empty state', () => {
    expect(store.tasks()).toEqual([]);
    expect(store.projects()).toEqual([]);
    expect(store.loading()).toBe(false);
  });

  it('tasksByStatus should return 4 columns matching TASK_STATUSES', () => {
    const cols = store.tasksByStatus();
    expect(cols.length).toBe(TASK_STATUSES.length);
    cols.forEach((col, i) => {
      expect(col.value).toBe(TASK_STATUSES[i].value);
    });
  });

  it('tasksByStatus columns should all start empty', () => {
    store.tasksByStatus().forEach((col) => {
      expect(col.tasks).toEqual([]);
    });
  });

  it('clearError() should reset error to null', () => {
    store.clearError();
    expect(store.error()).toBeNull();
  });
});
