// barajar cartas, repartir cartas, 5 cartas, juega un jugador, 
// para ganar necesitas una pareja, osea mismo numero. Si saca 
// par de un numero, has ganado, si no, "has peridod



const numero = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
const palo = ["hearts", "diamonds", "clubs", "spades"];
let hasGanado = false;
const baraja = [];

function Carta(numero, palo) {
    this.numero = numero;
    this.palo = palo;
}

function asignarColor(palo) {
    return (palo === 'hearts' || palo === 'diamonds') ? "rojo" : "negro";
}

function crearBaraja() {
let carta
    for (let num of numero) {
        for (let tipo of palo) {
            carta = new Carta(num, tipo);
            carta.color = asignarColor(tipo);
            baraja.push(carta)
        }
    }
    barajar()
    console.log(baraja)
}

function barajar() {
    baraja.sort(() => Math.random() - 0.5)
}

function sacarCartas() {
    let sacaCartas = baraja.splice(0, 5)
    console.log("Cartas Sacadas: ", sacaCartas)
    imprimeImg(sacaCartas)
    return sacaCartas
}

function compararCartas(sacaCartas) {
    for (let x = 0; x < sacaCartas.length; x++) {
        for (let y = x + 1; y < sacaCartas.length; y++) {
            if (sacaCartas[x].numero == sacaCartas[y].numero) {
                console.log("Has ganado!")
                hasGanado = true;
                return;
            }
        }
    }
    console.log("Has perdido!")
    hasGanado = false
    return;
}


document.getElementById("jugar").addEventListener("click", jugar);

function jugar() {
    if (baraja.length < 5) {
         alert("No hay suficientes cartas para jugar");
         return;
    }

    const cartasSacadas = sacarCartas();
    compararCartas(cartasSacadas);
    console.log("Cartas sobrantes: ", baraja);
    botonVolverAJugar();
}

function botonVolverAJugar() {
    const p = document.getElementById("resultado");
    const botonReTry = document.getElementById("jugar");
    if (hasGanado) {
        p.innerHTML = "Has ganado!";
        botonReTry.disabled = true; 
     } else {
        p.innerHTML = "Has perdido! Intenta nuevamente.";
        botonReTry.disabled = false; 
     }
}


function imprimeImg(mano) {
    const arrayCartas = document.querySelectorAll("img");

    for (let i = 0; i < arrayCartas.length; i++) {
        arrayCartas[i].src = ""; 
        arrayCartas[i].classList.remove("flip"); // Remove flip class to reset
    }

    for (let i = 0; i < mano.length; i++) {
        setTimeout(() => {
            if (arrayCartas[i]) {
                arrayCartas[i].classList.add("flip");
                arrayCartas[i].src = "cards/" + mano[i].numero + "_of_" + mano[i].palo + ".png";
            }
        }, i * 80); 
    }
}


crearBaraja();



