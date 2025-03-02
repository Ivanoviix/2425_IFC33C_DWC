/* 
Enunciado
Crea una aplicación web que permita simular una búsqueda de usuarios por nombre
utilizando una promesa.
1. Cuando el usuario ingrese un nombre en un campo de texto y haga clic en un botón
de "Buscar", muestra el mensaje "Buscando..." mientras esperas la respuesta.
2. Después de 2 segundos, resuelve la promesa mostrando si el usuario existe o no en
una lista de usuarios simulada.
3. Si ocurre un error en el proceso de búsqueda (por ejemplo, el nombre está vacío),
rechaza la promesa con un mensaje de error.
Requisitos:
● Usa un array de nombres para simular los datos de los usuarios.
● Muestra mensajes de error en rojo
 */

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    p.innerText =" ";

    form = document.getElementById('formId');
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // NECESARIO PARA QUE HAGA EL TIMEOUT
        buscador();
    });

}

function buscador() {  
    let p = document.createElement('p'); // No poner diamantes < >!
    let input = document.getElementById('inputId');
    let label = document.getElementById('labelId');
    let usuarios = ["Jose Maria", "Ivan", "Carles"];
    p.innerText ="Buscando...";
    label.appendChild(p);

    let promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (input.value === "") {
                reject("Input vacio.")
            } else if (usuarios.includes(input.value)) {
                resolve("Usuario encontrado.");
            } else {
                reject("Usuario no encontrado.");
            }
        }, 3000);  
    });

    promesa.then(respuesta => {
        p.innerText = respuesta;
        p.style.color = 'green';

    }).catch(respuesta => {
        p.innerText = respuesta;
        p.style.color = 'red';
    });

}