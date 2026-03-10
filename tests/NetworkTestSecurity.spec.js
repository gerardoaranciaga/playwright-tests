const {test, expect} = require("@playwright/test");



test ('security test', async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator('#userEmail').fill('gerardoaranciaga60@gmail.com');
    await page.locator('#userPassword').fill("River22-");
    await page.locator('#login').click();
    await page.waitForLoadState('networkidle');
    await page.locator('.card-body').first().waitFor();

    
    await page.locator("button[routerlink*='dashboard/myorders']").click();
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        route=> route.continue({url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=64ce67ea7244490f9597bff6'}));
    await page.locator("button:has-text('View')").first().click();
    await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");

}); 