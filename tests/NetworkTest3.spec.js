const {test, expect} = require("@playwright/test");
const { request } = require("http");



test ('security test', async ({page})=>{

    const cardTitles = page.locator('.card-body a');

    //page.route("**/*.{jpg,png,jpeg}", route=> route.abort());

    //para pedir las url que se ejecutan
    page.on('request', request=> console.log(request.url()));
    //
    page.on('response', response=> console.log(response.url(), response.status()));

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('[type="password"]').fill("Learning@830$3mK2");
    await page.locator('#signInBtn').click();
    await page.pause();


}); 