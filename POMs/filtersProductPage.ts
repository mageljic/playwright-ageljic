import { Page, Locator, expect } from '@playwright/test';


export class FiltersProductPage {
  readonly page: Page;
  readonly filterTypeProduct: Locator;

 constructor(page: Page) {
    this.page = page;
    this.filterTypeProduct = page.locator('label').filter({ hasText: 'Coat (1)' });
 }

 async filterProductByType() {
    await this.filterTypeProduct.click();
    }

    async assertProductFilteredByType() {
        const filteredProduct = this.page.getByRole('link', { name: 'Casual Business' });

    await expect(filteredProduct).toBeVisible();

 }
}