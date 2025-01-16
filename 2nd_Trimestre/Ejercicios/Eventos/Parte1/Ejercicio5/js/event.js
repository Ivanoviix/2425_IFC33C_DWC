
document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    let listaLi = document.querySelectorAll('li');
    // Recorro con un for los lis y muestro el texto del li que he pulsado.
    for (let li of listaLi) {
        li.addEventListener('click', mostrarTexto);
    }

}   

// Mostraria: Has hecho click en el elemento 1 si le damos click a Elemento 1 de la lista.
function mostrarTexto() {
    alert(`Has hecho click en: ${this.innerText}`)
}