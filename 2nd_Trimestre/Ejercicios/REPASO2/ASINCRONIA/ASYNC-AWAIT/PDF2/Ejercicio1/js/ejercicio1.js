/* 
Ejercicio 1: Obtener Información de Usuarios con fetch
Enunciado:
Desarrolla una función que utilice fetch para obtener información de los usuarios desde
https://jsonplaceholder.typicode.com/users. Luego, muestra en la consola el nombre y
correo de cada usuario.
Requisitos:
1. Muestra el nombre y correo de cada usuario en la consola.
2. Si la solicitud falla, muestra un mensaje de error indicando que no se pudo obtener
la información.

 */

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    obtenerUsuarios();
}

