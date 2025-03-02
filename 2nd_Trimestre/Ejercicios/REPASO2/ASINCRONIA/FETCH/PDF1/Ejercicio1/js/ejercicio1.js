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

function obtenerUsuarios() {
    url = "https://jsonplaceholder.typicode.com/users";

    fetch(url, {
        method: "GET"
    }).then((respuesta) => {
        if (!respuesta.ok) {
            throw new Error("No se pudo obtener la información.");
        }
        return respuesta.json();
    }).then((resultado) => {
        resultado.forEach(element => {
            // console.log("Nombre: ", element.name, "\nMail: ", element.email);
            console.log(`Nombre: ${element.name}, Correo: ${element.email}`);
        });
    }).catch((error) => {
        console.log(error)
    })
}