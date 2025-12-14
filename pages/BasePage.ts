import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async click(locator: Locator) {
    await locator.click();
  }

  async fill(locator: Locator, value: string) {
    await locator.fill(value);
  }

  async waitForUrlContains(value: string, timeout = 5000) {
    await expect(this.page).toHaveURL(new RegExp(value), { timeout });
  }

  async waitForVisible(locator: Locator, timeout = 5000) {
    await expect(locator).toBeVisible({ timeout });
  }
}
