class FravegaResultsPage{

    constructor(page){
        this.page = page;
        //this.breadcrumb = page.locator('[name="breadcrumb"]');
    }
    
    async filterHeladeras(){
        const heladerasFilter = this.page.getByRole('link', { name: 'Heladeras' });
        await heladerasFilter.click();
    }
    
    async selectFirstBrand(){
        const brandFilters = this.page.locator('[name="brandAggregation"]');
        const brand = await brandFilters.first().innerText();
        await brandFilters.first().click();
        return brand;
    }
    
    async getWebElements(){
        const webElements = this.page.locator('[data-test-id="result-item"]');
        return webElements;
    }

}




module.exports = {FravegaResultsPage};