/* Ejercicio 5: Eventos con captura y burbuja
Crea un documento con este HTML:

<div id="contenedor">
<section id="seccion">
<button id="boton">Haz clic aquí</button>
</section>
</div>

En JavaScript:
1. Añade un manejador en la fase de captura para el div.
2. Añade un manejador en la fase de burbuja para el section.
3. Añade un manejador al button que muestre un mensaje en la consola.

Explica:
● ¿Cuál es el orden de ejecución de los manejadores?
● ¿Cómo cambia el comportamiento si detienes la propagación del evento en el
manejador del button? */

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    let div = document.getElementById("contenedor");
    let section = document.getElementById("seccion");
    let boton = document.getElementById("boton");

    div.addEventListener("click", ()=> {console.log("div - captura")}, true)

    section.addEventListener("click", () => {console.log("section - burbuja")}, false)

    boton.addEventListener("click", (e) => {
        console.log("boton - burbuja"); 
        e.stopPropagation})
}