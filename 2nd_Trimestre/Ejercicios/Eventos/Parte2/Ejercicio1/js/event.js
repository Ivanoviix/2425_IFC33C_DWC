/* Ejercicio 1: Fases de la propagación de eventos

Crea un documento HTML con tres elementos anidados: un div, un section y un button.
Utiliza JavaScript para agregar manejadores de eventos a cada uno de ellos. Estos
manejadores deben mostrar un mensaje en la consola con el nombre del elemento y la fase
en la que se encuentra (captura o burbuja).

Investiga y responde:
1. ¿En qué orden se ejecutan los eventos en la fase de captura?
Si pulso el elemento div aparecerá el mensaje del div únicamente.
Si pulso el elemento section aparecerá el mensaje del div, section y el div nuevamente. Ya que está dentro del div.
Si pulso el elemento botón aparecerán los 3 mensajes, ya que está dentro de div y dentro de section.

2. ¿Qué sucede si detienes la propagación de eventos con stopPropagation()?
Por ejemplo, yo lo he puesto en el elemento section y 
3. ¿Cómo afecta la fase de burbuja al comportamiento general? */

/* Que diferencia hay entre la fase captura o objetivo o burbuja*/
/*
fase de catpura  <-- false
fase de objetvio <-- addEventListener('este es el evento', funcion) 
fase de burbuja  <-- true
*/
/* addEventListener('este es el evento', funcion, (false o true, si no ponemos nada es false,)) */

document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    let div = document.getElementsByTagName('div')[0];
    let section = document.getElementsByTagName('section')[0];
    let boton = document.getElementsByTagName('button')[0];

    div.addEventListener('click', mostrarMensaje, true) // Captura
    section.addEventListener('click', mostrarMensaje, true) // Captura
    boton.addEventListener('click', mostrarMensaje, true) // Captura
    
    div.addEventListener('click', mostrarMensaje, false) // Burbuja
    section.addEventListener('click', mostrarMensaje, false) // Burbuja
    boton.addEventListener('click', mostrarMensaje, false)  // Burbuja

    section.addEventListener("click", (e) => {
        e.stopPropagation()
    })
}


function mostrarMensaje(evento) {
    console.log(`Nombre del elemento ${this.tagName}, Fase: ${evento.eventPhase === 1 ? "Captura" : "Burbuja"}`);
    
}
/*                Burbuja
   <-----------------------------------
html --> head -->
     --> body --> div --> Section --> button (objetivo)
  ----------------------------------->
                 captura */