import { test, expect, Page } from '@playwright/test';

const BASE = 'http://localhost:4200';

async function loginAndOpenBoard(page: Page) {
  await page.goto(`${BASE}/auth/login`);
  await page.locator('input[type="email"]').fill('bob@taskforge.dev');
  await page.locator('input[type="password"]').fill('password123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page).toHaveURL(/\/teams/, { timeout: 10_000 });

  await page.getByRole('button', { name: /Projects/i }).first().click();
  await expect(page).toHaveURL(/\/projects/, { timeout: 5_000 });
  await page.getByText('Dashboard v2').click();
  await expect(page).toHaveURL(/\/projects\/[^/]+$/, { timeout: 5_000 });
}

test.describe('Board — search and filter', () => {
  test('search box is visible on board', async ({ page }) => {
    await loginAndOpenBoard(page);
    await expect(page.locator('input[aria-label="Search tasks"]')).toBeVisible();
  });

  test('typing in search filters tasks by title', async ({ page }) => {
    await loginAndOpenBoard(page);

    const search = page.locator('input[aria-label="Search tasks"]');
    await search.fill('chart');

    // Should show matching task
    await expect(page.getByText('Implement chart components')).toBeVisible();
    // Non-matching tasks should disappear
    await expect(page.getByText('UX audit')).not.toBeVisible();
  });

  test('clearing search restores all tasks', async ({ page }) => {
    await loginAndOpenBoard(page);

    const search = page.locator('input[aria-label="Search tasks"]');
    await search.fill('chart');
    await search.clear();

    // UX audit task should come back
    await expect(page.getByText('UX audit of current dashboard')).toBeVisible();
  });

  test('sort dropdown is visible and opens', async ({ page }) => {
    await loginAndOpenBoard(page);

    const sortBtn = page.getByRole('button', { name: /Deadline|Sort/ });
    await expect(sortBtn).toBeVisible();
    await sortBtn.click();

    await expect(page.getByRole('button', { name: 'Priority' })).toBeVisible();
  });

  test('My Tasks dashboard has search and sort controls', async ({ page }) => {
    await page.goto(`${BASE}/auth/login`);
    await page.locator('input[type="email"]').fill('charlie@taskforge.dev');
    await page.locator('input[type="password"]').fill('password123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await expect(page).toHaveURL(/\/teams/, { timeout: 10_000 });

    await page.getByRole('link', { name: 'My Tasks' }).click();
    await expect(page).toHaveURL(/\/dashboard/, { timeout: 5_000 });

    await expect(page.locator('input[aria-label="Search my tasks"]')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Deadline' })).toBeVisible();
  });
});
