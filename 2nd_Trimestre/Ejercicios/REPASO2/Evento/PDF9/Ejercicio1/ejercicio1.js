document.addEventListener("DOMContentLoaded", cargarDOM);


function cargarDOM() {
    eventos()
};


function eventos() {
    let input = document.getElementById('inputId');
    let button = document.getElementById('buttonId');

    input.addEventListener('click', () => {
        console.log("Has pulsado el input para escribir.");
    });
    button.addEventListener('click', () => {
        console.log("Has pulsado el botón para enviar el form.");
    });
    window.addEventListener('scroll', () => {
        console.log("Has hecho scroll.");
    });
}
