
import { test } from '@playwright/test';
import { FiltersProductPage } from '../POMs/filtersProductPage';




test('filtering products', async ({ page }) => {
  const filtersProductPage = new FiltersProductPage(page);

  await page.goto('https://webshopdemo.concrete5.dk/en/webshop-eksempler/webshop-med-dametoj-demo-2');

  await filtersProductPage.filterProductByType();

  await filtersProductPage.assertProductFilteredByType();

});