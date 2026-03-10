import {Locator,Page} from "@playwright/test";

export class LoginPage{

    page : Page;
    userName : Locator;
    passowrd : Locator;
    singInButton : Locator;

    constructor(page : Page){

        this.page = page;
        this.userName = page.locator('#userEmail');
        this.passowrd = page.locator('#userPassword');
        this.singInButton = page.locator('#login');
    }

    async goTo(){
        await this.page.goto('https://rahulshettyacademy.com/client');
    }

    async validLogin(email:string,passowrd:string){
        await this.userName.fill(email);
        await this.passowrd.fill(passowrd);
        await this.singInButton.click();
        await this.page.waitForLoadState('networkidle');
    }

}


module.exports = {LoginPage};