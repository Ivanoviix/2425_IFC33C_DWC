/* Ejercicio 2: Detener la propagación de eventos

Diseña un formulario con los siguientes elementos:
1. Un campo de texto para el nombre del usuario.
2. Un botón que diga "Enviar".

Agrega los siguientes manejadores:
● Un manejador en el form que muestre un mensaje en la consola indicando
que el formulario ha sido enviado.
● Un manejador en el botón "Enviar" que detenga tanto la propagación como el
envío del formulario.

Explica cómo cambiaría el comportamiento si stopPropagation() no se
utilizara. */

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {

    let form = document.querySelector('form');
    let input = document.querySelector('input');
    let boton = document.querySelector('button');

    form.addEventListener('submit', (e)=> { alert("Formulario enviado")
        console.log(e)
    })
    boton.addEventListener('click', (e)=> {alert("Botón clicado")
        e.stopPropagation() // revisar que hace con esto
        e.preventDefault() // Para evitar que haga la acción por defecto (submit)
        console.log("Formulario enviado")
    })
}
