/* 
Ejercicio 1: Consulta de Usuarios a un API Simulada
Enunciado:
Tu tarea es simular una llamada a un servidor para obtener una lista de usuarios. Crea una
función obtenerUsuarios que devuelva una promesa. La promesa debe resolverse después
de 2 segundos con un array de objetos que representen usuarios. Si ocurre un error (simula
una probabilidad del 30%), la promesa debe rechazarse con un mensaje de error.
// Ejemplo del resultado esperado:
[
{ id: 1, nombre: "Juan Pérez" },
{ id: 2, nombre: "Ana García" },
{ id: 3, nombre: "Luis Fernández" }
]
Requisitos:
1. Muestra el resultado en consola utilizando .then() y maneja el error con .catch().
2. Muestra un mensaje en la consola indicando que la consulta está en proceso antes
   de que se resuelva la promesa
 */

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    obtenerUsuarios();
}

function obtenerUsuarios() {
    const usuarios = [
        { id: 1, nombre: "Juan Pérez" },
        { id: 2, nombre: "Ana García" },
        { id: 3, nombre: "Luis Fernández" }
    ]

    return new Promise((resolve, reject) => {
        console.log("Procesando para obtener los usuarios...")
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject("Error al encontrar los usuarios.")
            }
            resolve(usuarios);
        }, 2000);
    }).then((respuesta) => {
        console.log("Los usuarios han sido encontrados: ", respuesta)
    }).catch((error) => {
        console.log(error)
    });
}