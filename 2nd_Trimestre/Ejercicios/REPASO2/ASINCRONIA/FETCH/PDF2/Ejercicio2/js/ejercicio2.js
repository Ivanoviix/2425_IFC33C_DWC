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
    let labelTitulo = document.createElement('label');
    labelTitulo.textContent = "Título: ";
    let inputTitulo = document.createElement('input');
    inputTitulo.type = "text";
    inputTitulo.id = "titulo";
    
    let labelContenido = document.createElement('label');
    labelContenido.textContent = "Contenido: ";
    let inputContenido = document.createElement('textarea');
    inputContenido.id = "contenido";
    
    let labelId = document.createElement('label');
    labelId.textContent = "ID: ";
    let inputId = document.createElement('input');
    inputId.type = "number";
    inputId.id = "id";
    
    let boton = document.createElement('button');
    boton.textContent = "Enviar";

    form.appendChild(labelTitulo);
    form.appendChild(inputTitulo);
    form.appendChild(labelContenido);
    form.appendChild(inputContenido);
    form.appendChild(labelId);
    form.appendChild(inputId);
    form.appendChild(boton);
    document.body.appendChild(form);

    boton.addEventListener("click", (event) => {
        event.preventDefault();

        let titulo = document.getElementById('titulo').value.trim();
        let contenido = document.getElementById('contenido').value.trim();
        let id = document.getElementById('id').value.trim();

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
            if (!response.ok) {
                throw new Error("Error en el servidor");
            }
            return response.json();
        }).then((respuesta) => {
            console.log("El texto ha sido introducido", respuesta);
            let mensaje = document.createElement('p');
            mensaje.textContent = `Publicación creada con éxito. ID: ${respuesta.id}`;
            document.body.appendChild(mensaje);
        }).catch((err) => {
            console.log("Error:", err);
        });
    });
}