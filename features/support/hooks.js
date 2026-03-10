const {Before, After, AfterStep, Status } = require("@cucumber/cucumber");
const playwright = require("@playwright/test");
const {POManager} = require('../../pageObjets/POManager');




Before (async function(){
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.poManager = new POManager(this.page);
});

After ({tags: "@Regression"}, function(){

    console.log("Last execution");

})

AfterStep(async function({result}){
    if(result.status === Status.FAILED){
        await this.page.screenshot({path: 'screenshot1.png'})
    }

} )