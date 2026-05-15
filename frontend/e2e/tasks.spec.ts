import { test, expect, Page } from '@playwright/test';

const BASE = 'http://localhost:4200';

async function login(page: Page, email = 'bob@taskforge.dev', password = 'password123') {
  await page.goto(`${BASE}/auth/login`);
  await page.locator('input[type="email"]').fill(email);
  await page.locator('input[type="password"]').fill(password);
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page).toHaveURL(/\/teams/, { timeout: 10_000 });
}

async function openBoard(page: Page) {
  // Navigate to Frontend Squad's Dashboard v2 project
  await page.getByRole('button', { name: /Projects/i }).first().click();
  await expect(page).toHaveURL(/\/projects/, { timeout: 5_000 });
  await page.getByText('Dashboard v2').click();
  await expect(page).toHaveURL(/\/projects\/[^/]+$/, { timeout: 5_000 });
}

test.describe('Task board — CRUD', () => {
  test('board shows kanban columns', async ({ page }) => {
    await login(page);
    await openBoard(page);

    // Should have 4 columns
    await expect(page.getByText('To Do', { exact: true })).toBeVisible();
    await expect(page.getByText('In Progress', { exact: true })).toBeVisible();
    await expect(page.getByText('Review', { exact: true })).toBeVisible();
    await expect(page.getByText('Done', { exact: true })).toBeVisible();
  });

  test('Lead can open create task form', async ({ page }) => {
    await login(page);
    await openBoard(page);

    await page.getByRole('button', { name: 'Add task' }).click();
    await expect(page.getByText('New task')).toBeVisible();
    await expect(page.locator('input[placeholder="What needs to be done?"]')).toBeVisible();
  });

  test('form validation prevents empty task creation', async ({ page }) => {
    await login(page);
    await openBoard(page);

    await page.getByRole('button', { name: 'Add task' }).click();
    await page.getByRole('button', { name: 'Create task' }).click();
    // Form stays open — invalid
    await expect(page.getByText('New task')).toBeVisible();
  });

  test('clicking task title opens task detail', async ({ page }) => {
    await login(page);
    await openBoard(page);

    // Click first task title visible on board
    const taskTitle = page.locator('.task-card__title').first();
    await taskTitle.click();

    await expect(page).toHaveURL(/\/tasks\//, { timeout: 5_000 });
    // Task detail page has a back button and the task title
    await expect(page.getByRole('button', { name: /Board/i })).toBeVisible();
  });
});
