import { test, expect } from '@playwright/test';
import config from '../config.json';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

test.describe('Account page validations', () => {
  test('should login and verify account sections', async ({ page }) => {
    // Instantiate page objects
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    // Step 1: Navigate to the login page using config URL
    await loginPage.navigateTo(config.url + 'index.php?rt=account/login');

    // Step 2: Login using credentials from config
    await loginPage.login(config.username, config.password);

    // Step 3: Verify home/account page loads
    await homePage.waitForUrlContains('account');
    await homePage.verifyWelcomeText();

    // Step 4: Click on the Account link
    await page.getByRole('link', { name: 'Account' }).first().click();

    // Step 5: Validate My Account sections
    await expect(page.getByRole('heading', { name: 'My Account', exact: true })).toBeVisible({ timeout: 5000 });
    await expect(page.getByRole('link', { name: /Manage Address Book/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Order history/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Downloads/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Transaction history/i })).toBeVisible();
  });
});
