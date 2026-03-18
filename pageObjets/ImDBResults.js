class ImDBResults{

  constructor(page){

        this.page = page;
    }
    
    async goToFirstResults(){
        const listMoviesSearched = await this.page.locator('.ipc-metadata-list-summary-item');
        await listMoviesSearched.getByText(/^The Matrix$/).first().click();
    }
    
    async getTitle(){
        const title = await this.page.locator('.hero__primary-text');
        const movie = await title.textContent();
        return movie;
    }
    
    async getYearOfPremiere(){
        //const yearPremiere = this.page.locator('[href="/es/title/tt0133093/releaseinfo/?ref_=tt_ov_rdat"]');
        const yearLink = await this.page.locator('a[href*="releaseinfo"]'); // cualquier enlace que contenga "releaseinfo"
        const year = await yearLink.first().textContent();
        console.log(year);
        return year //await yearPremiere.textContent();
    }
    
    async getRating(){
        const ratingMovie = await this.page.locator('[class="sc-a30a09c4-1 fMezYY"]');
        const rating = await ratingMovie.first().textContent();
        return rating;
    }


}

module.exports = {ImDBResults};
    