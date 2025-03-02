/* 
Ejercicio 2: Publicar Datos en una API con fetch
Enunciado:
Crea un formulario simple en HTML que permita al usuario ingresar un título y un cuerpo de
una publicación. Al enviar el formulario, utiliza fetch para hacer una petición POST a
https://jsonplaceholder.typicode.com/posts con los datos ingresados.
Requisitos:
1. Utiliza el método POST y envía los datos en formato JSON.
2. Muestra en la consola la respuesta del servidor.
3. Si hay un error, muestra un mensaje adecuado en la consola.
*/

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    base()
    datos();
}


function base() {
    let form = document.createElement("form");
    form.id = "formId";
    let label = document.createElement("label");
    label.id = "labelId"
    let p1 = document.createElement("p");
    p1.textContent = "Titulo: "
    let title = document.createElement("input");
    title.id = "titleId";
    let p2 = document.createElement("p");
    p2.textContent = "Cuerpo: "
    let body = document.createElement("textarea");
    body.id = "bodyId";
    let boton = document.createElement("button");
    boton.textContent = "Envíar"

    label.appendChild(p1);
    label.appendChild(title);
    label.appendChild(p2);
    label.appendChild(body);
    label.appendChild(boton);
    form.appendChild(label);
    document.body.appendChild(form);
}

function datos() {
    let form = document.getElementById("formId");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const titulo = document.getElementById('titleId').value;
        const cuerpo = document.getElementById('bodyId').value;

        const data = {
            title: titulo,
            body: cuerpo
        }
        aplicarDatos(data)
    })
}

function aplicarDatos(datos) {
    url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url, { 
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    }).then((request) => {
        if (!request.ok) {
            throw new Error("Hubo un error")
        }
        return request.json()
    }).then((respuesta) => {
        console.log("Estos son los datos introducidos: ", respuesta)
    }).catch((error) => {
        console.log(error)
    })
}