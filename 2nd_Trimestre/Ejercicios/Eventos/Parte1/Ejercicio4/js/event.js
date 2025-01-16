// Ejercicio 4: Encontrar los nombres únicos
document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    let botonIncrementar = document.getElementById('incrementar');
    botonIncrementar.addEventListener('click', incrementar)

}

// Sacamos fuera el contador para que no reinicie cada vez que llamamos a la funciona incrementar.
let contador = 0;
function incrementar() {
    contador++;
    document.getElementById('contador').innerHTML = contador;
}


