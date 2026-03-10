const { When, Then, Given } = require('@cucumber/cucumber')
const {POManager} = require('../../pageObjets/POManager');
const playwright = require("@playwright/test");
const {expect} = require("@playwright/test");

Given('a login to Ecommerce aplication with {string} and {string}',{timeout: 100*1000}, async function (username, password) {
    const login = this.poManager.getLoginPage();
    await login.goTo();
    await login.validLogin(username,password);
});

When('add {string} to Cart', async function (productName) {
    const dashboardPage = this.poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(productName);
    await dashboardPage.navigateToCart();
});

Then('verify {string} is displayed in the Cart', async function (productName) {
    const cartPage = this.poManager.getCartPage();
    await cartPage.verifyProduct(productName);
});

When('enter valid details {string} {string} and place the order', async function (email,countryname) {
    const checkoutPage = this.poManager.getCheckoutPage();
    await checkoutPage.checkout(email,countryname);
    await checkoutPage.verifyOrderDone();
});

Then('verify order in present in the orders', async function () {
    const orderPage = this.poManager.getOrderPage();
    await orderPage.verifyOrderMessage();
    const orderID = await orderPage.getOrderID();
    await orderPage.goToMyOrders();
    await orderPage.findAndOpenOrder(orderID);
    await orderPage.verifyOrderID(orderID);
});

Given('A login to Ecommerce2 aplication with {string} and {string}',{timeout: 100*1000},async function (username1, password1) {
    const userName = this.page.locator('#username');
    const password = this.page.locator('#password');
    const signIn = this.page.locator('#signInBtn');
    await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await this.page.title());
    await userName.fill(username1);
    await password.fill(password1);
    await signIn.click();
});

Then('Verify error message is displayed',async function () {
    console.log(await this.page.locator("[style*='block']").textContent());
    await expect(this.page.locator("[style*='block']")).toContainText('Incorrect')
});
