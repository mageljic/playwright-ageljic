import { Page, Locator, expect } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly addToCartButton: Locator;
  readonly productInCart: Locator;

  constructor(page: Page) {
    this.page = page;

    this.addToCartButton = page
      .locator('#store-form-add-to-cart-list-62')
      .getByRole('button', { name: 'Add to Cart' });

    this.productInCart = page.getByRole('link', {
      name: 'Cauliflower (1 pc)'
    });
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async assertProductAddedToCart() {
    await expect(this.productInCart).toBeVisible();
  }
}