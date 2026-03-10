const {test, expect} = require("@playwright/test");

test ('First Playwright test', async ({page})=>
{
  await page.goto("https://google.com");
  console.log(await page.title());
  await expect(page).toHaveTitle("Google");
}); 

test ('get box', async ({page})=>
  {
    const userName = page.locator('#username');
    const password = page.locator('#password');
    const signIn = page.locator('#signInBtn');
    const cardTitles = page.locator('.card-body a');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await userName.fill("gerard");
    await password.fill("learning");
    await signIn.click();

    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();
    //nth - posicion del array
    console.log(await cardTitles.first().textContent());
    //console.log(await cardTitles.nth(1).textContent());
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);


  }); 

  