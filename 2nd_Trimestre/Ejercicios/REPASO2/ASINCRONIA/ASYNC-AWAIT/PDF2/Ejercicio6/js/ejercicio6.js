/* 
Ejercicio 6: Actualizar Información con PUT usando fetch
Enunciado:
Utiliza fetch para actualizar la información de un usuario en
https://jsonplaceholder.typicode.com/users/1. Cambia el nombre del usuario a "Nombre
Actualizado" y su correo a "actualizado@correo.com".
Requisitos:
1. Utiliza el método PUT para actualizar los datos.
2. Muestra en la consola la respuesta del servidor.
3. Si la solicitud falla, muestra un mensaje de error adecuado.
 */

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    actualizarDatos();
    apliarCambios();
}
