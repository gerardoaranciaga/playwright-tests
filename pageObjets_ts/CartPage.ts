import {expect,Locator,Page} from "@playwright/test";

export class CartPage{

    page : Page;
    checkout : Locator;

    constructor(page : Page){
        this.page = page;
        this.checkout = page.locator('text=Checkout');
    }

    async verifyProduct(productName : string){
        const productNameUper = productName.toUpperCase();
        const bool = await this.page.locator("h3:has-text('"+productNameUper+"')").isVisible();
        expect(bool).toBeTruthy();
        await this.checkout.click();
    }

}


module.exports = {CartPage};