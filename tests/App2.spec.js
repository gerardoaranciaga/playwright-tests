const {test, expect} = require("@playwright/test");


test ('login first element', async ({page})=>
    {

      const userName = page.locator('#userEmail');
      const password = page.locator('#userPassword');
      const login = page.locator('#login');
      const cardTitles = page.locator('.card-body b');
  
      await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
      console.log(await page.title());
      await userName.fill("gerardoaranciaga60@gmail.com");
      await password.fill("river");
      await login.click();
  
      console.log(await page.locator("#toast-container").textContent());
      await expect(page.locator("#toast-container")).toContainText('Incorrect');
  
      await password.fill("");
      await password.fill("River22-");
      await login.click();

      //espera a que las llamadas a la api se completen
      await page.waitForLoadState('networkidle');
      const allTitles = await cardTitles.allTextContents();
      console.log(allTitles);

    }); 