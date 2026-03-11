class FravegaHomePage{

    constructor(page){
        this.page = page;
        this.searchBar = page.getByRole('textbox', { name: 'Fijate en Frávega' });
        this.searchBtn = page.locator('.sc-dlWCHZ');
    }

    async search(product){
        await this.searchBar.fill(product);
        await this.searchBtn.click();

    }

    





}



module.exports = {FravegaHomePage};