import {Locator,Page,expect} from "@playwright/test";

export class OrderPage {

    page : Page;
    orderMessage : Locator;
    orderIDLocator : Locator;
    dashboardButton : Locator;
    tableRows : Locator;
    orderIDFinalLocator : Locator;


    constructor(page : Page) {
        this.page = page;
        this.orderMessage = page.locator('.hero-primary');
        this.orderIDLocator = page.locator('.em-spacer-1 .ng-star-inserted');
        this.dashboardButton = page.locator("button[routerlink*='dashboard/myorders']");
        this.tableRows = page.locator('tbody tr');
        this.orderIDFinalLocator = page.locator('.col-text.-main');
    }

    async verifyOrderMessage(expectedMessage = ' Thankyou for the order. ') {
        await expect(this.orderMessage).toHaveText(expectedMessage);
    }

    async getOrderID() {
        const orderID = await this.orderIDLocator.textContent();
        console.log('Order ID:', orderID);
        return orderID;
    }

    async goToMyOrders() {
        await this.dashboardButton.click();
        await this.page.locator('tbody').first().waitFor();
    }

    async findAndOpenOrder(orderID : any) {
        const rowsCount = await this.tableRows.count();
        for(let i = 0; i < rowsCount; i++){
            const rowID = await this.tableRows.nth(i).locator('th').textContent();
            if(orderID.includes(rowID)){
                await this.tableRows.nth(i).locator('button').first().click();
                break;
            }
        }
    }

    async verifyOrderID(orderID : any) {
        const orderIDFinal = await this.orderIDFinalLocator.textContent();
        expect(orderID.includes(orderIDFinal)).toBeTruthy();
    }
}

module.exports = {OrderPage};