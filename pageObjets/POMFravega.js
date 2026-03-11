const {FravegaHomePage} = require('./FravegaHomePage');
const {FravegaResultsPage} = require('./FravegaResultsPage');

class POMFravega{

    constructor(page){
        this.home = new FravegaHomePage(page);
        this.results = new FravegaResultsPage(page);
    }



}

module.exports = {POMFravega};