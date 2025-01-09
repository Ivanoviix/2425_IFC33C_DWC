
function contadorVocales(prompt) {
    const vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ"
    let countVocales = 0;
    let countConsonantes = 0;
    let countTotal = 0;

    let textoNuevo = prompt.split(" ").join("");
    countTotal = textoNuevo.length;

    for (let letras of textoNuevo) {
        console.log(textoNuevo)
        if (vocales.includes(letras)) {
            countVocales++
        } else {
            countConsonantes++
        }
    }
    return console.log("Nº de vocales encontradas: ", countVocales,
        "\nNº de consonantes encontradas: ", countConsonantes,
        "\nNº de caracateres totales: ", countTotal);
}

let frase = "Hola como andamos"
/*contadorVocales(frase) */





function contador(prompt) {
    const vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ"
    let contarVocales = 0;
    let contarConsonantes = 0;
    let contarTotal = 0;

    let nuevoTexto = prompt.split(" ").join("");
    console.log(nuevoTexto);
    for (let letra of nuevoTexto) {
        if (vocales.includes(letra)) {
            contarVocales++
        } else {
            contarConsonantes++
        }
        contarTotal = contarConsonantes + contarVocales;
    }
    console.log("Nº de vocales encontradas: ", contarVocales,
        "\nNº de consonantes encontradas: ", contarConsonantes,
        "\nNº de caracateres totales: ", contarTotal);
}

let frase1 = "Hola como andamos"
contador(frase1);



















