const {test, expect, request} = require("@playwright/test");
const {APIUtils} = require('../utils/APIUtils');

const loginPayLoad = {userEmail: "gerardoaranciaga60@gmail.com", userPassword: "River22-"}
const orderPayLoad = {orders: [{country: "Argentina", productOrderedId: "6960ea76c941646b7a8b3dd5"}]}
let response;

test.beforeAll( async()=>{

    const apiContext = await request.newContext();
    const apiUtils = new APIUtils(apiContext,loginPayLoad);
    response = await apiUtils.createOrder(orderPayLoad);
    
});




test ('api first part', async ({page})=>{

    page.addInitScript(value =>{
        window.localStorage.setItem('token', value);
    }, response.token);
  
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("button[routerlink*='dashboard/myorders']").click();
    await page.locator('tbody').first().waitFor();
    
    await page.locator('tbody tr').filter({hasText: response.orderId})
        .getByRole('button',{name: "View"}).click();

    
    const orderIDFinal = await page.locator('.col-text.-main').textContent();
    await page.pause();
    expect(response.orderId.includes(orderIDFinal)).toBeTruthy();





}); 