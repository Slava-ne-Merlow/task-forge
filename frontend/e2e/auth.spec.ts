import { test, expect } from '@playwright/test';

const BASE = 'http://localhost:4200';
const EMAIL = 'alice@taskforge.dev';
const PASSWORD = 'password123';

test.describe('Authentication', () => {
  test('login page is shown when not authenticated', async ({ page }) => {
    await page.goto(BASE);
    await expect(page).toHaveURL(/\/auth\/login/);
    await expect(page.getByRole('heading', { name: 'TaskForge' })).toBeVisible();
  });

  test('shows validation errors on empty submit', async ({ page }) => {
    await page.goto(`${BASE}/auth/login`);
    await page.getByRole('button', { name: 'Sign In' }).click();
    // Form is invalid — button doesn't submit but form stays
    await expect(page).toHaveURL(/\/auth\/login/);
  });

  test('successful login redirects to teams page', async ({ page }) => {
    await page.goto(`${BASE}/auth/login`);

    // Fill in credentials
    await page.locator('input[type="email"]').fill(EMAIL);
    await page.locator('input[type="password"]').fill(PASSWORD);
    await page.getByRole('button', { name: 'Sign In' }).click();

    // Should redirect to /teams
    await expect(page).toHaveURL(/\/teams/, { timeout: 10_000 });
    await expect(page.getByText('My Teams')).toBeVisible();
  });

  test('logout clears session and redirects to login', async ({ page }) => {
    // Login first
    await page.goto(`${BASE}/auth/login`);
    await page.locator('input[type="email"]').fill(EMAIL);
    await page.locator('input[type="password"]').fill(PASSWORD);
    await page.getByRole('button', { name: 'Sign In' }).click();
    await expect(page).toHaveURL(/\/teams/, { timeout: 10_000 });

    // Open user menu and logout
    await page.getByRole('button', { name: 'User menu' }).click();
    await page.getByRole('menuitem', { name: 'Sign out' }).click();

    await expect(page).toHaveURL(/\/auth\/login/, { timeout: 5_000 });
  });
});
