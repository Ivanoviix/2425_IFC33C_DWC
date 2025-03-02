/* 
Ejercicio 1: Obtener Información de Usuarios con async/await
Enunciado:
Crea una función obtenerUsuarios utilizando async/await para obtener la lista de usuarios
desde https://jsonplaceholder.typicode.com/users. Muestra en la consola el nombre y correo
de cada usuario.
Requisitos:
1. Usa try/catch para manejar errores.
2. Muestra un mensaje en consola si ocurre un error durante la solicitud.
*/

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    obtenerUsuarios();
}

async function obtenerUsuarios() {
    let url = "https://jsonplaceholder.typicode.com/users";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Error al encontrar los usuarios.")
        } 
        const respuesta = await response.json();

        respuesta.forEach(users => {
            console.log(`El nombre: ${users.name} \nEmail: ${users.email}`);
        });
    } catch(error) {
        console.log(error)
    }
}
