import {test, expect} from "@playwright/test";
import {POMFravega} from '../pageObjets/POMFravega';



test.beforeEach(async ({ page }) => {
  await page.goto('https://www.fravega.com');
});

test.afterEach(async ({ page }) => {
  console.log("Test terminado");
});

test ('buscar y filtrar heladeras', async ({page})=>{

    const pomFravega = new POMFravega(page);


    await pomFravega.home.search('heladera');

    await pomFravega.results.filterHeladeras();
    const brand = await pomFravega.results.selectFirstBrand();
    const products = await pomFravega.results.getWebElements();

    const countProducts = await products.count();


    for(let i = 0; i < countProducts; i++){
        const title = await products.nth(i).getAttribute('title');
        expect(title).toContain(brand);
    }

    //const breadcrumb = await resultsPage.breadcrumb.innerText();
    //expect(breadcrumb).toContain('Heladeras')


}); 

