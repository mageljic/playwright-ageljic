import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly consumerGoodsLink: Locator;
  constructor(page: Page) {
    this.page = page;
    this.consumerGoodsLink = page.locator('#primary-menu').getByRole('link', { name: 'Consumer Goods' }).first();
  }


   async goToCategory() {
        await this.consumerGoodsLink.click();
    }

    async assertConsumerGoodsAreOpen(){
        await expect(this.page).toHaveURL('https://webshopdemo.concrete5.dk/en/webshop-eksempler/forbrugsvare');
    }

  }
