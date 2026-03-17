import {test, expect} from '@playwright/test';
import {POMDuckGo} from '../pageObjets/POMDuckGo';


test.beforeEach(async ({page}) => {
    await page.goto('https://duckduckgo.com');

});


test('[@challenge] tests from duck page' , async ({page}) => {
    
    const pomDuck = new POMDuckGo(page);
    const word = 'automation testing';
    await pomDuck.home.search(word);
    await pomDuck.results.searchWikipedia();
    const titlePage = await pomDuck.results.getTitle();

    expect(titlePage.includes('Software testing') || titlePage.includes('Test automation')).toBeTruthy();
    console.log('Title page: '+titlePage);
    await expect(page.locator('#bodyContent')).toContainText('Test automation');
    
    const headings = await page.locator('h2').count();
    expect(headings).toBeGreaterThanOrEqual(5);
    console.log('Cantidad '+headings);

});


/* 
Test Frontend
Realizar un único test automatizado utilizando Playwright.
Pasos
Crear un test que inicialice un navegador Chromium mediante Playwright.
Navegar a la página principal de DuckDuckGo
https://duckduckgo.com
Buscar el término:
automation testing
Ingresar al resultado que corresponda a Wikipedia.
Una vez en la página, localizar el título principal.
Assert
Validar que:
El título de la página contenga "Software testing" o "Test automation".
Exista una sección que contenga el texto "Test automation".
La página tenga al menos 5 encabezados (h2).
*/