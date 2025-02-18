/* 
Ejercicio 5: Consulta a un API Pública con fetch y Manejo de Errores
Enunciado:
Utiliza el API pública de JSONPlaceholder para obtener una lista de publicaciones.
1. Realiza una petición fetch a https://jsonplaceholder.typicode.com/posts.
2. Muestra en la consola los títulos de las primeras 5 publicaciones.
3. Si la petición falla, muestra un mensaje de error en la consola.
Requisitos:
4. Encadena las promesas utilizando .then() para procesar la respuesta.
5. Maneja los errores con .catch()
*/

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    dado();
}
