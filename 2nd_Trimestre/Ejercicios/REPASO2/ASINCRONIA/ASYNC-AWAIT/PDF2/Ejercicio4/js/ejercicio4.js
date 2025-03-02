/* 
Ejercicio 4: Manejo de Múltiples Consultas con Promise.all y fetch
Enunciado:
Realiza tres solicitudes fetch a las siguientes URLs:
1. https://jsonplaceholder.typicode.com/posts
2. https://jsonplaceholder.typicode.com/users
3. https://jsonplaceholder.typicode.com/comments
Usa Promise.all para esperar que todas las solicitudes se completen y muestra el número
total de publicaciones, usuarios y comentarios en la consola.
Requisitos:
1. Muestra el número total de publicaciones, usuarios y comentarios.
2. Si alguna de las solicitudes falla, captura el error y muestra un mensaje adecuado.

 */

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    promesas();
}

