const {test, expect} = require("@playwright/test");


test ('popup validations', async ({page})=>{
  
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();
    await page.pause();
    page.on("dialog", dialog => dialog.accept());
    await page.locator('#confirmbtn').click();
    await page.locator('#mousehover').hover();
    const framesPage = page.frameLocator('#courses-iframe');
    await framesPage.locator('li a[href*="lifetime-access"]:visible').click();
    const text = await framesPage.locator('.text h2').textContent();
    console.log(text.split(' ')[1]);

}); 

test ('screenshot validations', async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#displayed-text').screenshot({path: 'partialScreenshot.png'});
    await page.locator('#hide-textbox').click();
    await page.screenshot({path: 'screenshot.png'});
    await expect(page.locator('#displayed-text')).toBeHidden();
    
}); 

test ('visual validations', async ({page})=>{

    await page.goto("https://flightware.com/");
    expect(await page.screenshot()).toMatchSnapshot('landing.png');
    
}); 
