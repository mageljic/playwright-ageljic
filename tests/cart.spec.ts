import { test } from '@playwright/test';
import { HomePage } from '../POMs/homePage';
import { ProductPage } from '../POMs/productPage';

test('add product to cart', async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);

 await page.goto('https://webshopdemo.concrete5.dk/en');

  await homePage.goToCategory();
  await homePage.assertConsumerGoodsAreOpen();

  await productPage.addFirstProductToCart();

  await productPage.assertProductIsAddedToCart();
  });