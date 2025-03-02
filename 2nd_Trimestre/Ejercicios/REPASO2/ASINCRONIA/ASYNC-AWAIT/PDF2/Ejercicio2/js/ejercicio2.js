/* 
Ejercicio 2: Publicar Datos en una API con fetch
Enunciado:
Crea un formulario simple en HTML que permita al usuario ingresar un título y un cuerpo de
una publicación. Al enviar el formulario, utiliza fetch para hacer una petición POST a
https://jsonplaceholder.typicode.com/posts con los datos ingresados.
Requisitos:
1. Utiliza el método POST y envía los datos en formato JSON.
2. Muestra en la consola la respuesta del servidor.
3. Si hay un error, muestra un mensaje adecuado en la consola.
*/

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    base()
    datos();
}


