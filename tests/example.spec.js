import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');  
  await page.waitForSelector('header img[src="/images/Toolsqa.jpg"]');
  const headerImageSrc = await page.$eval('header img', img => img.src);
  expect(headerImageSrc).toMatch('/images/Toolsqa.jpg');
  const homeBody = await page.$('.home-body');
  console.log('.home-body element:', homeBody);
  
  if (homeBody) {
    const cards = await homeBody.$$('h5');
    // console.log('Number of <h5> elements inside .home-body:', cards.length);
    
    // Check if the number of cards is 6 before proceeding with assertions
    expect(cards.length).toBe(6);
    
    // Extract card titles
    const cardTitles = await Promise.all(cards.map(card => card.innerText()));
    
    // Soft assertions for card titles
    expect(cardTitles).toContain('Elements');
    expect(cardTitles).toContain('Forms');
    expect(cardTitles).toContain('Alerts, Frame & Windows');
    expect(cardTitles).toContain('Widgets');
    expect(cardTitles).toContain('Interactions');
    expect(cardTitles).toContain('Book Store Application');
  } else {
    console.log('.home-body element not found');
  }
  await page.locator('div').filter({ hasText: /^Forms$/ }).nth(1).click();

  await page.getByText('Practice Form').click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Satyendra');
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('Verma');
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill('test@gmail.com');
  await page.getByText('Male', { exact: true }).click();
  await page.getByPlaceholder('Mobile Number').click();
  await page.getByPlaceholder('Mobile Number').fill('7705032444');
  await page.locator('#dateOfBirth').click();
  await page.locator('#dateOfBirthInput').click();
  await page.locator('div').filter({ hasText: /^JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember$/ }).getByRole('combobox').selectOption('3');
  await page.getByRole('combobox').nth(1).selectOption('2001');
  await page.getByLabel('Choose Sunday, April 1st,').click();
  await page.locator('.subjects-auto-complete__value-container').click();
  await page.locator('#subjectsInput').fill('Maths');
  await page.locator('#react-select-2-option-0').click();
  await page.getByText('Sports').click();
  await page.getByText('Reading').click();
  await page.getByText('Music').click();
  await page.getByLabel('Select picture').click();
  await page.getByLabel('Select picture').setInputFiles('1709121002741.jpg');
  await page.getByPlaceholder('Current Address').click();
  await page.getByPlaceholder('Current Address').fill('Lko Utttar Pradesh');
  await page.locator('div').filter({ hasText: /^Select State$/ }).nth(3).click();
  await page.getByText('Uttar Pradesh', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^Select City$/ }).nth(3).click();
  await page.getByText('Lucknow', { exact: true }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Thanks for submitting the form').click();
});