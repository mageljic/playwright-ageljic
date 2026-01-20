import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly consumerGoodsLink: Locator;
  readonly moreDetails: Locator;
  readonly productSize: Locator;
  constructor(page: Page) {
    this.page = page;
    this.consumerGoodsLink = page.locator('#primary-menu').getByRole('link', { name: 'Consumer Goods' }).first();
    this.moreDetails = page.locator('#store-form-add-to-cart-list-53').getByRole('link', { name: 'More Details' });
    this.productSize = page.getByText('XS S M L XL');
  }


   async goToCategory() {
        await this.consumerGoodsLink.click();
    }

    async assertConsumerGoodsAreOpen(){
        await expect(this.page).toHaveURL('https://webshopdemo.concrete5.dk/en/webshop-eksempler/forbrugsvare');
    }

    async goToMoreDetails() {
      await this.moreDetails.click();
    }

    async assertMoreDetailsPageIsOpened(){
      await expect(this.page).toHaveURL('https://webshopdemo.concrete5.dk/en/products/c5dk-rodvin-6-stk');
    }

    async chooseSize(){
      await this.productSize.click();
    }

    async assertProductSizeIsChosen(){

    }
  }
