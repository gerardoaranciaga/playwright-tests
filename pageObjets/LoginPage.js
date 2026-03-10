class LoginPage{

    constructor(page){

        this.page = page;
        this.userName = page.locator('#userEmail');
        this.passowrd = page.locator('#userPassword');
        this.singInButton = page.locator('#login');
    }

    async goTo(){
        await this.page.goto('https://rahulshettyacademy.com/client');
    }

    async validLogin(email,passowrd){
        await this.userName.fill(email);
        await this.passowrd.fill(passowrd);
        await this.singInButton.click();
        await this.page.waitForLoadState('networkidle');
    }

}


module.exports = {LoginPage};