/* Ejercicio 4: then y encadenamiento de promesas
Enunciado:
Crea una aplicación web que simule un flujo de procesamiento encadenado:
1. Simula una promesa que representa la descarga de un archivo en 3 segundos.
2. Una vez descargado, otra promesa debe procesar los datos del archivo (2
segundos).
3. Finalmente, una tercera promesa debe guardar los datos procesados en un sistema
(1 segundo).
4. Muestra mensajes en el DOM indicando en qué paso del proceso se encuentra la
aplicación.
Requisitos:
● Usa encadenamiento con .then para gestionar las promesas.
● Si alguna promesa falla, muestra el error en rojo y detén el proceso
 */

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    promesasEncadenada();
    //promesasEncadenadas();

}

function base() {
    let label = document.createElement('label');
    let boton = document.createElement('button');
    let p = document.createElement('p');
    boton.innerText = "Iniciar";
    boton.id = "botonId";
    label.appendChild(boton);
    label.appendChild(p);
    document.body.appendChild(label);
    p.innerText = "";
}

function promesasEncadenada() {
    base();
    let boton = document.getElementById('botonId');
    let p = document.getElementsByTagName('p')[0];
    boton.addEventListener("click", () => {
        p.innerText = "Procesando el archivo para empezar a descargar...";

        descargaArchivo().then((respuesta) => {
            p.innerText = respuesta;
            p.style.color = "green";
            return procesaArchivo();
        }).then((procesarArchivo) => {
            p.innerText = procesarArchivo;
            p.style.color = "green";
            return guardaArchivo();
        }).then((guardarArchivo) => {
            p.innerText = guardarArchivo;
            p.style.color = "green";
        }).catch((error) => {
            p.innerText = error;
            p.style.color = "red"
        }).finally( () => {
            p.innerText = "El archivo se ha guardado correctamente!"
            p.style.color = "green";
        })
    });
}


function descargaArchivo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Descargando el archivo....");
        }, 3000);
    });
}

function procesaArchivo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Procesando el archivo....")
        }, 2000);
    })
}

function guardaArchivo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Guardando el archivo...")
        }, 1000);
    })
}






/* function promesasEncadenadas() {
    base();
    let boton = document.getElementById('botonId');
    let p = document.getElementsByTagName('p')[0];
    p.innerText = "";

    boton.addEventListener("click", () => {
        setTimeout(() => {
            return new Promise((resolve, reject) => {
                p.innerText = "Iniciando descarga...";
                resolve("Descargando el archivo....");
            }, 3000);

        }).then(respuesta => {
            p.innerText = respuesta;

            return new Promise((resolve, reject) => {
                p.innerText = "Preparando para procesar el archivo...";
                setTimeout(() => {
                    resolve("Procesando el archivo....");
                }, 2000);

            }).then(respuesta => {
                p.innerText = respuesta;
                return new Promise((resolve, reject) => {
                    p.innerText = "Preprando para guardar los datos...";
                    setTimeout(() => {
                        resolve("Guardando los datos procesados...")
                    }, 1000);
                }).then(respuesta => {
                    p.innerText = respuesta;
                });
            }).catch(respuesta => {
                p.innerText = respuesta;
            });
        });
    });
}
 */