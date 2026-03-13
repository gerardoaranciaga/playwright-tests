class DuckHome{

    constructor(page){
        this.page = page;
        this.searchBar = page.locator('#searchbox_input');
    }



    async search(word){
        await this.searchBar.click();
        await this.searchBar.fill(word);
        await this.searchBar.press('Enter');
    }

}

module.exports = {DuckHome};
    
