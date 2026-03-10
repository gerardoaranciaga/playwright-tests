import {LoginPage} from './LoginPage';
import {DashboardPage} from './DashboardPage';
import {CartPage} from './CartPage';
import {CheckoutPage} from './CheckoutPage';
import {OrderPage} from './OrderPage';
import {Page} from '@playwright/test';

export class POManager{

    login : LoginPage;
    dashboardPage : DashboardPage;
    cartPage : CartPage;
    checkoutPage : CheckoutPage;
    orderPage : OrderPage;
    page : Page;

    constructor(page: any){
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