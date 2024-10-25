
/* Una mosca volaba per la llum
En aquest exercici treballarem amb la famosa cançó "Una mosca volava per la
llum". A partir d'aquesta cançó (String), feu com la cançó i escriviu-la canviant
totes les vocals per la lletra "a", "e", "i", "o" i "u" respectivament. */

/* cancion = "Una mosca volava per la llum"

vocales = ["a", "e", "i", "o", "u"]

for (let vocal of vocales) {
    nueva_cancion = "";

    for (let letra of cancion) {
        if (vocales.includes(letra.toLowerCase())) {
            nueva_cancion += vocal;
        } else {
            nueva_cancion += letra;
        }
    }

    console.log("Frase con la letra: " + vocal + "\n" + nueva_cancion)
}
 */





cancion = "Una mosca volava per la llum"

vocales = "aeiou"

function hola() {
    let nuevoTexto
    for (let v of vocales) {
        nuevoTexto = ""
        for (let letras of cancion) {
            if (vocales.includes(letras.toLowerCase())) {
                nuevoTexto += v
            } else {
                nuevoTexto += letras

            }
        }
        console.log("Frase con la letra: " + v + "\n" + nuevoTexto)

    }
}

hola();
function elevarNumeros(array, potencia) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        resultado.push(Math.pow(array[i], potencia));
    }
    return resultado;
}

function generarArrayAleatorio(tamano, max) {
    let array = [];
    for (let i = 0; i < tamano; i++) {
        array.push(Math.floor(Math.random() * max));
    }
    return array;
}

let arrayAleatorio = generarArrayAleatorio(10, 100);
let arrayElevado = elevarNumeros(arrayAleatorio, 2);

console.log("Array original: ", arrayAleatorio);
console.log("Array elevado: ", arrayElevado);



