

function numMaxArray(prompt) {
    let arrayEnteros = []
    let arrayDecimales = []
    let arrayNumNeg = []

    for (let x = 0; x < prompt; x++) {
        arrayEnteros.push(Math.floor(Math.random() * 20 + 1));
        arrayDecimales.push(parseFloat((Math.random() * 20 + 1).toFixed(2)));
        arrayNumNeg.push(-Math.floor(Math.random() * 20 + 1));
    }
        valorMaxE = Math.max(...arrayEnteros)
        valorMaxD = Math.max(...arrayDecimales)
        valorMaxN = Math.max(...arrayNumNeg)
    
    return console.log("Nº mas alto: ", valorMaxE, "Array:", arrayEnteros,
                        "\nNº mas alto: ", valorMaxD, "Array:", arrayDecimales,
                        "\nNº mas alto: ", valorMaxN, "Array:", arrayNumNeg);
}
let tamaño = prompt("Introduce el tamaño del array: ")
numMaxArray(tamaño);