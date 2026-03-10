const {test, expect} = require("@playwright/test");


test ('add to cart', async ({page})=>{
  
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.getByPlaceholder('email@example.com').fill('gerardoaranciaga60@gmail.com');
    await page.getByPlaceholder('enter your passsword').fill("River22-");
    await page.getByRole('button',{name: "Login"}).click();

    //espera a que las llamadas a la api se completen
    await page.waitForLoadState('networkidle');
    await page.locator('.card-body').first().waitFor();
    
    await page.locator('.card-body').filter({hasText:'iphone 13 pro'})
        .getByRole('button',{name: " Add To Cart"}).click();
    await page.getByRole('listitem').getByRole('button',{name: "Cart"}).click();


    await page.locator('div li').first().waitFor();
    await expect(page.getByText('iphone 13 pro')).toBeVisible();
    await page.getByRole('button',{name: "Checkout"}).click();

    await page.getByPlaceholder('Select Country').pressSequentially('ar');
    await page.getByRole('button',{name: "Argentina"}).click();

    await page.getByText('PLACE ORDER').click();

    await expect(page.getByText(' Thankyou for the order. ')).toBeVisible();
    



}); 