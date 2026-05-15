import { TASK_STATUSES, TASK_PRIORITIES, TaskStatus, TaskPriority } from './task.model';

describe('Task model constants', () => {
  it('TASK_STATUSES should contain all 4 statuses in order', () => {
    const values = TASK_STATUSES.map((s) => s.value);
    expect(values).toEqual(['todo', 'in_progress', 'review', 'done']);
  });

  it('TASK_PRIORITIES should contain all 4 priorities', () => {
    const values = TASK_PRIORITIES.map((p) => p.value);
    expect(values).toEqual(['low', 'medium', 'high', 'critical']);
  });

  it('every status should have a non-empty label', () => {
    TASK_STATUSES.forEach((s) => expect(s.label.length).toBeGreaterThan(0));
  });

  it('every priority should have a non-empty label', () => {
    TASK_PRIORITIES.forEach((p) => expect(p.label.length).toBeGreaterThan(0));
  });
});
