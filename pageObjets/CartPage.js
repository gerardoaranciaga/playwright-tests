const {expect} = require("@playwright/test");

class CartPage{

    constructor(page){
        this.page = page;
        this.checkout = page.locator('text=Checkout');
    }

    async verifyProduct(productName){
        const productNameUper = productName.toUpperCase();
        const bool = await this.page.locator("h3:has-text('"+productNameUper+"')").isVisible();
        expect(bool).toBeTruthy();
        await this.checkout.click();
    }

}


module.exports = {CartPage};