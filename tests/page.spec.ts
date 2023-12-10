import { test, expect } from '@playwright/test';

test('has correct title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/AQI Location Viewer/);
});

test('location buttons change display location', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('label').filter({ hasText: 'Seattle' }).click();
  await expect(page.getByRole('main')).toContainText('Seattle');
  await page.locator('label').filter({ hasText: 'Paris' }).click();
  await expect(page.getByRole('main')).toContainText('Paris');
  await page.locator('label').filter({ hasText: 'New Delhi' }).click();
  await expect(page.getByRole('main')).toContainText('New Delhi');
});

test('asks for location on load', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.locator('form')).toContainText('Your location cannot be determined, please enter your city');
  await page.getByPlaceholder('Enter city').click();
  await page.getByPlaceholder('Enter city').press('Enter');
  await expect(page.locator('form')).toContainText('Cannot find your city, try another');
  await page.getByPlaceholder('Enter city').click();
  await page.getByPlaceholder('Enter city').fill('new york');
  await page.getByPlaceholder('Enter city').press('Enter');
  await expect(page.getByRole('main')).toContainText('New York');
  await expect(page.getByRole('group')).not.toContainText('Cannot find your city, try another');
});