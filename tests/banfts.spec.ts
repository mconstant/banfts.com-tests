import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://banfts.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/banfts\.com/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://banfts.com/');

  // Click the Auth with signature link.
  await page.getByText('Auth with signature').click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByText('Authenticate to Banfts!')).toBeVisible();
});
