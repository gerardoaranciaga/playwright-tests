const {test, expect} = require("@playwright/test");


test ('Child windows', async ({browser})=>
  {
    //Abrir un documento en otra pestaña
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
    const [newPage] = await Promise.all(
      [context.waitForEvent('page'),
      documentLink.click()
    ]);
    const text = await newPage.locator('.red').textContent();
    //console.log(text);
    
    const arrayText = text.split('@'); //divide
    const domain = arrayText[1].split(' ')[0]; //el 1 significa lado derecho, divide hasta el espacio en blanco, despues el 0 para que seleccione lado izquierdo
    //console.log(domain);

    await page.locator('#username').fill(domain);
    console.log(await page.locator('#username').inputValue());


  }
);  