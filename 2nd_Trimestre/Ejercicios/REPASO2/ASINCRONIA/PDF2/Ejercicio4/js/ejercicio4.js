/* 
Ejercicio 4: Simulación de Carga de Imágenes con Retrasos (Usando
Promise.race)
Enunciado:
Estás desarrollando una galería de imágenes para una página web. Crea una función
cargarImagen que acepte el nombre de una imagen y devuelva una promesa que simule la
carga de la imagen con un tiempo aleatorio entre 1 y 5 segundos.
Utiliza Promise.race para mostrar la primera imagen que se cargue correctamente.
Requisitos:
1. Implementa la función para las imágenes ["foto1.jpg", "foto2.jpg", "foto3.jpg"].
2. Muestra en la consola cuál fue la primera imagen que se cargó.
 */

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    promesasEncadenada();
}

