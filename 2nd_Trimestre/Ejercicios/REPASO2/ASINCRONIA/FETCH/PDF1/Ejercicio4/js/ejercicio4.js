/* 
Ejercicio 4: Manejo de Múltiples Consultas con Promise.all y fetch
Enunciado:
Realiza tres solicitudes fetch a las siguientes URLs:
1. https://jsonplaceholder.typicode.com/posts
2. https://jsonplaceholder.typicode.com/users
3. https://jsonplaceholder.typicode.com/comments
Usa Promise.all para esperar que todas las solicitudes se completen y muestra el número
total de publicaciones, usuarios y comentarios en la consola.
Requisitos:
1. Muestra el número total de publicaciones, usuarios y comentarios.
2. Si alguna de las solicitudes falla, captura el error y muestra un mensaje adecuado.

 */

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    promesas();
}

/* 
function promesas() {
    Promise.all([
        fetchData("https://jsonplaceholder.typicode.com/posts"),
        fetchData("https://jsonplaceholder.typicode.com/users"),
        fetchData("https://jsonplaceholder.typicode.com/comments")
    ])
    .then((respuesta) => {
        const [posts, users, comments] = respuesta;
        console.log("Cantidad de publicaciones:", posts.length);
        console.log("Cantidad de usuarios:", users.length);
        console.log("Cantidad de comentarios:", comments.length);
    })
    .catch((error) => {
        console.log("Error:", error.message);
    });
}

function fetchData(url) {
    return fetch(url, {
        method: "GET",
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Problema con el servidor.");
        }
        return response.json();
    }).catch((error) => {
        console.log("Error:", error.message);
    });
} */

function promesas() {
    Promise.all([fetchPeticiones(), fetchUsers(), fetchComments()])
        .then((respuesta) => {
            const [posts, users, comments] = respuesta;
            console.log("Cantidad de publicaciones:", posts.length);
            console.log("Cantidad de usuarios:", users.length);
            console.log("Cantidad de comentarios:", comments.length);
        })
        .catch((error) => {
            console.log("Error:", error.message);
        });
}

function fetchPeticiones() {
    const url = "https://jsonplaceholder.typicode.com/posts";

    return fetch(url, {
        method: "GET",
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Problema con el servidor.");
        }
        return response.json();
    }).catch((error) => {
        console.log("Error:", error.message);
    });
}

function fetchUsers() {
    const url = "https://jsonplaceholder.typicode.com/users";

    return fetch(url, {
        method: "GET",
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Problema con el servidor.");
        }
        return response.json();
    }).catch((error) => {
        console.log("Error:", error.message);
    });
}

function fetchComments() {
    const url = "https://jsonplaceholder.typicode.com/comments";

    return fetch(url, {
        method: "GET",
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Problema con el servidor.");
        }
        return response.json();
    }).catch((error) => {
        console.log("Error:", error.message);
    });
}


document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    promesas();
}

// PAR GET, POST y PUT
/* function promesas() {
    Promise.all([
        fetchData("https://jsonplaceholder.typicode.com/posts", "GET"),
        fetchData("https://jsonplaceholder.typicode.com/users", "POST", { name: "John Doe" }),
        fetchData("https://jsonplaceholder.typicode.com/comments/1", "PUT", { body: "Updated comment" })
    ])
    .then((respuesta) => {
        const [posts, users, comments] = respuesta;
        console.log("Cantidad de publicaciones:", posts.length);
        console.log("Cantidad de usuarios:", users.length);
        console.log("Cantidad de comentarios:", comments.length);
    })
    .catch((error) => {
        console.log("Error:", error.message);
    });
}

function fetchData(url, method, body = null) {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    return fetch(url, options)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Problema con el servidor.");
            }
            return response.json();
        })
        .catch((error) => {
            console.log("Error:", error.message);
        });
} */