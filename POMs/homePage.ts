import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly menShirtLink: Locator;
  readonly productLink: Locator;
  readonly productSize: Locator;
  constructor(page: Page) {
    this.page = page;
    this.menShirtLink = page.locator('#primary-menu').getByRole('link', { name: 'Men\'s clothing (shirts)' }).first();
    this.productLink = page.getByRole('link', { name: 'Casual Men\'s Shirt 3541' });
    this.productSize = page.locator('#po21-S');
  }


   async goToCategory() {
        await this.menShirtLink.click();
    }

    async assertmenShirtLinkIsOpened(){
        await expect(this.page).toHaveURL('https://webshopdemo.concrete5.dk/en/webshop-eksempler/webshop-med-herretoj');
    }

    async goToProduct(){
      await this.productLink.click();
    }

    async assertproductLinkIsOpened(){
      await expect(this.page).toHaveURL('https://webshopdemo.concrete5.dk/en/products/mens-casual-shirt-3541');
    }

  
    async chooseSize(){
      await this.productSize.check();
    }

    async assertProductSizeIsChosen(){
      await expect(this.productSize).toBeChecked();
    }
  }
