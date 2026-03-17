import{test,expect} from '@playwright/test';
import {POMImDB} from '../pageObjets/POMImDB';

test.beforeEach(async ({page}) => {
    await page.goto('https://www.imdb.com/');

});


test('[@challenge] challenge imdb',async ({page}) => {

    const pomImDB = new POMImDB(page);
    const movieName = "The Matrix";
    await pomImDB.home.search(movieName);

    await pomImDB.results.goToFirstResults();

    const movie = await pomImDB.results.getTitle();
    const year = await pomImDB.results.getYearOfPremiere();
    const rating = await pomImDB.results.getRating();

    expect(movie.includes("Matrix")).toBeTruthy();
    expect(year === '1999').toBeTruthy();
    expect(rating > 8).toBeTruthy();
    const starsLink = page.getByText(/Estrellas|Stars/i);
    await expect(starsLink.first()).toBeVisible();


});


/*
Test Frontend
Crear un único test automatizado.
Pasos
Inicializar un navegador usando Playwright.
Navegar a IMDb
https://www.imdb.com
Buscar la película:
The Matrix
Ingresar al primer resultado de la lista.
Obtener información de la película.
Assert
Validar que:
El título de la película contenga "Matrix".
El año de estreno sea 1999.
El rating de usuarios sea mayor a 8.
Exista una sección de cast (reparto) visible.
*/