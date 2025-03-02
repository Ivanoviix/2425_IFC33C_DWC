/* 
Ejercicio 6: Actualizar Información con PUT usando fetch
Enunciado:
Utiliza fetch para actualizar la información de un usuario en
https://jsonplaceholder.typicode.com/users/1. Cambia el nombre del usuario a "Nombre
Actualizado" y su correo a "actualizado@correo.com".
Requisitos:
1. Utiliza el método PUT para actualizar los datos.
2. Muestra en la consola la respuesta del servidor.
3. Si la solicitud falla, muestra un mensaje de error adecuado.
 */

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    actualizarDatos();
    apliarCambios();
}

function actualizarDatos() {
    const form = document.createElement('form');
    form.id = 'updateForm';

    const nameLabel = document.createElement('label');
    nameLabel.htmlFor = 'name';
    nameLabel.textContent = 'Nombre:';
    form.appendChild(nameLabel);

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.name = 'name';
    nameInput.required = true;
    form.appendChild(nameInput);

    form.appendChild(document.createElement('br'));

    const emailLabel = document.createElement('label');
    emailLabel.htmlFor = 'email';
    emailLabel.textContent = 'Correo Electrónico:';
    form.appendChild(emailLabel);

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.name = 'email';
    emailInput.required = true;
    form.appendChild(emailInput);

    form.appendChild(document.createElement('br'));

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Actualizar';
    form.appendChild(submitButton);

    document.body.appendChild(form);
}

function apliarCambios() {
    url = "https://jsonplaceholder.typicode.com/users/1";

    let form = document.getElementById('updateForm');
    form.addEventListener("submit", (event) => {
        let nombre = document.getElementById('name').value;
        console.log(nombre)
        let correo = document.getElementById('email').value;
        console.log(correo)
        event.preventDefault()
        fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ // HACE FALTA PASARLO A JSON!!!!!!!!!
                name: nombre,
                email: correo
            }),
        }).then((request) => {
            if (!request.ok) {
                throw new Error("Error al buscar en el servidor");
            }
            return request.json();
        }).then((resultado) => {
            console.log("Los datos han sido enviados correctamente.", resultado);
        }).catch((error) => {
            console.log("Error al enviar los datos.", error.message);
        });
    });


}