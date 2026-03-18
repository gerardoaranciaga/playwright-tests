class ImDBHome{

     constructor(page){
        this.page = page;
    }
    
    
    
    async search(movieName){
        const searchBar = await this.page.locator('#suggestion-search');
        await searchBar.waitFor({ state: 'attached', timeout: 60000 });  // aumentar timeout si es necesario
        await searchBar.waitFor({ state: 'visible', timeout: 60000 });
        await searchBar.fill(movieName);
        await searchBar.press('Enter');
    }

}

module.exports = {ImDBHome};

