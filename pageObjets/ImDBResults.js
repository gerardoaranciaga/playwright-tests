class ImDBResults{

  constructor(page){

        this.page = page;
        this.listMoviesSearched = page.locator('.ipc-metadata-list-summary-item');
        this.title = page.locator('.hero__primary-text');
        this.ratingMovie = page.locator('[class="sc-a30a09c4-1 fMezYY"]');
    }

    async goToFirstResults(){
        await this.listMoviesSearched.getByText(/^The Matrix$/).first().click();
        await this.page.waitForLoadState('networkidle');
    }

    async getTitle(){
        const movie = await this.title.textContent();
        return movie;
    }

    async getYearOfPremiere(){
        //const yearPremiere = this.page.locator('[href="/es/title/tt0133093/releaseinfo/?ref_=tt_ov_rdat"]');
        const yearLink = this.page.locator('a[href*="releaseinfo"]'); // cualquier enlace que contenga "releaseinfo"
        const year = await yearLink.first().textContent();
        console.log(year);
        return year //await yearPremiere.textContent();
    }

    async getRating(){
        const rating = await this.ratingMovie.first().textContent();
        return rating;
    }


}

module.exports = {ImDBResults};
    