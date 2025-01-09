

function generaArrayAleatorio(tamaño) {
    let array = []

    for (let i = 0; i < tamaño; i++) {
        array.push(Math.floor(Math.random() * 201 - 100));
    }
    return array
}

let array1 = generaArrayAleatorio(10);
console.log(array1)


function eliminarNumeroNegativo(arrayhecho) {

    for (let x = 0; x < arrayhecho.length; x++) {
        if (0 > arrayhecho[x]) {
            delete arrayhecho[x]
        }
    }
    return console.log("Numeros que han quedado en el array positivos: ", arrayhecho)
}

eliminarNumeroNegativo(array1)

