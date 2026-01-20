import { test } from '@playwright/test';
import { ProductPage } from '../POMs/productPage';


test('adding product to cart', async ({ page }) => {
  const productPage = new ProductPage(page);

  await page.goto('https://webshopdemo.concrete5.dk/en/webshop-eksempler/forbrugsvare');

  
  await productPage.addToCart();

  await productPage.assertProductAddedToCart();
  

});
