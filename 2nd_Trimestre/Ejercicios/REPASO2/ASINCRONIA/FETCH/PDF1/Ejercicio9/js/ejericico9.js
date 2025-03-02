/* 
Ejercicio 9: Uso de Parámetros en la URL con fetch
Enunciado:
Realiza una solicitud fetch para obtener los comentarios de la publicación con ID 1 usando
https://jsonplaceholder.typicode.com/comments?postId=1. Muestra en la consola el nombre
del autor y el contenido de cada comentario.
Requisitos:
1. Muestra los comentarios correspondientes en la consola.
2. Si la solicitud falla, muestra un mensaje adecuado en la consola.
 */
document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    cargaUrl();
}

function cargaUrl() {
    url = "https://jsonplaceholder.typicode.com/comments?postId=1";

    fetch(url, {
        method: "GET",
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Error al enviar los datos al servidor")
        }
        return response.json()
    }).then((respuesta) => {
        respuesta.forEach(element => {
            console.log("Nombre:", element.name, "\nComentario:", element.body)
        });
    }).catch((error) => {
        console.log("Error:", error.message)
    });
}