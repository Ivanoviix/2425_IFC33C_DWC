/* 
Ejemplo 2: Petición POST
Objetivo: Crear una página con un formulario que permita enviar datos a una API pública
utilizando fetch.
Descripción:
1. Utiliza la API pública de JSONPlaceholder:
https://jsonplaceholder.typicode.com/posts.
2. La página debe incluir:
○ Un campo de texto para el título.
○ Un área de texto para el contenido.
○ Un botón para enviar el formulario.
3. Realiza una petición POST al enviar el formulario:
○ Configura los encabezados de la petición para enviar los datos en formato
JSON.
○ Incluye un cuerpo con los campos title, body y un userId fijo (por ejemplo, 1).
4. Muestra un mensaje en la página confirmando que la publicación fue creada con
éxito e incluye el ID del nuevo recurso.
5. Maneja posibles errores en la petición, como fallos de red o respuestas con errores
HTTP.
*/

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    subirPost();
}

function subirPost() {
    let form = document.createElement('form');
    let label = document.createElement('label');
    let inputTitulo = document.createElement('input');
    inputTitulo.type = "text";
    let inputContenido = document.createElement('input');
    inputContenido.type = "textarea";
    let boton = document.createElement('button');
    boton.innerText = "Envíar"
    let inputId = document.createElement('input');
    inputId.type = "number";

    label.appendChild(inputTitulo);
    label.appendChild(inputContenido);
    label.appendChild(inputId);
    label.appendChild(boton);
    form.appendChild(label)
    document.body.appendChild(form);

    boton.addEventListener("click", (event) => {

        event.preventDefault();
        let titulo = document.getElementsByTagName('input')[0].value.trim();
        let contenido = document.getElementsByTagName('input')[1].value.trim();
        let id = document.getElementsByTagName('input')[2].value.trim();

        let url = "https://jsonplaceholder.typicode.com/posts";

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: id,
                title: titulo,
                body: contenido
            })
        }).then((response) => {
            console.log(response)
            if (!response.ok) {
                if (response.status === 404 || response.status === 505) {
                    throw new Error(`${response.status}`);
                }
                throw new Error("Error en el servidor");
            }
            return response.json()
        }).then((respuesta) => {
            let p = document.createElement('p');
            p.innerText = `El post ha sido introducido ${respuesta.id}`
            p.style.color = "green";
            form.appendChild(p)
        }).catch((err) => {
            console.log("Error:", err);
        });
    });
}
