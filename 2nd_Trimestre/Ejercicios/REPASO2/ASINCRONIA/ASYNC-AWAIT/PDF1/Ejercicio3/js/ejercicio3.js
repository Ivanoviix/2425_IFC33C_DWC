/* 
Ejercicio 3: Encadenar Múltiples Solicitudes con async/await
Enunciado:
Crea una función que primero obtenga una lista de usuarios desde
https://jsonplaceholder.typicode.com/users, y luego, para el primer usuario, obtenga sus
publicaciones desde https://jsonplaceholder.typicode.com/posts?userId=1. Muestra el
nombre del usuario y los títulos de sus publicaciones.
Requisitos:
1. Usa async/await para ambas solicitudes.
2. Maneja errores con try/catch.
*/

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    lista();
}

async function lista() {

    try {
        let url1 = "https://jsonplaceholder.typicode.com/users";

        const response = await fetch(url1, {})
        if (!response.ok) {
            throw new Error("No ha podido recoger los datos de los usuarios")
        }

        const respuesta = await response.json();
        let user1 = respuesta[0];


        let url2 = `https://jsonplaceholder.typicode.com/posts?${user1.id}`;

        const response2 = await fetch(url2, {})

        if (!response2.ok) {
            throw new Error("No ha podido recuperar los datos del usuario")
        }
        const getUser = await response2.json();
        console.log(`El usuario ${user1.name} tiene estos titulos en sus publicaciones:`);

        getUser.forEach(user => {
            console.log(`${user.title}`);
        });
    } catch (error) {
        console.log("Error:", error);
    }

}