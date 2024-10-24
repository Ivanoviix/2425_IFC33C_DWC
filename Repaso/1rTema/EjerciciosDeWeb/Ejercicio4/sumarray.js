/* Puedes crear tu propio array de números, pero considera intentar este problema con diferentes conjuntos
para verificar tu solución. Ten un array con números negativos y positivos, y otro con enteros y decimales.

También podrías intentar usar arrays de diferentes longitudes. Si te sientes cómodo con esto, prueba el 
siguiente desafío adicional un poco más difícil.

Desafío intermedio adicional: Crea una función que pueda devolver la suma de un 
número de fila o columna particular en una tabla. */


// Crea un array de X capacidad que decidas e introduce en el array numeros random hasta llenarlo.
/* let cantidad_solicitada = prompt("Capacidad del array:")
array = [];

function cantidadArray(array, cantidad) {

    for (let x = 0; x < cantidad; x++) {
        generarNumeros = Math.floor(Math.random() * 1000 + 1);
        array.push(generarNumeros);
    }
   console.log(array);
}

console.log(cantidadArray(array, cantidad_solicitada));
 */

// Crear arrays propios con numeros negativos, positivos y con decimales y enseñarlo en consola.
/* let array1 = [1, 2, 3];
let array2 = [-5, -4, -3, -2];
let array3 = [0.5, 1.5, 2.5];

console.log(array1)
console.log(array2)
console.log(array3) */


// Crear una funcion que devuelva la suma de una fila de la tabla de array.

const conjArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let suma = 0;
function sumaFila(array, posicion) {
    posicion--;
    if (posicion <= 0 || posicion < array.length) {
        for (let x = 0; x < array[posicion].length; x++) {
            suma += array[posicion][x];
        }
        return suma
    } else {
        console.log("TE HAS SALIDO DE LA TABLA MAQUINA")
    }

}

/*console.log(sumaFila(conjArray, 1));*/

let sumas = 0;
function sumaColumna(array, posicion) {
    posicion--
    if (posicion >= 0 && posicion < array.length) {
        for (let y = 0; y < array.length; y++) {
            sumas += array[y][posicion];
        }
        return sumas;

    } else {
        console.log("TE HAS SALIDO DE LA TABLA MAQUINA")
    }
}

/*console.log(sumaColumna(conjArray, 3));*/

function sumaColumaOFila() {
    let seleccion = parseInt(prompt("[1] Sumar Filas - [2] Sumar Columnas"))
    switch (seleccion) {
        case 1:
            console.log(sumaFila(conjArray, 3));
            break;
        case 2:
            console.log(sumaColumna(conjArray, 3));
            break
        default:
            console.log("No existe")
    }
}

console.log(sumaColumaOFila());


function sumaFilaColumna(array, posicion, escoger) {

    while (!escoger) {
       
        posicion--;
        if (posicion <= 0 || posicion < array.length) {
            for (let x = 0; x < array[posicion].length; x++) {
                suma += array[posicion][x];
            }
            return suma
        } else {
            console.log("TE HAS SALIDO DE LA TABLA MAQUINA")
        }
    }

    posicion--
    if (posicion >= 0 && posicion < array.length) {
        for (let y = 0; y < array.length; y++) {
            sumas += array[y][posicion];
        }
        return sumas;

    } else {
        console.log("TE HAS SALIDO DE LA TABLA MAQUINA")
    }
}