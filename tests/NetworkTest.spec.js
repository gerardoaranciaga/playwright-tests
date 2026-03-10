const {test, expect, request} = require("@playwright/test");
const {APIUtils} = require('../utils/APIUtils');

const loginPayLoad = {userEmail: "gerardoaranciaga60@gmail.com", userPassword: "River22-"}
const orderPayLoad = {orders: [{country: "Argentina", productOrderedId: "6960ea76c941646b7a8b3dd5"}]}
let response;
const fakeOrders = {"data":[],"message":"No Orders"};

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

    // * al final de la url para ser dinamico
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
        async route=>{
            const response = await page.request.fetch(route.request());
            const body = JSON.stringify(fakeOrders);
            route.fulfill({
                response,
                body,
            })
            //interceptar response > API response > modificar response > mostrar fake response
        }
    )
    await page.locator("button[routerlink*='dashboard/myorders']").click();
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
    console.log(await page.locator(".mt-4").textContent());


}); 