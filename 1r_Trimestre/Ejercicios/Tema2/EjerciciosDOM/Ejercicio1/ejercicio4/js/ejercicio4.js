let foto = document.querySelector("img")

let respuesta = prompt("Escoga entre la opcion 'amarillo' o 'rojo'")

function color(color) {

    if (color === "amarillo") {
        foto.src = "img/amarillo.png"
    }
}

console.log(color(respuesta));