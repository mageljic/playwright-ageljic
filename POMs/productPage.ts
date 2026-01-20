import { Page, Locator, expect } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page
      .locator('#store-form-add-to-cart-list-62')
      .getByRole('button', { name: 'Add to Cart' });
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async assertProductAddedToCart() {
    const successMessage = this.page.getByText('Cauliflower (1 pc) has been');

    await expect(successMessage).toBeVisible();

  }
}
