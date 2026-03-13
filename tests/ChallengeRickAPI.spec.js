import {test,expect} from '@playwright/test';


test('challenge countries test', async ({ request }) => {
    const response = await request.get('https://rickandmortyapi.com/api/character/?name=morty');
    const data = await response.json();
    const results = data.results;
    console.log(results);

    const morty = results.find(personaje => personaje.name === 'Morty Smith');
    const idMorty = morty.id;
    console.log('0000000000'+morty);
    console.log(idMorty);

    const response2 = await request.get('https://rickandmortyapi.com/api/character/'+idMorty);
    const data2 = await response2.json();
    console.log(data2);

    expect(data2.name ==='Morty Smith').toBeTruthy();
    expect(data2.status === "Alive").toBeTruthy();
    expect(data2.species === 'Human').toBeTruthy();
    expect(data2.gender === 'Male').toBeTruthy();


});


/*
Test Backend
Utilizar la API pública de Rick and Morty API.
Pasos
Ejecutar la request:
GET https://rickandmortyapi.com/api/character/?name=morty
Obtener los resultados del array results.
Filtrar el personaje llamado:
Morty Smith
Obtener su id y consultar el endpoint:
GET https://rickandmortyapi.com/api/character/{id}
Assert
Validar que:
name = Morty Smith
status = Alive
species = Human
gender = Male

*/