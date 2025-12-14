import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async gotoHome() {
    await this.navigateTo('https://automationteststore.com/');
  }

  async clickLoginOrRegister() {
    await this.click(this.page.getByRole('link', { name: 'Login or register' }));
  }

  async searchForItem(item: string) {
    await this.fill(this.page.getByRole('textbox', { name: 'Search Keywords' }), item);
    await this.click(this.page.getByTitle('Go', { exact: true }));
  }

  async verifyWelcomeText() {
    await this.waitForVisible(this.page.getByRole('link', { name: /Welcome back /i }));
  }
}
