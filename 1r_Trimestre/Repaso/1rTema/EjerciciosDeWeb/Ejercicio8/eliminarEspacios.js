function eliminarEspacios(prompt) {

    let textoProcesado = prompt.split(" ").join("");

    console.log("Texto sin espacios: ", textoProcesado);
}

let frase = prompt("Escriba algo para quitar los espacios:");
eliminarEspacios(frase);