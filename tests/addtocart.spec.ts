
import { test, expect } from '@playwright/test';
import config from '../config.json';

test.describe('Add to cart flow', () => {
  test('should login, search, add to cart, and verify', async ({ page }) => {
    // Step 1: Navigate to the site
    await page.goto(config.url);

    // Step 2: Click on "Login or register"
    await page.getByRole('link', { name: 'Login or register' }).click();

    // Step 3: Verify that the text "Account Login" is displayed
    await expect(
      page.getByRole('heading', { name: /Account Login/i })
    ).toBeVisible({ timeout: 5000 });

    // Step 4: Enter credentials
    await page.locator('#loginFrm_loginname').fill(config.username);
    await page.locator('#loginFrm_password').fill(config.password);

    // Step 5: Log in to the application
    await page.getByRole('button', { name: /Login/i }).click();

    // Step 6: After login, verify URL and welcome text
    await expect(page).toHaveURL(/account/, { timeout: 5000 });
    await expect(
      page.getByRole('link', { name: /Welcome back John/i })
    ).toBeVisible({ timeout: 5000 });

    // Step 7: Search for an item
    await page.getByRole('textbox', { name: 'Search Keywords' }).fill('Skinsheen Bronzer Stick');
    // Click the Go button
    await page.getByTitle('Go', { exact: true }).click();

    // Step 8: Add the item to the cart
    await page.getByRole('link', { name: /Add to Cart/i }).click();

    // Step 9: Verify that the shopping cart displays the added item
    await expect(
      page.getByRole('cell', { name: /Skinsheen Bronzer Stick/i })
    ).toBeVisible({ timeout: 5000 });
  });
});
