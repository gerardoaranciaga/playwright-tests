const {DuckHome} = require('./DuckHome');
const {DuckResults} = require('./DuckResults');

class POMDuckGo{

    constructor(page){

        this.home = new DuckHome(page);
        this.results = new DuckResults(page);

    }

}

module.exports = {POMDuckGo};