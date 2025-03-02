/* 
Ejercicio 10: Renderizado Dinámico de Datos con fetch
Enunciado:
Crea una aplicación que realice una solicitud fetch a
https://jsonplaceholder.typicode.com/albums para obtener una lista de álbumes. Luego,
muestra los títulos de los primeros 10 álbumes en una lista HTML (<ul>).
Requisitos:
1. Inserta los títulos en el DOM dentro de una lista desordenada (<ul>).
2. Si hay un error en la solicitud, muestra un mensaje de error en la página.
*/

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    cargaUrl();
}
