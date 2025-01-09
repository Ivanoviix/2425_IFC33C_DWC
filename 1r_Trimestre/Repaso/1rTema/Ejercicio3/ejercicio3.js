
let array = [];
const cantidadNumeros = 15;

for (let x = 0; x < cantidadNumeros; x++) {
    numerosAleatorios = Math.floor(Math.random() * 15 + 1) 
    array.push(numerosAleatorios)
    console.log('*'.repeat(array[x]))
}

console.log(array)