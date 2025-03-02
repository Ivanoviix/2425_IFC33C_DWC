/* 
Ejercicio 6: Uso de Promise.allSettled
Enunciado:
Crea una aplicación web que simule la carga de cinco tareas con resultados variados (éxito
o error).
1. Usa Promise.allSettled para gestionar todas las promesas.
2. Muestra una lista con el estado de cada tarea ("cumplida" o "rechazada") y el
resultado correspondiente.
3. El proceso de cada tarea debe tomar un tiempo aleatorio entre 1 y 3 segundos.
Requisitos:
● Muestra los estados de las tareas en una lista.
● Diferencia visualmente entre tareas cumplidas y rechazadas
 */

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    gestionPromesas();
}

function base() {
    let label = document.createElement('label');
    let ol = document.createElement('ol');
    let boton = document.createElement('button');
    boton.innerText = "Iniciar";
    boton.id = "botonId";
    label.appendChild(ol);
    label.appendChild(boton);
    document.body.appendChild(label);
}

function gestionPromesas() {
    base();
    let boton = document.getElementById('botonId');
    boton.addEventListener("click", () => {
        promesa();
    });
}

function crearPromesa() {
    let min = 1;
    let max = 3;
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    return new Promise((resolve, reject) => { // Con el return en la función crearPromesa(), cada llamada a crearPromesa() devolverá una promesa 
        setTimeout(() => {                    // que será manejada por Promise.allSettled. Esto asegura que cada promesa se resuelva o se rechace 
            if (random >= 2) {                // correctamente y que los resultados se manejen adecuadamente en la función promesa.
                resolve("Cumplida!");
            } else {
                reject("Rechazada!");
            }
        }, random * 1000);
    });
}

function promesa() {
    let ol = document.getElementsByTagName('ol')[0];
    ol.innerText = ""; 
    let promesas = [crearPromesa(), crearPromesa(), crearPromesa(), crearPromesa(), crearPromesa()];

    Promise.allSettled(promesas)
    .then((resultados) => {
        resultados.forEach((resultado) => {
            let li = document.createElement('li');
            if (resultado.status === "fulfilled") {
                console.log(resultado)
                li.innerText = resultado.value;
                li.style.color = "green";
            } else {
                console.log(resultado)
                li.innerText = resultado.reason;
                li.style.color = "red";
            }
            ol.appendChild(li);
        });
    });
} 