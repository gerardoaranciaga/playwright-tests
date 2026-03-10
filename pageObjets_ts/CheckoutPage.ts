import {Locator,Page,expect} from "@playwright/test";

export class CheckoutPage {

    page :Page;
    countryInput : Locator;
    dropdown : Locator;
    countryOptions : Locator;
    emailInput : Locator;
    submitButton : Locator;
    orderMessage : Locator;



    constructor(page : Page) {
        this.page = page;
        this.countryInput = page.locator("[placeholder*='Country']");
        this.dropdown = page.locator(".ta-results");
        this.countryOptions = page.locator(".ta-results button");
        this.emailInput = page.locator(".user__name [type='text']").first();
        this.submitButton = page.locator(".action__submit");
        this.orderMessage = page.locator(".hero-primary"); // mensaje final de orden
    }

    async selectCountry(countryName : string) {
        await this.countryInput.pressSequentially('ar');
        await this.dropdown.waitFor();

        // Selecciona directamente el país por texto
        await this.countryOptions.filter({ hasText: countryName }).click();
    }

    async verifyEmail(email: string) {
        await expect(this.emailInput).toHaveText(email);
    }

    async submitOrder() {
        await this.submitButton.click();
    }

    async verifyOrderDone() {
        await expect(this.orderMessage).toHaveText(" Thankyou for the order. ");
    }

    async checkout(email:string,countryName:string) {
        await this.selectCountry(countryName);
        await this.verifyEmail(email);
        await this.submitOrder();
    }

}


module.exports = {CheckoutPage};