/* 
Ejercicio 10: Renderizado Dinámico de Datos con fetch
Enunciado:
Crea una aplicación que realice una solicitud fetch a
https://jsonplaceholder.typicode.com/albums para obtener una lista de álbumes. Luego,
muestra los títulos de los primeros 10 álbumes en una lista HTML (<ul>).
Requisitos:
1. Inserta los títulos en el DOM dentro de una lista desordenada (<ul>).
2. Si hay un error en la solicitud, muestra un mensaje de error en la página.
*/

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    cargaUrl();
}


function cargaUrl() {
    const ul = document.createElement("ul");
    ul.id = "ulID";
    const li = document.createElement("li");
    li.id = "ilID";
    document.body.appendChild(ul);

    url = "https://jsonplaceholder.typicode.com/albums";
    fetch(url, {
        method: "GET",
    }).then((response) => {
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("Error en el servidor")
            }
            throw new Error("Error al enviar los datos al servidor")
        }
        return response.json()
    }).then((respuesta) => {
        let array = []
        respuesta.slice(0, 10).forEach(element => {
            array.push(element.title);
        });
        array.sort().forEach(titulo => {
            console.log(titulo)
            let li = document.createElement("li");
            li.textContent = titulo;
            ul.appendChild(li)
        })
    }).catch((error) => {
        console.log("Error:", error.message)
    });
}