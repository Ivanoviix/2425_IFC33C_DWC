/* Ejercicio 6: Combinación de propagación y delegación
Crea el siguiente HTML:

<div id="contenedor">
<button class="boton">Botón 1</button>
<button class="boton">Botón 2</button>
</div>

Agrega los siguientes manejadores: 
1. Un manejador en el div que registre un mensaje en la consola cuando se haga clic
en cualquier botón.
2. Manejadores en cada botón que detengan la propagación del evento y muestren un
mensaje en la consola con el texto del botón.

Explica qué sucede si:
● Quitas stopPropagation() de los manejadores de los botones.
● Agregas nuevos botones dinámicamente al contenedor div.*/

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    let div = document.getElementById("contenedor");
    let botones = document.querySelectorAll("boton");

    div.addEventListener("click", clickDiv);

    botones.forEach(boton => {
        boton.addEventListener("click", clickBoton);
    })
}

function clickDiv(e){
    if (e.target.classList.contains("boton")) {
        console.log(`Click en ${e.target.textContent}`)
    }
}

function clickBoton(e) {
    e.stopPropagation();
    console.log(`Evento detenido en ${e.target.textContent}`);
}
