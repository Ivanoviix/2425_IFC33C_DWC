/* 
Ejercicio 8: Manejo de Errores HTTP con fetch
Enunciado:
Realiza una solicitud fetch a una URL inexistente
(https://jsonplaceholder.typicode.com/invalid-url). Captura el error y muestra un mensaje
personalizado que indique que la página no fue encontrada.
Requisitos:
1. Detecta el error HTTP y muestra un mensaje de "Página no encontrada".
2. Asegúrate de que la aplicación no se detenga al ocurrir el error.
*/
document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    cargaUrl();
}

function cargaUrl() {
    url = "https://jsonplaceholder.typicode.com/invalid-url";

    return fetch(url, {
            method: "GET"
    }).then((response) => {
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("Página no encontrada")
            }
            throw new Error("Error al encontrar la URL")
        }
        return response.json()
    }).then((result) => {
        console.log("EL MENSAJE HA SIDO RECIBIDO", result);
    }).catch((error) => {
        console.log("Error", error.message);
    })
}
