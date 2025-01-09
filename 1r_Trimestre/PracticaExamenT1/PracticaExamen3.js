
let texto1 = prompt("Primera palabra: ");
let  texto2 = prompt("Segunda palabra: ");

function anagrama(texto1, texto2) {
    texto1 = texto1.split("").sort().join("");
    console.log(texto1)
    texto2 = texto2.split("").sort().join("");
    console.log(texto2)

    if (texto1 === texto2) {
        console.log("Es un anagrama")
    } else {

        console.log("No es un anagrama")
    }
}

anagrama(texto1, texto2);

function generarArray(tamano) {
    let array = [];
    for (let i = 0; i < tamano; i++) {
        array.push(Math.floor(Math.random() * 15) + 1);
    }
    return array;
}

let tamano = parseInt(prompt("Introduce el tamaño del array: "));
let arrayRandom = generarArray(tamano);
console.log(arrayRandom);