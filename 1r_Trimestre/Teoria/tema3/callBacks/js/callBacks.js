/* function tareaPrincipal(callback) {
    setTimeout (() => {
        console.log("Realizando la primera tarea...")
    }, 1000);
    callback();
}

function tareaSecundaria(callback) {
    setTimeout (() => {
        console.log("Realizando la segunda tarea...")
    }, 2000);
    callback()
}


function tareaTerciaria(callback) {
    setTimeout (() => {
        console.log("Realizando la tercera tarea...")
    }, 3000);
    callback()
}
 */

// CALLBACK HELL
/* tareaPrincipal(() => {
    console.log("Realizando la primera tarea...")
    tareaSecundaria ( () =>  {
        console.log("Realizando la segunda tarea...")
        tareaTerciaria( () => {
            console.log("Hemos terminado las tareas")
        });
    }); 
});
 */

// PROMESAS
function tareaPromesa1() {
    return new Promise((resolution) => {
        setTimeout(() => {
            console.log("Tarea de las primeras promesas...");
            resolution();
        }, 1000);
    });
}
function tareaPromesa2() {
    return new Promise((resolution) => {
        setTimeout(() => {
            console.log("Tarea de las segundas promesas...");
            resolution();
        }, 1000);
    });
}
function tareaPromesa3() {
    return new Promise((resolution) => {
        setTimeout(() => {
            console.log("Tarea de las terceras promesas...");
            resolution();
        }, 1000);
    });
}

tareaPromesa1()
    .then(tareaPromesa2)
    .then(tareaPromesa3)
    .then(() => console.log("Hemos acabo las tareas."))


// ASYNC/AWAIT
async function ejecutarTareas() {
    await tareaPromesa1();
    await tareaPromesa2();
    await tareaPromesa3();
    console.log("Hemos acabo las tareas.")
}

// EXAMEN T2: CALLBACK, FUNCIONES FLECHA, THIS, EVENTOS, DOM Y BOM.

function masUno(x) {
    return x + 1;
}

function menosUno(x) {
    return x - 1;
}

let array = [1, 2, 3, 4];

function cambioElemento(array, cambio) {
    array[1] = cambio(array[1])
}
cambioElemento(array, masUno);
console.log(array[1]); // 3
cambioElemento(array, menosUno);
console.log(array[1]); // 2



var array1 = ['a', 'b', 'c'];

function llamadora(array1, callback) {
    callback(array1);
}

/**
 * Ejecuta una función que imprime cada elemento de un array con un retraso de 1 segundo entre cada impresión.
 *
 * @param {Array} array1 - El array cuyos elementos se imprimirán con un retraso.
 */
var ejecutora = function (array1) {
    array1.forEach(function (element, index) {
        setTimeout(() => console.log(element), index * 1000);
    });
};

llamadora(array1, ejecutora);
