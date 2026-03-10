class DashboardPage{

    constructor(page){
        this.page = page;
        this.products = page.locator('.card-body');
        this.productsText = page.locator('.card-body b');
        this.cart = page.locator('[routerlink*="cart"]');
    }

    async searchProductAddCart(productName){
        const allTitles = await this.productsText.allTextContents();
        console.log(allTitles);
        
        const count = await this.products.count(); //cantidad de productos total
        for(let i = 0; i < count; i++){ //recorre los productos hasta encontrar el igual
            if(await this.products.nth(i).locator('b').textContent() === productName){
                await this.products.nth(i).locator('.btn.w-10.rounded').click();
                break;
            }
        }
    }

    async navigateToCart(){
        await this.cart.click();
        await this.page.locator('div li').first().waitFor();
    }


}

module.exports = {DashboardPage};