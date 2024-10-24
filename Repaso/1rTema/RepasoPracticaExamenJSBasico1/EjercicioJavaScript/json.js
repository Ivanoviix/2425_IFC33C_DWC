
let jsonObj = {
    squadName: "Super hero squad",
    homeTown: "Metro City",
    formed: 2020,
    secretBase: "Super tower",
    active: true,
    members: [{
        name: "Molecule Man",
        age: 29,
        secretIdentity: "Dan Jukes",
        powers: [
            "Radiation resistance",
            "Turning tiny",
            "Radiation blast"
        ]
    },
    {
        name: "Madame Uppercut",
        age: 39,
        secretIdentity: "Jane Wilson",
        powers: [
            "Million tonne punch",
            "Damage resistance",
            "Superhuman reflexes"
        ]
    },
    {
        name: "Eternal Flame",
        age: 1000000,
        secretIdentity: "Unknown",
        powers: [
            "Immortality",
            "Heat Immunity",
            "Inferno",
            "Teleportation",
            "Interdimensional travel"
        ]
    }]
};

function ordenar() {

    console.log("-".repeat(25) + jsonObj.squadName + "-".repeat(25) +
        "\n" + "-".repeat(9) + "Ciudad de origen: " + jsonObj.homeTown + " // Fecha de origen: " + jsonObj.formed + "-".repeat(9))
    for (let x = 0; x < jsonObj.members.length; x++) {
        heroes = jsonObj.members[x];
    }
    console.log("Nombre " + heroes.name +
        "\nEdad " + heroes.age +
        "\nIdentidad " + heroes.secretIdentity +
        "\nPoderes " + heroes.powers.join(", "))

}

/* ordenar(); */

function ordenar2() {
    let personajes
    console.log("-".repeat(25) + jsonObj.squadName + "-".repeat(25) +
        "\n" + "-".repeat(9) + "Ciudad de origen: " + jsonObj.homeTown + " // Fecha de origen: " + jsonObj.formed + "-".repeat(9))

    for (let x = 0; x < jsonObj.members.length; x++) {
        personajes = jsonObj.members[x]

        console.log("Nombre: " + personajes.name +
            "\nEdad: " + personajes.age +
            "\nIdentidad: " + personajes.secretIdentity +
            "\nPoderes: " + personajes.powers.join(", "))
    }
}

/* ordenar2(); */


/* En la carpeta JSBasico_Ejercicio1 tenéis los siguientes ficheros:
index.html -> Fichero HTML para hacer la llamada del fichero js. Hay que implementarlo.
ejercicio1.js -> Fichero JS dónde se realizará el código del ejercicio y dónde tenéis 
implementada una línea de código solicitando un número entre el 1 y el 10 al usuario. */


/* 2 punts) Dado el código facilitado:
Comprueba si el número se encuentra entre el 1 y el 10.
Si el número no se encuentra en el rango correcto, volveremos a lanzar el mensaje solicitando un número al usuario
Si el número se encuentra en el rango correcto, seguiremos con la ejecución del código. */

/* function rango() {
    let recibeNum = parseInt(prompt("Escribe un numero: "));

    if (recibeNum >= 1 && recibeNum <= 10) {
        console.log("BIEN")
    } else {
        console.log("MAL")
        rango()
    }
    

} */
/* rango() */


/* (2 punts) Dado el código facilitado, crea una función que cumpla los siguientes requisitos:
Generará un número aleatorio entre el 1 y el 10.
Comprobará si el número facilitado por pantalla se corresponde con el número aleatorio obtenido. 
    Si los dos números son iguales, la función devolverá true.
    Si  los dos números no son iguales, la función devolverá false. */

function generarNumAleatorio() {
    let diNum = parseInt(prompt("Escribe un numero "));

    generaNum = Math.floor(Math.random() * 10 + 1)
    console.log("Numero ingresado:" + diNum + " y el numero generado aleatoriamente es: " + generaNum)
    if (generaNum == diNum) {
        /* console.log("¡Enhorabuena, has acertado!") */
        return true
    } else {
        /* console.log("Lo sentimos, NO has acertado.") */
        return false
    }

}

