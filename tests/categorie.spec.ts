import { test } from '@playwright/test';
import { HomePage } from '../POMs/homePage';




test('navigate category', async ({ page }) => {
  const homePage = new HomePage(page);

  await page.goto('https://webshopdemo.concrete5.dk/en');

  await homePage.goToCategory();

  await homePage.assertConsumerGoodsAreOpen();

});



