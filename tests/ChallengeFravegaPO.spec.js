import { test, expect } from "@playwright/test";
import { POMFravega } from '../pageObjets/POMFravega';



test.beforeEach(async ({ page }) => {
  await page.goto('https://www.fravega.com');
});

test.afterEach(async ({ page }) => {
  console.log("Test terminado");
});

test('[@challenge] buscar y filtrar heladeras', async ({ page }) => {

  const pomFravega = new POMFravega(page);

  await pomFravega.home.search('heladera');

  await pomFravega.results.filterHeladeras();
  const brand = await pomFravega.results.selectFirstBrand();
  const products = await pomFravega.results.getWebElements();

  const countProducts = await products.count();


  for (let i = 0; i < countProducts; i++) {
    const title = await products.nth(i).getAttribute('title');
    expect(title).toContain(brand);
  }

  //const breadcrumb = await resultsPage.breadcrumb.innerText();
  //expect(breadcrumb).toContain('Heladeras')

});

/*
Test Frontend:
- Realizar un único test donde se realicen los pasos abajo mencionados y se incluya en dicho
test las aserciones indicadas en el punto 6.
Pasos :
1- Generar una clase, con un método de test que instancie un chromedriver.
2- Ingrese a la home de Frávega (www.fravega.com).
3- Busque "Heladera".
4- Filtre por "Heladeras" desde los filtros de la sección izquierda de la página.
5- Filtre por la primer marca desde los filtros "Marca" de la sección izquierda de la página.
Assert :
6- Guarde la grilla de resultados como lista de WebElement y aserte que:
- Cada uno de los elementos contenga en su title la marca filtrada.
- La cantidad de elementos de la lista coincida con los resultados mostrandos por el frontend.
- Que en el breadcrumb de la página (atributo name="breadcrumb") se encuentre la palabra
"Heladeras"
El test debe heredar de una clase base (TestBase) donde deben estar los annotation
@BeforeTest y @AfterTest.
Es deseable utilizar el patrón "Page Object" para el modelado de las páginas.
*/

