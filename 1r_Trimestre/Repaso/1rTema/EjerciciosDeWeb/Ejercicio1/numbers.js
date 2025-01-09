let number = 0;

function numbers1(numero) {
    do {
        console.log(numero)
        numero += 1
    } while (numero <= 10)

}
console.log("Con Do While");
numbers1(number);

function numbers2(numero) {
    while (numero <= 10) {
        console.log(numero)
        numero++
    }
}
console.log("Con While");
numbers2(number);

function numbers3(max) {
    for (let x = 0; x <= max; x++) {
        console.log(x);
    }
}

console.log("Con bucle FOR:");
numbers3(10); 

function numbers4(numero) {
    if (numero <= 10) {
        console.log(numero);
        numero++;
        numbers4(numero);

    }
}

console.log("Con bucle IF");
numbers4(number);
