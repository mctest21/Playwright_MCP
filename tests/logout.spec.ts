import { test, expect } from '@playwright/test';
import config from '../config.json';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

test.describe('Logout flow', () => {
  test('should login and logoff successfully', async ({ page }) => {
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

    // Step 4: Click on the Logoff link
    await page.getByRole('link', { name: 'Logoff', exact: true }).click();

    // Step 5: Validate logout message
    await expect(page.getByRole('heading', { name: /Account Logout/i })).toBeVisible({ timeout: 5000 });
    await expect(page.getByText(/You have been logged off your account/i)).toBeVisible({ timeout: 5000 });
  });
});
