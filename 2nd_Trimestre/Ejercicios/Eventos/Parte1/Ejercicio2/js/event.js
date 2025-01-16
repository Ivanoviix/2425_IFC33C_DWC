// Ejercicio 2: Agregar un evento básico a un botón

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
     let boton = document.querySelectorAll("#boton1")[0];
    boton.onclick = () => {
        alert('El texto del botón cambiará!');
        boton.innerText = '¡Texto cambiado!';

    }
    
     boton.addEventListener('click', () => {
        alert('El texto del botón cambiará!');
        boton.innerText = '¡Texto cambiado!';
    }) 

    // Dos maneras de hacerlo. La segunda es la mejor opción.
}

 
