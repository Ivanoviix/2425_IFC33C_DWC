/* 
Ejercicio 7: Manejo de Errores HTTP con async/await
Enunciado:
Realiza una solicitud a una URL inexistente
(https://jsonplaceholder.typicode.com/invalid-url). Captura el error y muestra un mensaje
personalizado que indique que la página no fue encontrada.
1. Usa try/catch para detectar el error.
2. Muestra un mensaje de "Página no encontrada" si ocurre un error.
 */

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    error();
}

async function error() {

    try {
        const url = "https://jsonplaceholder.typicode.com/invalid-url";

        const response = await fetch(url, {})

        if (!response.ok) {
            throw new Error("Página no encontrada.")
        }
        await response.json();
        console.log("Página encontrada!")
    } catch(err) {
        console.log("Error", err)
    }
}