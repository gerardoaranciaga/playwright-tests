const {test, expect} = require("@playwright/test");


test ('add to cart', async ({page})=>{

    
    const products = page.locator('.card-body');
    const productName = 'iphone 13 pro';
    const email = 'gerardoaranciaga60@gmail.com';
  
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator('#userEmail').fill('gerardoaranciaga60@gmail.com');
    await page.locator('#userPassword').fill("River22-");
    await page.locator('#login').click();

    //espera a que las llamadas a la api se completen
    await page.waitForLoadState('networkidle');
    await page.locator('.card-body').first().waitFor();
    const allTitles = await products.allTextContents();
    console.log(allTitles);
    
    const count = await products.count(); //cantidad de productos total
    for(let i = 0; i < count; i++){ //recorre los productos hasta encontrar el igual
        if(await products.nth(i).locator('b').textContent() === productName){
            await products.nth(i).locator('.btn.w-10.rounded').click();
            break;
        }
    }

    await page.locator('[routerlink*="cart"]').click();
    await page.locator('div li').first().waitFor();
    const bool = page.locator('h3:has-text("ZARA COAT 3")').isVisible();
    expect(bool).toBeTruthy();

    await page.locator('text=Checkout').click();
    await page.locator("[placeholder*='Country']").pressSequentially('ar');
    const dropdown = page.locator('.ta-results');
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator('button').count();
    for(let i = 0; i < optionsCount; i++){
        if(await dropdown.locator('button').nth(i).textContent() === ' Argentina'){
            await dropdown.locator('button').nth(i).click();
            break;
        }
    }

    expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
    await page.locator('.action__submit').click();

    await expect(page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ');
    const orderID = await page.locator('.em-spacer-1 .ng-star-inserted').textContent();
    console.log(orderID);

    await page.locator("button[routerlink*='dashboard/myorders']").click();
    await page.locator('tbody').first().waitFor();
    const rows = await page.locator('tbody tr');
    const rowsCount = await rows.count();

    for(let i = 0; i < rowsCount; i++){
        const row = await rows.nth(i).locator('th').textContent();
        if(orderID.includes(row)){
            await rows.nth(i).locator('button').first().click();
            break;
        }
    }

    const orderIDFinal = await page.locator('.col-text.-main').textContent();
    expect(orderID.includes(orderIDFinal)).toBeTruthy();


    await page.pause();



}); 