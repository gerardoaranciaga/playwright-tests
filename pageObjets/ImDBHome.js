class ImDBHome{

     constructor(page){
        this.page = page;
        this.searchBar = page.getByTestId('suggestion-search');
    }



    async search(movieName){
        await this.searchBar.click();
        await this.searchBar.fill(movieName);
        await this.searchBar.press('Enter');
    }

}

module.exports = {ImDBHome};

