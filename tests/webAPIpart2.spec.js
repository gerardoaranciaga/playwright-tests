const {test, expect} = require("@playwright/test");
const path = require("path");

let webContext;

test.beforeAll(async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator('#userEmail').fill('gerardoaranciaga60@gmail.com');
    await page.locator('#userPassword').fill("River22-");
    await page.locator('#login').click();
    await page.waitForLoadState('networkidle');
    await context.storageState({path: 'state.json'});
    webContext = await browser.newContext({storageState: 'state.json'});


})


test ('add to cart', async ()=>{

    const productName = 'iphone 13 pro';
    const email = 'gerardoaranciaga60@gmail.com';
    const page = await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    
    const products = page.locator('.card-body');
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





}); 

test ('print', async ()=>{

    const page = await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    
    const products = page.locator('.card-body');
    await page.locator('.card-body').first().waitFor();
    const allTitles = await products.allTextContents();
    console.log(allTitles);
    
    


}); 