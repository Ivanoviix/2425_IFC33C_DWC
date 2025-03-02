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
