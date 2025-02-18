/* 
Ejercicio 3: Simulación de Envío de Mensajes (Usando Promise.all)
Enunciado:
Estás desarrollando una aplicación de mensajería. Necesitas enviar mensajes a varios
usuarios al mismo tiempo. Crea una función enviarMensaje que acepte el nombre del
usuario y devuelva una promesa que se resuelva en 2 segundos con un mensaje de
confirmación.
    enviarMensaje("Juan Pérez")
        Resultado esperado después de 2 segundos:
        "Mensaje enviado a Juan Pérez"
Luego, utiliza Promise.all para enviar mensajes a una lista de usuarios al mismo tiempo. Si
uno de los mensajes falla (simula un fallo aleatorio), la promesa principal debe ser
rechazada.
Requisitos:
1. Implementa la función para varios usuarios: ["Juan", "Ana", "Luis", "María"].
2. Si todos los mensajes se envían correctamente, muestra una lista con las
confirmaciones.
3. Si al menos uno falla, captura el error y muestra qué mensaje falló.

 */

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    mensajes();
}

/* function mensajes() {
    return Promise.all([promesa("Ivan"), promesa("Juan"), promesa("María"), promesa("Julia")])
        .then((respuesta) => {
            console.log("Se ha enviado un mensaje a ", respuesta)
        }).catch((error) => {
            console.log("No se ha podido enviar un mensaje a ", error)
        })
}


function promesa(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve(user)
            }
            reject(user)
        }, 2000);
    })
} */




// Con MAP:
function mensajes() {
    let usuarios = ["Juan", "Ana", "Luis", "María"]
    return Promise.all([usuarios.map(promesa)])
        .then((respuesta) => {
            console.log("Se ha enviado un mensaje a ", respuesta)
        }).catch((error) => {
            console.log("No se ha podido enviar un mensaje a ", error)
        })
}


function promesa(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve(user)
            }
            reject(user)
        }, 2000);
    })
}

/* 
// Con MAP:
function mensajes() {
    let usuarios = ["Juan", "Ana", "Luis", "María"]
    return Promise.all([promesa(usuarios[0]), promesa(usuarios[1]), promesa(usuarios[2]), promesa(usuarios[3])])
        .then((respuesta) => {
            console.log("Se ha enviado un mensaje a ", respuesta)
        }).catch((error) => {
            console.log("No se ha podido enviar un mensaje a ", error)
        })
}


function promesa(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.9) {
                resolve(user)
            }
            reject(user)
        }, 2000);
    })
} */