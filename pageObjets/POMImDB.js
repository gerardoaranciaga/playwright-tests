const {ImDBHome} = require('./ImDBHome');
const {ImDBResults} = require('./ImDBResults');

class POMImDB{

    constructor(page){

        this.home = new ImDBHome(page);
        this.results = new ImDBResults(page);

    }

}

module.exports = {POMImDB};