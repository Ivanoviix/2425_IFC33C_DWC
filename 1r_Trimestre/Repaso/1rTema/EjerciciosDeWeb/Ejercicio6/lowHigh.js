let array = [];
let arrayDec = [];
let arrayNeg = [];
let capArray = parseInt(prompt("Capacidad del array:"));
function ordenar() {

    for (let x = 0; x < capArray; x++) {
        let randomNumbPos = Math.floor(Math.random() * 10 + 1);
        let randomNumbDec = (Math.random() * 10 + 1).toFixed(2);
        let randomNumbNeg = -Math.floor(Math.random() * 10 + 1);

        array.push(randomNumbPos)
        arrayDec.push(parseFloat(randomNumbDec))
        arrayNeg.push(randomNumbNeg)

    }
    array.sort((a, b) => a - b)
    arrayDec.sort((a, b) => a - b)
    arrayNeg.sort((a, b) => b - a)

    console.log("Array", array)
    console.log("Array", arrayDec)
    console.log("Array", arrayNeg)
}

ordenar();
