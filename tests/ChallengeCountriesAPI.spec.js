import {test,expect} from '@playwright/test';


test('[@challenge] challenge countries test', async ({ request }) => {
    const response = await request.get('https://restcountries.com/v3.1/name/argentina');

    const data = await response.json();
    console.log(data);

    const country = data[0];

    const name = country.name.common;
    const capital = country.capital;
    const region = country.region;
    const population = country.population;

    expect(name==='Argentina').toBeTruthy();
    expect(capital.includes("Buenos Aires")).toBeTruthy();
    expect(region==='Americas').toBeTruthy();
    expect(population>40000000).toBeTruthy();




    console.log('Name: '+name+' - Capital: '+capital+' - Region: '+region+' - Population: '+population);

  
});


/*
Test Backend
Crear un test de API usando Playwright.
API pública: REST Countries API
Pasos
Ejecutar el siguiente endpoint:
GET https://restcountries.com/v3.1/name/argentina
Obtener el primer país de la respuesta.
Extraer los siguientes campos:
name.common
capital
region
population
Assert
Validar que:
name.common = Argentina
region = Americas
capital contenga "Buenos Aires"
population > 40000000
*/