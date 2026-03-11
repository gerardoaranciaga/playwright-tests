class FravegaResultsPage{

    constructor(page){
        this.page = page;
        this.heladerasFilter = page.getByRole('link', { name: 'Heladeras (425)' });
        this.brandFilters = page.locator('[name="brandAggregation"]');
        this.webElements = page.locator('[data-test-id="result-item"]');
        //this.breadcrumb = page.locator('[name="breadcrumb"]');
    }

    async filterHeladeras(){
        await this.heladerasFilter.click();
    }

    async selectFirstBrand(){
        const brand = await this.brandFilters.first().innerText();
        await this.brandFilters.first().click();
        return brand;
    }

    async getWebElements(){
        return this.webElements;
    }

}



module.exports = {FravegaResultsPage};