/* 1. arrays2.html
Ejercicio avanzado:
Dado un array de objetos que representan productos, crea una función que filtre los productos 
cuyo precio sea mayor a un valor dado y ordene el resultado por nombre de producto alfabéticamente. */

coches = [
    { nombre: "Ford", precio: 25000 },
    { nombre: "Tesla", precio: 35000 },
    { nombre: "BMW", precio: 27000 },
    { nombre: "Audi", precio: 30000 }
]


/* function ordenar(valor) {
    let producto
    let puente
    let arrayPrecioOrdenado = []
    for (let x = 0; x < coches.length; x++) {
        producto = coches[x]

        console.log("Nombre: " + producto.nombre + " con un precio de: " + producto.precio + "€")
    }


    for (let y = 0; y < coches.length; y++) {
        if (coches[y].precio > valor) {
            arrayPrecioOrdenado.push(coches[y])

        }
    }
    console.log(arrayPrecioOrdenado)


    for (let k = 0; k < arrayPrecioOrdenado.length; k++) {
        for (let r = k + 1; r < arrayPrecioOrdenado.length; r++) {
            if (arrayPrecioOrdenado[k].nombre > arrayPrecioOrdenado[r].nombre) {
                puente = arrayPrecioOrdenado[k];
                arrayPrecioOrdenado[k] = arrayPrecioOrdenado[r]
                arrayPrecioOrdenado[r] = puente
            }
        }
    }
    console.log(arrayPrecioOrdenado)

    let product
    for (let x = 0; x < arrayPrecioOrdenado.length; x++) {
        product = arrayPrecioOrdenado[x];
    console.log("Marca: " + product.nombre + " cuesta " + product.precio + "€")
    }


}

ordenar(20000); */


/* 2. bucles.html
Ejercicio avanzado:
Crea un algoritmo que utilice bucles anidados para generar la tabla de multiplicar desde el 1 hasta el 10, 
y guárdala en un objeto donde las claves sean los números y los valores sean arrays con sus multiplicaciones */

function bucleAnidado() {
let tablaDeMultiplicar = []

    for (let x = 1; x <= 10; x++) {
        tablaDeMultiplicar[x] = []

        console.log(tablaDeMultiplicar)
        for (y = 1; y <= 10; y++) {
            tablaDeMultiplicar[x].push(x * y)
        }
    }

    console.log("Tabla: ", tablaDeMultiplicar)
}

bucleAnidado()


/* 3. buildInObjects.html
Ejercicio avanzado:
Crea una función que reciba una fecha en formato YYYY-MM-DD y 
devuelva cuántos días han pasado desde esa fecha hasta hoy. */



/* 4. condiciones.html
Ejercicio avanzado:
Crea una función que determine si un número es primo, compuesto o ni uno ni otro */
