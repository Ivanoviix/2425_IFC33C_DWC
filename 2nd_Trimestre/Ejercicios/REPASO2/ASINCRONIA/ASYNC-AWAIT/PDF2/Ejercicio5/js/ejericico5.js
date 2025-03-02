/* 
Ejercicio 5: Simulación de Carga de Datos con Indicador de Progreso
Enunciado:
Crea una aplicación que realice una solicitud fetch a
https://jsonplaceholder.typicode.com/photos para obtener una lista de fotos. Mientras se
realiza la solicitud, muestra un mensaje en la consola que diga "Cargando...". Una vez que
la solicitud se complete, muestra los títulos de las primeras 10 fotos.
Requisitos:
1. Muestra "Cargando..." antes de que la solicitud se complete.
2. Muestra los títulos de las primeras 10 fotos en la consola.
3. Si hay un error, muestra un mensaje adecuado en la consola.
*/

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    recogerFotos();
}