/* (1 punt) Utiliza el resultado de la función para lanzar por pantalla:
Si la función devuelve TRUE, el mensaje será: ¡Enhorabuena, has acertado!
Si la función devuelve FALSE, el mensaje será: Lo sentimos, NO has acertado.

En caso de no haber terminado el apartado anterior, puedes utilizar la siguiente función: */

function condicion() {
    if (generarNumAleatorio()) {
        console.log("¡Enhorabuena, has acertado!")
    } else {
        console.log("Lo sentimos, NO has acertado.")
    }
}

/* condicion(); */



/* Se pide:
(2 punts) Crear una clase NIF que cumpla los siguientes requisitos:
Debe tener las siguientes propiedades:
Una para almacenar el número,
otra para almacenar la letra,
Debe tener un método que se llamará esCorrecto. Este método debe:
Comprobar si el NIF tiene 7 números y si no los tiene, debe devolver FALSE.
Comprobar si la letra del NIF es correcta siguiendo la siguiente fórmula:
Dividir los números del NIF entre 23  y tomar el resto.
El resto se debe comparar con la siguiente serie para encontrar la letra correcta */

class NIF {

    Lnif = "TRWAGMYFPDXBNJZSQVHLCKE";

    constructor(numero, letra) {
        this.numero = numero;
        this.letra = letra;
    }

    esCorrecto() {
        if (this.numero.toString().length !== 7) {
            return false
        }

        let resto = this.numero % 23;

        let letraCorrecta = this.Lnif[resto];

        return letraCorrecta === this.letra
    }
}




/* (0.5 punts) Mostrar las comprobación de un NIF correcto y un NIF incorrecto. 
A continuación se facilitan NIF correctos y erróneos para que podáis realizar las comprobaciones oportunas:
02255667-B (CORRECTO)
01489562-J (CORRECTO)
01156987-A (INCORRECTO)
03569874-P (INCORRECTO)*/

/* let nif = new NIF(2255667, "B")
console.log("DNI:", "\nNº NIF: ", nif.numero, "\nLetra: ", nif.letra, "\nEs: ", nif.esCorrecto())

let nif2 = new NIF(1489562, "J")
console.log("DNI: ", "\nNº ", nif2.numero, "\nLetra: ", nif2.letra, "\nEs: ", nif2.esCorrecto())

let nif3 = new NIF(1156987, "A")
console.log("DNI: ", "\nNº ", nif3.numero, "\nLetra: ", nif3.letra, "\nEs: ", nif3.esCorrecto())

let nif4 = new NIF(3569874, "P")
console.log("DNI: ", "\nNº ", nif4.numero, "\nLetra: ", nif4.letra, "\nEs: ", nif4.esCorrecto())
 */
/*Ejercicio 3 (2.5 puntos)
En la carpeta JSBasico_Ejercicio3 tenéis el fichero ejercicio3.js dónde realizar el ejercicio. Se pide:
(1 punt) Crear un array con 15 números aleatorios 
(1.5 punts) Recorrer el array mostrando tantos asteriscos como se indique en el número de cada posición. 
Si no has sido capaz de realizar el punto anterior, puedes inventarte un array con números para poder realizar este apartado. */

function arrays(prompt) {
    // Crear el array con numeros aleatorios
    let array = [];
    let nuevoArray = []
    for (x = 0; x < prompt; x++) {
        array.push(Math.floor(Math.random() * 15) + 1)
        console.log("1r", "*".repeat(array[x]))
    }

    // Ordenar
    for (let y = 0; y < array.length; y++) {
        for (let r = y + 1; r < array.length; r++) {
            if (array[y] > array[r]) {
                let temp = array[y]
                array[y] = array[r]
                array[r] = temp
            }
        }
    }
    // Imprmir en orden
    console.log(array)
    for (let x = 0; x < array.length; x++) {
        console.log("2nd", "*".repeat(array[x]))
    }

}
let diNum = parseInt(prompt("Escribe un numero"));

arrays(diNum)