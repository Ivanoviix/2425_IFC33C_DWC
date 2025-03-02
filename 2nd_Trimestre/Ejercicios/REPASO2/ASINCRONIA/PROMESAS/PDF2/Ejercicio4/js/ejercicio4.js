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
    race();
}
let imagenes = ["foto1.jpg", "foto2.jpg", "foto3.jpg"]

function cargaImagen(imagen) {
    let min = 1;
    let max = 5;
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`La imagen ${imagen} se cargó en ${random} segundos.`);

            reject(`Error al cargar la imagen ${imagen}`)
        }, random * 1000);
    })
}

function race() {
    return Promise.race(imagenes.map(cargaImagen))
        .then((respuesta) => {
            console.log(respuesta);
        }).catch((error) => {
            console.log(error);
        });
}

// resultado === "exitoso" ? resolve("Operación exitosa") : reject("Operación fallida");

// Haciendo un for para recorrer el array.
/* 
let imagenes = ["foto1.jpg", "foto2.jpg", "foto3.jpg"]

function cargaImagen(imagen) {
    let min = 1;
    let max = 5;
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve(`La imagen ${imagen} se cargó en ${random} segundos.`);
            }
            reject(`Error al cargar la imagen ${imagen}`)
        }, random * 1000);
    })
}

function race() {
    let promesas = []
    for (image of imagenes) {
        promesas.push(cargaImagen(image))
    }
    return Promise.race(promesas)
    .then((respuesta) => {
        console.log(respuesta);
    }).catch((error) => {
        console.log(error);
    });
} 
    */