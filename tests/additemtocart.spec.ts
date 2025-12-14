import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { AddItemPage } from '../pages/AddItemPage';
import { CartPage } from '../pages/CartPage';
import config from '../config.json';
import itemData from '../test-data/item_TestData.json';

test.describe('Add item to cart flow (POM)', () => {
  test('should login, search, add to cart, and verify', async ({ page }) => {
    // Instantiate page objects
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const addItemPage = new AddItemPage(page);
    const cartPage = new CartPage(page);

    // Step 1: Navigate to the site
    await homePage.navigateTo(config.url);

    // Step 2: Click on "Login or register"
    await homePage.clickLoginOrRegister();

    // Step 3: Verify that the text "Account Login" is displayed
    await loginPage.verifyAccountLoginText();

    // Step 4 & 5: Login
    await loginPage.login(config.username, config.password);

    // Step 6: After login, verify URL and welcome text
    await homePage.waitForUrlContains('account');
    await homePage.verifyWelcomeText();

    // Step 7: Search for an item
    await homePage.searchForItem(itemData.itemName);

    // Step 8: Add the item to the cart
    await addItemPage.addItemToCart();

    // Step 9: Verify that the shopping cart displays the added item
    await cartPage.verifyItemInCart(itemData.itemName);
  });
});
