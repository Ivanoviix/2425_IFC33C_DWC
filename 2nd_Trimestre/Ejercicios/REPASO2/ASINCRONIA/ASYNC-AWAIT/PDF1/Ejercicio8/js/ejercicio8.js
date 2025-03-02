/* 
Ejercicio 8: Uso de Parámetros en la URL con async/await
Enunciado:
Crea una función que obtenga los comentarios de la publicación con ID 1 usando
https://jsonplaceholder.typicode.com/comments?postId=1. Muestra en la consola el nombre
del autor y el contenido de cada comentario.
Requisitos:
1. Muestra los comentarios en la consola.
2. Maneja errores con try/catch.

*/
document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    obtenerComentarios();
}

async function obtenerComentarios() {

    try {
        const url = "https://jsonplaceholder.typicode.com/comments?postId=1";

        const response = await fetch(url, {})

        if (!response.ok) {
            throw new Error("Página no encontrada.")
        }
        const respuesta = await response.json();
        respuesta.forEach(user => {
            console.log(`Nombre: ${user.name} \nComentario: ${user.body}`);
        });
    } catch(err) {
        console.log("Error", err)
    }
}