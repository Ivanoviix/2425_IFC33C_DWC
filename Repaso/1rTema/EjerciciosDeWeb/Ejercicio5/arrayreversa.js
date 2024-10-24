let array = []
let capArray = parseInt(prompt("Capacidad del array:"));


function crearCapArray() {

    for (let x = 0; x < capArray; x++) {
        let randomNumb = Math.floor(Math.random() * 10 + 1)
        array.push(randomNumb)
    }
    console.log(array)
}
//crearCapArray();

function reverse() {

    arrayInverso = array.reverse();

    console.log(arrayInverso);
}
//reverse();

function crearCapArrayYReverse() {

    for (let x = 0; x < capArray; x++) {
        let randomNumb = Math.floor(Math.random() * 10 + 1)
        array.push(randomNumb)
    }
    console.log("Array Normal", array);

    arrayInverso = array.reverse();

    console.log("Array Invertido", arrayInverso);
}
crearCapArrayYReverse();