/* Ejercicio 3: Delegación de eventos

Crea una lista de tareas con los siguientes elementos:
1. Un contenedor ul con tres tareas iniciales como li.
2. Un botón que permita añadir nuevas tareas dinámicamente.

Utiliza delegación de eventos para que, al hacer clic en cualquier tarea (li), se muestre un
mensaje en la consola con el texto de la tarea seleccionada.
Finalmente, añade funcionalidad para que al hacer clic en el botón, se agregue un nuevo
elemento li a la lista, y este también pueda ser detectado por el manejador de eventos del
contenedor ul. */

document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    let listaLi = document.querySelectorAll('li');
    listaLi.forEach((li) => {
        li.addEventListener('click', añadirListener);
    });

    let boton = document.getElementById("boton");
    boton.addEventListener('click', addButton);
}

function addButton(){
    let ul = document.querySelector('ul');
    let nuevaTarea = document.createElement('li');
    nuevaTarea.innerHTML = `Tarea ${ul.children.length + 1}`;
    nuevaTarea.addEventListener('click', añadirListener);
    ul.appendChild(nuevaTarea);
}

function añadirListener(e) {
    if (e.target.tagName === "LI") {
        alert(`Seleccionaste: ${e.target.textContent}`);
    }
}