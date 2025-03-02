/* 
Ejercicio 7: Eliminar Datos con DELETE usando fetch
Enunciado:
Realiza una solicitud fetch para eliminar una publicación con ID 1 en
https://jsonplaceholder.typicode.com/posts/1.
Requisitos:
1. Utiliza el método DELETE para eliminar la publicación.
2. Muestra un mensaje en la consola confirmando que la publicación ha sido eliminada.
3. Si la solicitud falla, muestra un mensaje adecuado en la consola.
 */

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    actualizarDatos();
    eliminarLibro();
}