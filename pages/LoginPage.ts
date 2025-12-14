import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async verifyAccountLoginText() {
    await this.waitForVisible(this.page.getByRole('heading', { name: /Account Login/i }));
  }

  async login(username: string, password: string) {
    await this.fill(this.page.locator('#loginFrm_loginname'), username);
    await this.fill(this.page.locator('#loginFrm_password'), password);
    await this.click(this.page.getByRole('button', { name: /Login/i }));
  }
}
