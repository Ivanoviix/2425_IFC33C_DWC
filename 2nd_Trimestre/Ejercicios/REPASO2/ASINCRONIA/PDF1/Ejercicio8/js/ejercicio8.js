/* 
Ejercicio 8: Conversión de callbacks a promesas
Enunciado:
Convierte una función que usa callbacks en una función que retorna una promesa.
1. Implementa una función llamada simularDescarga que acepte un callback y simule la
descarga de un archivo (usa setTimeout para simular el tiempo de espera).
2. Reescribe la función para que en lugar de callbacks utilice promesas.
3. Usa la nueva función basada en promesas para descargar tres archivos y mostrar un
mensaje al finalizar.
Requisitos:
● Asegúrate de usar la nueva versión con promesas en lugar de la anterior con
callbacks.
● Muestra mensajes en el DOM indicando cuándo se descarga cada archivo.
*/

document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    startSimulation();
}

function simulationDownloader() {
    let promesa1 = new Promise((resolve, reject) => { // Si no pongo return, me da error de undefined
        setTimeout(() => {                    // PONER RETURN EN LA PROMESA SI NECESITO DEVOLVER UN VALOR!
            let simulation = "Iniciando la descarga..."; // PONER SetTimeout ENTRO DE LA PROMESA.
            resolve(simulation);
        }, 1000);
    });
    let promesa2 = new Promise((resolve, reject) => { 
        setTimeout(() => {             
            let simulation = "Realizando la descarga..."; 
            resolve(simulation);
        }, 3000);
    });
    let promesa3 = new Promise((resolve, reject) => {
        setTimeout(() => {            
            let simulation = "Guardando la descarga..."; 
            resolve(simulation);
        }, 5000);

        promesa1.then((respuesta) => { // Encadenar la promesas por que la 3r me falla.
            console.log(respuesta)     // Posiblemente por no existir en el momento que le toca ejecutarse (SUPUESTAMENTE)
            return promesa2;
        }).then((respuesta) => {
            console.log(respuesta)
            return promesa3;
        }).then((respuesta) => {
            console.log(respuesta)
        })
    });
}

function startSimulation() {
    simulationDownloader();
}


/* 
function simularDescarga(callback) {
    setTimeout(() => {
        let mensaje = "Descarga completada";
        callback(mensaje);
    }, 3000); // Simula un tiempo de espera de 3 segundos
}

simularDescarga((mensaje) => {
    console.log(mensaje); // Esto debería imprimir "Descarga completada" después de 3 segundos
});
*/