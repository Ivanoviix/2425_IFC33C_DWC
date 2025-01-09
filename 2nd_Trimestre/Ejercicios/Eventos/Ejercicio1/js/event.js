// Ejercicio 1:
document.addEventListener('DOMContentLoaded', cargarCodigo);

function cargarCodigo() {
    let contenedor = document.getElementsByClassName('contenedor')[0];
    let boton1 = document.getElementById('boton1');
    let input1 = document.getElementById('input1');


    contenedor.addEventListener('scroll', () => {
        alert('¡Hiciste scroll en el contenedor!')
    });

    boton1.addEventListener('click', () => {
        alert('¡Hiciste click en el botón!')
    });

    input1.addEventListener('input', () => {
        setTimeout(() => {
            alert('¡Escribiste algo en el input!')
        }, 3000);
    });
}




