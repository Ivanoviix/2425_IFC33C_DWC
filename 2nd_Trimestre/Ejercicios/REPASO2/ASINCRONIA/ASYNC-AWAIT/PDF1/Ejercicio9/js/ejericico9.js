/* 
Ejercicio 9: Renderizado Dinámico de Datos con async/await
Enunciado:
Crea una aplicación que obtenga una lista de álbumes desde
https://jsonplaceholder.typicode.com/albums y muestre los títulos de los primeros 10
álbumes en una lista HTML (<ul>).
Requisitos:
1. Inserta los títulos en el DOM dentro de una lista desordenada (<ul>).
2. Maneja errores mostrando un mensaje en la página.

 */
document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    comentarios();
}

async function comentarios() {
    try {
        let ul = document.createElement('ul');
        document.body.appendChild(ul);

        const url = "https://jsonplaceholder.typicode.com/albums";

        const response = await fetch(url,{});

        if (!response.ok) {
            throw new Error("Página no encontrada.")
        }
        const respuesta = await response.json();
        respuesta.slice(0,10).forEach(usuario => {
            let li = document.createElement('li')
            li.innerText = usuario.title;
            ul.appendChild(li);
        });

    } catch (err) {
        console.log("Error", err)
    }
}