/*
BUENA PRÁCTICAS CON EVENTOS
1.Usar addEventListener.
2. Organizar los manejadores de eventos en funciones independientes para mejorar la legibilidad y reutilización del código.

USOS MÁS COMUNES EN LOS EVENTOS
1. Cambiar el contenido de un evento que recibe el evento (propiedad target)
2. Para obtener las cordenadas del ratón
3. Prevenir el comportamiento por defecto de un evento (event.preventDefault())
*/

// Agregar un event listener para el evento 'DOMContentLoaded' en el documento
document.addEventListener('DOMContentLoaded', cargaInicial());

function cargaInicial() {
    alert('El DOM ha sido completamente cargado y parseado'); // Mostrar una alerta cuando el DOM se ha cargado completamente

    // Obtener el elemento con id 'boton1' y agregar un event listener para el evento 'click'
    let boton1 = document.getElementById('boton1');
    boton1.addEventListener('click', () => {
        alert("¡Hiciste click!"); // Mostrar una alerta cuando se hace click en 'boton1'
    });

    // Agregar otro event listener para el evento 'click' en 'boton1'
    boton1.addEventListener('click', () => {
        alert('¡Hiciste click!'); // Mostrar una alerta cuando se hace click en 'boton1'
    });


    // Agregar un event listener para el evento 'click' en 'boton1' que ejecuta la función 'alerta'
    boton1.addEventListener('click', alerta);

    // Eliminar el event listener para el evento 'click' en 'boton1' que ejecuta la función 'alerta'
    boton1.removeEventListener('click', alerta); // Este listener se elimina inmediatamente después de ser agregado

    // Obtener el elemento con id 'area' y agregar un event listener para el evento 'keydown'
    let area = document.getElementById('area');
    console.log(area);
    area.onkeydown = (event) => {
        alert(`Tecla presionada: ${event.key}`); // Mostrar una alerta con la tecla presionada
        console.log(event); // Imprimir el evento en la consola
    };

    // Obtener el elemento con id 'entrada' y agregar un event listener para el evento 'input'
    let input = document.getElementById('entrada');
    input.addEventListener('input', () => {
        alert(`Nuevo valor: ${input.value}`); // Mostrar una alerta con el nuevo valor del input en tiempo real
    });

    // Agregar un event listener para el evento 'scroll' en la ventana
    window.addEventListener('scroll', () => {
        alert('Hiciste scroll en la página'); // Mostrar una alerta cuando se hace scroll en la página
    });

    // Agregar un event listener para el evento 'keydown' en 'area' que ejecuta la función 'eventoTeclado'
    area.addEventListener('keydown', eventoTeclado);
};


function imprimir(event) {
    alert('Hola a todosss!!');
    console.log(event);
}

/**
 * Muestra una alerta con el mensaje 'Hiciste click!'.
 * Esta función se ejecuta cuando se produce un evento de clic.
 */
function alerta() {
    alert('Hiciste click!');
}

/**
 * Muestra una alerta con la tecla presionada y la imprime en la consola.
 * Esta función se ejecuta cuando se produce un evento de 'keydown'.
 */
function eventoTeclado(event) {
    alert(`Tecla presionada: ${event.key}`); // Mostrar una alerta con la tecla presionada
    console.log(event); // Imprimir el evento en la consola
}

