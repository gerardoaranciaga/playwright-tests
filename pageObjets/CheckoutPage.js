const {expect} = require("@playwright/test");

class CheckoutPage {

    constructor(page) {
        this.page = page;
        this.countryInput = page.locator("[placeholder*='Country']");
        this.dropdown = page.locator(".ta-results");
        this.countryOptions = page.locator(".ta-results button");
        this.emailInput = page.locator(".user__name [type='text']").first();
        this.submitButton = page.locator(".action__submit");
        this.orderMessage = page.locator(".hero-primary"); // mensaje final de orden
    }

    async selectCountry(countryName) {
        await this.countryInput.pressSequentially('ar');
        await this.dropdown.waitFor();

        // Selecciona directamente el país por texto
        await this.countryOptions.filter({ hasText: countryName }).click();
    }

    async verifyEmail(email) {
        await expect(this.emailInput).toHaveText(email);
    }

    async submitOrder() {
        await this.submitButton.click();
    }

    async verifyOrderDone() {
        await expect(this.orderMessage).toHaveText(" Thankyou for the order. ");
    }

    async checkout(email,countryName) {
        await this.selectCountry(countryName);
        await this.verifyEmail(email);
        await this.submitOrder();
    }

}


module.exports = {CheckoutPage};