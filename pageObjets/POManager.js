const {LoginPage} = require('./LoginPage');
const {DashboardPage} = require('./DashboardPage');
const {CartPage} = require('./CartPage');
const {CheckoutPage} = require('./CheckoutPage');
const {OrderPage} = require('./OrderPage');

class POManager{


    constructor(page){
        this.page = page;
        this.login = new LoginPage(page);
        this.dashboardPage = new DashboardPage(page);
        this.cartPage = new CartPage(page);
        this.checkoutPage = new CheckoutPage(page);
        this.orderPage = new OrderPage(page);
    }

    getLoginPage(){
        return this.login;
    }

    getDashboardPage(){
        return this.dashboardPage;
    }

    getCartPage(){
        return this.cartPage;
    }

    getCheckoutPage(){
        return this.checkoutPage;
    }

    getOrderPage(){
        return this.orderPage;
    }
}


module.exports = {POManager};