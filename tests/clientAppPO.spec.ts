import {test, expect} from "@playwright/test";
import {POManager} from '../pageObjets_ts/POManager';
const dataSet = JSON.parse(JSON.stringify(require("../utils/placeorderTestData.json")));


for(const data of dataSet){

    test (`@PO add to cart for ${data.productName}`, async ({page})=>{
        
        
    const poManager = new POManager(page);
    
    const login = poManager.getLoginPage();
    await login.goTo();
    await login.validLogin(data.email,data.password);
    
    
    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(data.productName);
    await dashboardPage.navigateToCart();
    
    const cartPage = poManager.getCartPage();
    await cartPage.verifyProduct(data.productName);
    
    const checkoutPage = poManager.getCheckoutPage();
    await checkoutPage.checkout(data.email,data.countryName);
    await checkoutPage.verifyOrderDone();
    

    const orderPage = poManager.getOrderPage();
    await orderPage.verifyOrderMessage();
    const orderID = await orderPage.getOrderID();
    await orderPage.goToMyOrders();
    await orderPage.findAndOpenOrder(orderID);
    await orderPage.verifyOrderID(orderID);
    
    
      
    }); 
}