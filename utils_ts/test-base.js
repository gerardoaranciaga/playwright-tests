const {base} = require("@playwright/test");


exports.test = base.test.extend({

    testDataForOrder :{
        productName : "iphone 13 pro",
        email : "gerardoaranciaga60@gmail.com",
        password : "boca22-",
        countryName : "Argentina"
    }

})