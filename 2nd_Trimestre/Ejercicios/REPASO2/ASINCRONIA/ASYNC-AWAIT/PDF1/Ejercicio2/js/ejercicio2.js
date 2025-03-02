/* 
Ejercicio 2: Publicar Datos con async/await
Enunciado:
Crea una función publicarPost que envíe un nuevo post a
https://jsonplaceholder.typicode.com/posts usando el método POST. Los datos a enviar
deben incluir un título y un cuerpo.
Requisitos:
1. Utiliza async/await para realizar la solicitud.
2. Muestra la respuesta del servidor en la consola.
3. Usa try/catch para capturar y mostrar errores.

*/

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    publicaPost();
}

function publicaPost() {
    const form = document.createElement('form');
    const tituloLabel = document.createElement('label');
    tituloLabel.textContent = 'Título: ';
    const tituloInput = document.createElement('input');
    tituloInput.type = 'text';
    tituloInput.id = 'titulo';
    const tituloContenido = document.createElement('label');
    tituloContenido.textContent = 'Contenido: ';
    const contenidoInput = document.createElement('input');
    contenidoInput.type = 'text';
    contenidoInput.id = 'cuerpo';
    let boton = document.createElement('button');
    boton.innerText = "Envíar";

    tituloLabel.appendChild(tituloInput);
    tituloContenido.appendChild(contenidoInput);
    form.appendChild(tituloLabel);
    form.appendChild(tituloContenido);
    form.appendChild(boton);
    document.body.appendChild(form);


    form.addEventListener("submit", async (event) => {
        const titulo = document.getElementById('titulo').value;
        const cuerpo = document.getElementById('cuerpo').value;
        event.preventDefault();

        try {
            const url = "https://jsonplaceholder.typicode.com/psts";

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: titulo,
                    body: cuerpo
                })
            })

            if (!response.ok) {
                throw new Error(`Problemas con el servidor, ${response.status}, ${response.statusText}`)
            }
            
            const respuesta = await response.json()

            console.log("El post se ha enviado correctamente con los datos:", respuesta);

        } catch (error) {
            console.log("Error:", error.message)
        }
    });
}

