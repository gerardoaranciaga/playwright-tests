import {test,expect} from '@playwright/test';


const baseURL = 'https://jsonplaceholder.typicode.com';

test('[@challenge] api crud tests', async ({request}) =>{

    // Paso 1 – Obtener usuarios (GET)

    const responseUsers = await request.get(baseURL + '/users');
    const users = await responseUsers.json();
    console.log(users);
    const userBret = users.find(users => users.username === 'Bret');
    console.log('User: '+userBret);
    const idBret = userBret.id;
    console.log('Id: '+idBret);

    expect(userBret.name === 'Leanne Graham').toBeTruthy();
    expect(userBret.email.includes('@')).toBeTruthy();
    expect(userBret.address.city === 'Gwenborough').toBeTruthy();

    // Paso 2 – Obtener posts del usuario (GET)

    const responsePostsUsers = await request.get(baseURL + '/posts?userId=' + idBret);
    const posts = await responsePostsUsers.json();
    console.log('Posts count: '+posts.length);
    const firstPost = posts[0];

    expect(firstPost.userId).toBe(idBret);
    expect(firstPost.title).not.toBe('');
    expect(firstPost.body.length).toBeGreaterThan(20);

    // Paso 3 – Crear un nuevo post (POST)

    const postBody = {
        title: "Playwright API Challenge",
        body: "Testing POST request with Playwright",
        userId: 1
    };

    const responseNewPost = await request.post(baseURL + '/posts', {
        data: postBody,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    expect(responseNewPost.status()).toBe(201);
    const responseData = await responseNewPost.json();
    expect(responseData.title).toBe("Playwright API Challenge");
    expect(responseData.id).toBeDefined();
    const idPost = responseData.id;
    console.log('New POST: '+responseData);
    
    // Paso 4 – Actualizar el post (PUT)

    /*
    const udatePostBody = {
        "id": 101,
        "title": "Updated Post",
        "body": "This post was updated",
        "userId": 1
    }

    const responseUpdatePost = await request.put(baseURL + '/posts/' + idPost, {
        data: postBody,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    expect(responseUpdatePost.status()).toBe(200);
    const responseUpdateData = await responseUpdatePost.json();
    expect(responseUpdateData.title).toBe("Updated Post");
    expect(responseUpdateData.body.includes("updated")).toBeTruthy();
    console.log('Update POST: '+responseUpdateData);
    */

    // Paso 5 – Actualización parcial (PATCH)

    /*
    const udatePatchBody = {
        "title": "Patched Title"
    }

    const responsePatchPost = await request.patch(baseURL + '/posts/' + idPost, {
        data: postBody,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    expect(responsePatchPost.status()).toBe(200);
    const responsePatchData = await responsePatchPost.json();
    expect(responsePatchData.title).toBe("Patched Title");
    console.log('Update POST: '+responsePatchData);
    */

    // Paso 6 – Eliminar el post (DELETE)

    const responseDeletePost = await request.delete(baseURL + '/posts/' + idPost);
    expect(responseDeletePost.status()).toBe(200);





});