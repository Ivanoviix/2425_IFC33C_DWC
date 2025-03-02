/* 
Ejercicio 5: Actualización de Datos con PUT y async/await
Enunciado:
Crea una función actualizarUsuario que actualice el nombre y correo del usuario con ID 1 en
https://jsonplaceholder.typicode.com/users/1. Cambia el nombre a "Nuevo Nombre" y el
correo a "nuevo@correo.com".
Requisitos:
1. Utiliza el método PUT y async/await.
2. Muestra la respuesta del servidor en la consola.
3. Maneja errores con try/catch
*/

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    actualizarUsuario();
}


async function actualizarUsuario() {
    const nombreInput = document.createElement("input");
    nombreInput.setAttribute("type", "text");
    document.body.appendChild(nombreInput);

    const correoInput = document.createElement("input");
    correoInput.setAttribute("type", "email");
    document.body.appendChild(correoInput);

    const boton = document.createElement("button");
    boton.textContent = "Actualizar Usuario";
    document.body.appendChild(boton);

    boton.addEventListener("click", async () => {
        try {
            const url = "https://jsonplaceholder.typicode.com/users/1";

            const nombre = nombreInput.value;
            const correo = correoInput.value;

            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: nombre,
                    email: correo
                })
            })

            if (!response.ok) {
                throw new Error("Problemas al cambiar los datos del usuario")
            }
            const respuesta = await response.json()
            console.log("DATOS:", respuesta)

        } catch (err) {
            console.log("Error:", err)
        }
    });
}