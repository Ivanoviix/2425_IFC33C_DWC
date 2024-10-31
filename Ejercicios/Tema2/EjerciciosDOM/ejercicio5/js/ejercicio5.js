let titulo = document.querySelector('h1');
let subitutlo = document.querySelector('h2');

titulo.style.fontSize = "70px";
subitutlo.innerText = "Ahora soy el subtitulo"

function cambiarColor(element, color) {
    element.style.color = color
}

cambiarColor(titulo, 'salmon')
cambiarColor(subitutlo, 'black')

titulo.style.backgroundColor = 'gray'
subitutlo.style.backgroundColor = 'red'
titulo.style.fontFamily = 'Verdana'
subitutlo.style.fontFamily = 'Arial'