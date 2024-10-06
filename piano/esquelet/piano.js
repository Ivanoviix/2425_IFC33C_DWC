
var cerca = [];
const partitures = []

// Constructor Nota con dos propiedades, nota y tipus.
function Nota(nota, tipus) {
    this.nota = nota; // Tipo de nota.
    this.tipus = tipus; // Si es normal o sostenido.
}


function addCerca(nomNota, tipus) { // Función que recibe dos parametros, nomNota y tipus.
    cerca.push(new Nota(nomNota, tipus)) // Recibe un nombre y un tipo de la nota y lo mete dentro del array de "cerca"
}

// Imprimo las partituas que le hemos pasado por parametro a la función "addCerca"
console.log("Buscar estas notas:", cerca)

function cercador() {
    console.log("Partituras: ", partitures); // Imprimo las partituras escritas abajo.

    for (var x = 0; x < partitures.length; x++) {
        let partitura = partitures[x]; // Asigno la partitura recibida a la nueva variable "partitura"
        var posicion = 0; // Inicio un contador para tener un "registro" del array "cerca"
        var coincidencias = false; // Una variable Booleana para ver si existen coincidencias.

        for (var y = 0; y < partitura.length; y++) { // Creo un bucle
            if (posicion < cerca.length) { // Si posición es menor que el array "cerca", comprobara si la nota de la partitura coincide con la nota de "cerca"
                if (partitura[y].nota === cerca[posicion].nota && partitura[y].tipus === cerca[posicion].tipus) { // Comparo si la nota y el tipo de nota es la misma 
                    posicion++;                                                                                   // en el array "partitura" y "cerca" sean "true"
                } else { // Si no encuentra una coincidencia la variable "posición" vuelve a 0
                    posicion = 0; // Aqui vuelvo a comprobar si mas adelante vuelve a haber alguna composición igual a las notas que se desea buscar.
                    if (partitura[y].nota === cerca[posicion].nota && partitura[y].tipus === cerca[posicion].tipus) {
                        posicion++;
                    }
                }
            }

            if (posicion === cerca.length) {
                coincidencias = true;
            }
        }

        if (coincidencias) {
            console.log("Hay coincidencias")
        } else {
            console.log("Sense resultats")
        }

    }
}
partitures.push([
    new Nota("DO", "normal"),
    new Nota("RE", "normal"),
    new Nota("MI", "normal"),
    new Nota("FA", "normal"),
    new Nota("SOL", "normal"),
    new Nota("SOL", "normal"),
    new Nota("LA", "sostenido"),
    new Nota("LA", "sostenido"),
]) // La Balanguera

partitures.push([
    new Nota("DO", "normal"),
    new Nota("DO", "normal"),
    new Nota("RE", "normal"),
    new Nota("DO", "normal"),
    new Nota("FA", "normal"),
    new Nota("MI", "normal"),
    new Nota("DO", "normal"),
    new Nota("DO", "normal"),
    new Nota("RE", "normal"),
    new Nota("DO", "normal"),
    new Nota("SOL", "normal"),
    new Nota("FA", "normal"),
]) // Happy Birthday

addCerca("MI", "normal");
addCerca("SOL", "normal");


cercador();
console.log("Estas son las partituras en las que buscas las coincidencias:", partitures)


