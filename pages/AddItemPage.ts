import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AddItemPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async addItemToCart() {
    await this.click(this.page.getByRole('link', { name: /Add to Cart/i }));
  }
}
