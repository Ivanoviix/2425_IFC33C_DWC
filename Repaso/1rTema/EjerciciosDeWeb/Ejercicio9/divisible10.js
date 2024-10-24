function esdivisible(prompt) {
    
    if (prompt % 10 === 0) {
        console.log(prompt, " es divisible por 10")
        return true;
    } else {
        console.log(prompt, " no divisible por 10")
        return false;
    }
}
let numero = prompt("Ingresa el numero:");
let respuesta = esdivisible(numero)
console.log("Es",respuesta)