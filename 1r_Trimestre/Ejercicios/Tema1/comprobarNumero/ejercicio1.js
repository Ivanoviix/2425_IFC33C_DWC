
// Manera 1 // (2 punts) Dado el código facilitado:
function comprobarNumero() {
    while (true) {
        let numero = parseInt(prompt('Dame un número entre el 1 y el 10'));

        if (numero >= 1 && numero <= 10) {
            console.log("se encuentra en el rango correcto")
            break;
        } else {
            console.log("no se encuentra en el rango correcto")
        }
    }
}

//comprobarNumero()

// Manera 2 // (2 punts) Dado el código facilitado:
function comprobarNumeroDos() {
    let numero = parseInt(prompt('Dame un número entre el 1 y el 10'));

    if (numero >= 1 && numero <= 10) {
        console.log("se encuentra en el rango correcto")
    } else {
        console.log("no se encuentra en el rango correcto")
        comprobarNumeroDos();
    }
}

//comprobarNumeroDos()

// (2 punts) Dado el código facilitado, crea una función que cumpla los siguientes requisitos:
function generarNumeroAleatorio() {
    let numero_a = Math.floor(Math.random() * 10 + 1);
    console.log(numero_a)

    let numero_b = parseInt(prompt('Dame un número entre el 1 y el 10'));

    if (numero_a == numero_b) {
        return true;
    } else {
        return false;
    }
}

// (1 punt) Utiliza el resultado de la función para lanzar por pantalla:
function comprobarNumero() {
    if (generarNumeroAleatorio()) {
        console.log("¡Enhorabuena, has acertado!")
    } else {
        console.log("Lo sentimos, NO has acertado.")
    }
}

comprobarNumero();







