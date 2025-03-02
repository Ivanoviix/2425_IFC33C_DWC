/* 
Ejercicio 7: Eliminar Datos con DELETE usando fetch
Enunciado:
Realiza una solicitud fetch para eliminar una publicación con ID 1 en
https://jsonplaceholder.typicode.com/posts/1.
Requisitos:
1. Utiliza el método DELETE para eliminar la publicación.
2. Muestra un mensaje en la consola confirmando que la publicación ha sido eliminada.
3. Si la solicitud falla, muestra un mensaje adecuado en la consola.
 */

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    actualizarDatos();
    eliminarLibro();
}

function actualizarDatos() {
    const form = document.createElement('form');
    form.id = 'updateForm';

    const idLabel = document.createElement('label');
    idLabel.htmlFor = 'id';
    idLabel.textContent = 'ID:';
    form.appendChild(idLabel);

    const idInput = document.createElement('input');
    idInput.type = 'text';
    idInput.id = 'id';
    idInput.name = 'id';
    idInput.required = true;
    form.appendChild(idInput);

    form.appendChild(document.createElement('br'));

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Actualizar';
    form.appendChild(submitButton);

    document.body.appendChild(form);
}

function eliminarLibro() {
    const form = document.getElementById('updateForm');
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const id = document.getElementById('id').value;
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

        fetch(url, {
            method: "DELETE"
        }).then((response) => {
            if (!response.ok) {
                throw new Error("Error en el servidor");
            }
            console.log(`Prublicación con ID ${id} eliminada.`)
        }).catch((error) => {
            console.log("Error:", error.message);
        });
    });
}
