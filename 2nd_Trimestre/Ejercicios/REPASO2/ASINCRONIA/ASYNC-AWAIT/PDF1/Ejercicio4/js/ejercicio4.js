/* 
Ejercicio 4: Esperar Varias Promesas con async/await y Promise.all
Enunciado:
Crea una función que obtenga datos de las siguientes URLs en paralelo:
1. https://jsonplaceholder.typicode.com/posts
2. https://jsonplaceholder.typicode.com/users
3. https://jsonplaceholder.typicode.com/comments
Muestra en la consola la cantidad total de publicaciones, usuarios y comentarios.
Requisitos:
1. Usa Promise.all junto con async/await.
2. Maneja errores con try/catch.
*/

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    esperaDatos();
}


/* async function esperaDatos() {
    try {
        const [responsePosts, responseUsers, responseComments] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/posts"),
            fetch("https://jsonplaceholder.typicode.com/users"),
            fetch("https://jsonplaceholder.typicode.com/comments")
        ]);
        if (!responsePosts.ok) {
            throw new Error("Problemas al obtener los posts del servidor.")
        } if (!responseUsers.ok) {
            throw new Error("Problemas al obtener los usuarios del servidor.")
        } if (!responseComments.ok) {
            throw new Error("Problemas al obtener los comentarios del servidor.")
        }

        const posts = await responsePosts.json();
        const users = await responseUsers.json();
        const comments = await responseComments.json();

        console.log(`Total de publicaciones: ${posts.length}`);
        console.log(`Total de usuarios: ${users.length}`);
        console.log(`Total de comentarios: ${comments.length}`);
    } catch (error) {
        console.error("Error:", error);
    }
} */


async function esperaDatos() {
    try {
        let urls = ["https://jsonplaceholder.typicode.com/posts",
            "https://jsonplaceholder.typicode.com/users",
            "https://jsonplaceholder.typicode.com/comments"]

        let promesas = []
        for (let url of urls) {
            promesas.push(fetch(url))
        }
        const responses = await Promise.all(promesas);
        let respuestaPost = await responses[0].json()
        let respuestaUsers = await responses[1].json()
        let respuestaComent = await responses[2].json() 

        for (let element of respuestaUsers) {
            if (element.name.startsWith("C")) {
            try {
                const resp = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${element.id}`);
                if (!resp.ok) {
                throw new Error(`Problemas al obtener las publicaciones del usuario ${element.name}.`);
                }
                const respues = await resp.json();
                console.log("Las publicaciones del usuario:", element.name, "\nPublicaciones:", respues);
            } catch (error) {
                console.error("Error:", error);
            }
            }
        }

        console.log('Total de publicaciones:', respuestaPost.length);
        console.log('Total de usuarios:', respuestaUsers);
        console.log('Total de comentarios:', respuestaComent.length);
    } catch (error) {
        console.log("Error", error)
    }
}

