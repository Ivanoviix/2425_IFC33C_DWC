/* 
Ejercicio 6: Eliminar Datos con DELETE y async/await
Enunciado:
Crea una función eliminarPost que elimine el post con ID 1 en
https://jsonplaceholder.typicode.com/posts/1.
Requisitos:
1. Usa el método DELETE con async/await.
2. Muestra un mensaje en consola confirmando la eliminación.
3. Maneja errores con try/catch.

 */

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    eliminarPost();
}

async function eliminarPost() {

    try {
        const url = "https://jsonplaceholder.typicode.com/posts/1";

        const respuesta = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "applications/json"
            }
        })

        if (!respuesta.ok) {
            throw new Error("Error al borrar datos en el servidor")
        }
        await respuesta.json();
        console.log("Datos eliminados")
    } catch(err) {
        console.log("Error:", err)
    }


}