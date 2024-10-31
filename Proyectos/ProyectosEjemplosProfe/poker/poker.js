// barajar cartas, repartir cartas, 5 cartas, juega un jugador, 
// para ganar necesitas una pareja, osea mismo numero. Si saca 
// par de un numero, has ganado, si no, "has peridod


const arrayValores = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
const arrayPalos = ["hearts", "diamonds", "clubs", "spades"];
let hasGanado = false;
const baraja = [];

function Carta(valor, palo) {
    this.valor = valor;
    this.palo = palo;
}
console.log(baraja);

for (let palo of arrayPalos) {
    baraja.push(new Carta(valor, palo));
}


function asignarColor(palo) {
    return (palo === 'hearts' || palo === 'diamonds') ? "rojo" : "negro";
}

let hand = document.querySelector("img");
var cartasReveladas;

function barajar() {
    baraja.sort(() => Math.random() - 0.5)
}

function obtenerMano(baraja) {
    let mano = [];
    let indice;

    for (let i = 0; i < 5; i++) {
        indice = Math.floor(Math.random() * baraja.length);
        mano.push(baraja.splice(indice, 1)[0]);
    }
    return mano
}

let app = document.querySelector("#app");
app.innerHTML = "";

let mano = obtenerMano(baraja);

for (let carta of mano) {
    console.log(carta);
    app.innerHTML += `<img height= 200 width= 150 src="cards/${carta.valor}_of_${carta.palo}.png">`;
}


function jugar() {
    let hayPareja = false;

    for (let i = 0; i < mano.length; i++) {
        for (let j = i + 1; j < mano.length; j++) {
            if (mano[i].valor === mano[j].valor) {
                hayPareja = true
            }
        }
    }

    if (hayPareja) {
        app.innerHTML += "<p>Has ganado!!!</p>"
    }
}
