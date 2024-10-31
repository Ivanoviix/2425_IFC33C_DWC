
var cerca = [];
const partitures = []

function Nota(nota, tipus) {
    this.nota = nota;
    this.tipus = tipus;
}

function Partitura(nombre, notas) {
    this.nombre = nombre;
    this.notas = notas; 
}

function addCerca(nomNota, tipus) { 
    cerca.push(new Nota(nomNota, tipus)) 
}

console.log("Buscar estas notas:", cerca)

function cercador() {
    console.log("Partituras: ", partitures); 

    for (var x = 0; x < partitures.length; x++) {
        let partitura = partitures[x].notas; 
        let nombrePartitura = partitures[x].nombre; 
        var posicion = 0;
        var coincidencias = false;

        for (var y = 0; y < partitura.length; y++) {
            if (posicion < cerca.length) { 
                if (partitura[y].nota === cerca[posicion].nota && partitura[y].tipus === cerca[posicion].tipus) {
                    posicion++;                                                                                   
                } else { 
                    posicion = 0; 
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
            console.log("Hay coincidencias " + nombrePartitura)
        } else {
            console.log("Sense resultats " + nombrePartitura)
        }

    }
}


partitures.push(new Partitura("La Balanguera", [
    new Nota("DO", "normal"),
    new Nota("RE", "normal"),
    new Nota("MI", "normal"),
    new Nota("FA", "normal"),
    new Nota("SOL", "normal"),
    new Nota("SOL", "normal"),
    new Nota("LA", "sostenido"),
    new Nota("LA", "sostenido"),
]));

partitures.push(new Partitura("Happy Birthday", [
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
]));

addCerca("MI", "normal");
addCerca("SOL", "normal");

cercador();
console.log("Estas son las partituras en las que buscas las coincidencias:", partitures)


