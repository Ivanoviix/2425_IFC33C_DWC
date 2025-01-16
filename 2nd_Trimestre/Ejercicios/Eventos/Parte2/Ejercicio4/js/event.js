/* Ejercicio 4: Prevenir el comportamiento predeterminado

Crea una página con los siguientes elementos:
1. Un enlace (<a>) que dirija a una página externa.
2. Un contenedor div que rodee al enlace.

Agrega manejadores de eventos que:
● Eviten que el navegador siga el enlace cuando el usuario haga clic en él.
● Registren un mensaje en la consola al detectar un clic en el div.
Prueba el comportamiento con y sin stopPropagation() en el manejador del enlace y
explica qué ocurre. */


document.addEventListener("DOMContentLoaded", cargarDOM);

function cargarDOM() {
    let enlace = document.querySelector("a");
    enlace.addEventListener("click", redirigirEnlace);
    
    let div = document.getElementById("div");
    div.addEventListener("click", mensajeDiv)
}

function redirigirEnlace(e) {
    alert("Click en el enlace");
    e.preventDefault()
}

function mensajeDiv() {
    alert("Mensaje del div")
}

