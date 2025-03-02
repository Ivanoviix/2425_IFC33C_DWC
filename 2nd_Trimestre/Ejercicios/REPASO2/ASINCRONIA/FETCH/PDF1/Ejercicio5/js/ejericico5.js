/* 
Ejercicio 5: Simulación de Carga de Datos con Indicador de Progreso
Enunciado:
Crea una aplicación que realice una solicitud fetch a
https://jsonplaceholder.typicode.com/photos para obtener una lista de fotos. Mientras se
realiza la solicitud, muestra un mensaje en la consola que diga "Cargando...". Una vez que
la solicitud se complete, muestra los títulos de las primeras 10 fotos.
Requisitos:
1. Muestra "Cargando..." antes de que la solicitud se complete.
2. Muestra los títulos de las primeras 10 fotos en la consola.
3. Si hay un error, muestra un mensaje adecuado en la consola.
*/

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    recogerFotos();
}

/* function solicitarFotos() {
    console.log("Cargando...")
    setTimeout(() => {
        recogerFotos()
            .then((respuesta) => {
                respuesta.slice(0, 10).forEach(element => {
                    console.log("Titulo:", element.title);
                });
            })
    }, 2000);
} */

function recogerFotos() {
    url = "https://jsonplaceholder.typicode.com/photos";

    return fetch(url, {
        method: "GET"
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Error en el servidor")
        }
        return response.json()
    }).then((respuesta) => {
        console.log("Cargando...", )
        setTimeout(() => {
            respuesta.slice(0, 10).forEach(element => {
                console.log("Titulo:", element.title)
            });
        }, 2000);
    }).catch((error) => {
        console.log("Error:", error.message)
    })
}