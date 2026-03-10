const {test, expect} = require("@playwright/test");


test ('UI Controls', async ({page})=>
  {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username');
    const password = page.locator('#password');
    const signIn = page.locator('#signInBtn');
    const dropdown = page.locator('select.form-control');
    const documentLink = page.locator("[href*='documents-request']");

    await page.locator('.radiotextsty').last().click();
    await page.locator('#okayBtn').click();
    await dropdown.selectOption("consult");
    await expect(page.locator('.radiotextsty').last()).toBeChecked();
    console.log(await page.locator('.radiotextsty').last().isChecked());
    await page.locator('#terms').click();
    await expect(page.locator('#terms')).toBeChecked();
    await page.locator('#terms').uncheck();
    //la accion se performa dentro
    expect(await page.locator('#terms').isChecked()).toBeFalsy();

    await expect(documentLink).toHaveAttribute("class","blinkingText");

  }
); 