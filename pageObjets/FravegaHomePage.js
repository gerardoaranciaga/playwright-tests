class FravegaHomePage{

    constructor(page){
        this.page = page;
    }
    
    async search(product){
        const searchBar = this.page.getByRole('textbox', { name: 'Fijate en Frávega' });
        const searchBtn = this.page.locator('.sc-dlWCHZ');
        await searchBar.fill(product);
        await searchBtn.click();
    }

    





}



module.exports = {FravegaHomePage};