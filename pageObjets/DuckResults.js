class DuckResults{

    constructor(page){

        this.page = page;
        
    }
    
    async searchWikipedia(){
        const moreResults = this.page.locator('#more-results');
        const wiki = this.page.locator('[href="https://en.wikipedia.org/wiki/Test_automation"]');
        await moreResults.click();
        await wiki.first().click();
    }
    
    async getTitle(){
        const title = this.page.locator('#firstHeading');
        const titlePage = await title.textContent();
        return titlePage;
    }


}


module.exports = {DuckResults};
