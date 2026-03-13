class DuckResults{

    constructor(page){

        this.page = page;
        this.moreResults = page.locator('#more-results');
        this.wiki = page.locator('[href="https://en.wikipedia.org/wiki/Test_automation"]');
        this.title = page.locator('#firstHeading');

    }

    async searchWikipedia(){
        await this.moreResults.click();
        await this.wiki.first().click();
    }

    async getTitle(){
        const titlePage = await this.title.textContent();
        return titlePage;
    }


}


module.exports = {DuckResults};
