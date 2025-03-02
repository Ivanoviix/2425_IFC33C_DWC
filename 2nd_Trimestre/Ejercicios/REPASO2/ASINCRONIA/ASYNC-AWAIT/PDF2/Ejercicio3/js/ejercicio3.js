/* 
Ejercicio 3: Filtrar Resultados de una API con fetch
Enunciado:
Realiza una petición fetch a https://jsonplaceholder.typicode.com/todos para obtener una
lista de tareas. Luego, filtra y muestra solo aquellas tareas que estén marcadas como
completadas.
Requisitos:
1. Muestra las tareas completadas en la consola.
2. Si la solicitud falla, muestra un mensaje de error adecuado
 */

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    fetchSolo();
}

