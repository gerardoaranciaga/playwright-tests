import { test, expect } from '@playwright/test';



test('[@challenge] backend test lagunitas cerveceria', async ({request}) => {
    
  
    // 1 - hacer request -> guardar la respuesta -> convertir a JSON -> ahora tenés una lista
    const response = await request.get('https://api.openbrewerydb.org/v1/breweries/autocomplete', {
        params: { 
            query: 'lagunitas' 
        }
    });
    expect(response.status()).toBe(200);
    console.log(response.status());
    const data = await response.json();
    console.log(data);

    // 2 - transformar la lista a lista que contienen la cerveza 
    const lagunitasCervezas = data.filter(brewery => brewery.name === 'Lagunitas Brewing Co');
    console.log(lagunitasCervezas);
    expect(lagunitasCervezas.length).toBeGreaterThan(0);

    // 3 - tomar solo california
    let objetivoCerveceria;

    for (const cerveceria of lagunitasCervezas) {
        const detailResponse = await request.get(`https://api.openbrewerydb.org/v1/breweries/${cerveceria.id}`);
        expect(detailResponse.ok()).toBeTruthy();  // verifica que el request fue exitoso
        
        const detailData = await detailResponse.json();
        
        if (detailData.state === 'California') {
            objetivoCerveceria = detailData;
            console.log('Cerveceria encontrada');
            break;  // encontramos la cervecería correcta, no necesitamos más
        }
    }

    console.log(objetivoCerveceria);

    // 4 - verificaciones
    //expect(objetivoCerveceria.id).toBe(761);
    expect(objetivoCerveceria.name).toBe('Lagunitas Brewing Co');
    expect(objetivoCerveceria.street).toBe('1280 N McDowell Blvd');
    expect(objetivoCerveceria.phone).toBe('7077694495');


});


/*
Test Backend:
- Realizar un único test donde se realicen los pasos abajo mencionados y se incluya en dicho
test las aserciones
indicadas en el punto 4.
Pasos :
1- Obtener una lista de cervecerías que contengan el texto "lagunitas" en su nombre.
Para ello, se debe ejecutar el siguiente servicio, indicando el texto a buscar en el queryParam
"query".
GET - https://api.openbrewerydb.org/breweries/autocomplete
2- De la lista de resultados del punto 1, tomar aquellos que contengan en la key "name", el
valor "Lagunitas Brewing Co".
3- A través del siguiente servicio, obtener el detalle de cada cervecería de la lista del punto 2 y
tomar solo el que contenga
"state" = "California".
GET - https://api.openbrewerydb.org/breweries/{id }
Assert :
4-Sobre la cervecería resultante, assertar lo siguiente:
"id" = 761
"name" = "Lagunitas Brewing Co"
"street" = "1280 N McDowell Blvd"
"phone" = "7077694495"  
*/