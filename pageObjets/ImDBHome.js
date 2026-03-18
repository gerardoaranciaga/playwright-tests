import { expect } from '@playwright/test';

class ImDBHome{

     constructor(page){
        this.page = page;
    }
    
    
    
    async search(movieName){
        const searchBar = await this.page.locator('#suggestion-search');
        await expect(searchBar).toBeVisible();   // espera real
        await expect(searchBar).toBeEnabled();
        await searchBar.fill(movieName);
        await searchBar.press('Enter');
    }

}

module.exports = {ImDBHome};

