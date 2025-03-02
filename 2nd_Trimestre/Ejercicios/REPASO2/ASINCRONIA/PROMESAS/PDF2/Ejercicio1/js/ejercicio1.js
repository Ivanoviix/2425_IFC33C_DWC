/* 
Objetivo: Crear una página que obtenga datos desde una API pública utilizando fetch y los
muestre en una tabla.
Descripción:
1. Utiliza la API pública de JSONPlaceholder:
https://jsonplaceholder.typicode.com/posts.
2. La página debe tener una tabla con tres columnas: ID, Título y Contenido.
3. Realiza una petición GET para obtener los datos de las publicaciones.
4. Muestra únicamente las 10 primeras publicaciones en la tabla.
5. Maneja posibles errores en la petición, como fallos de red o respuestas con errores
HTTP (404, 500, etc.).
*/

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    obtenerUsuarios();
}

function obtenerUsuarios() {
    let table = document.createElement('table');

    let thI = document.createElement('th');
    let thT = document.createElement('th');
    let thC = document.createElement('th');
    let trTitulos = document.createElement('tr');

    thI.innerText = "ID";
    thT.innerText = "Titulo";
    thC.innerText = "Contenido";

    trTitulos.appendChild(thI);
    trTitulos.appendChild(thT);
    trTitulos.appendChild(thC);
    table.appendChild(trTitulos);
    document.body.appendChild(table);

    url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'Application/JSON'
        }
    }).then((response) => {
        if (!response.ok) {
            if (response.status === 404 || response.status === 505) {
                throw new Error(`Código ${response.status}.`)
            }
            throw new Error("Problemas con el servidor")
        }
        return response.json()
    }).then((respuesta) => {
        respuesta.slice(0, 10).forEach(post => {
            let tr = document.createElement('tr');
            let tdI = document.createElement('td');
            let tdT = document.createElement('td');
            let tdC = document.createElement('td');
            tdI.innerText = post.id;
            tdT.innerText = post.title;
            tdC.innerText = post.body;
            tr.appendChild(tdI);
            tr.appendChild(tdT);
            tr.appendChild(tdC);
            table.appendChild(tr);
        });
    }).catch((err) => {
        console.log("Error:", err);
    })
}