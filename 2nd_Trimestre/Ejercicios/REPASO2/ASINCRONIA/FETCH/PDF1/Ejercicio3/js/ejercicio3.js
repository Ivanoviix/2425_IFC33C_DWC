/* 
Ejercicio 3: Filtrar Resultados de una API con fetch
Enunciado:
Realiza una petición fetch a https://jsonplaceholder.typicode.com/todos para obtener una
lista de tareas. Luego, filtra y muestra solo aquellas tareas que estén marcadas como
completadas.
Requisitos:
1. Muestra las tareas completadas en la consola.
2. Si la solicitud falla, muestra un mensaje de error adecuado
 */

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    fetchSolo();
}

function filtraje(lista) {
    return new Promise((resolve, reject) => {
        const array = lista.filter(list => list.completed === true);
        if (array.length > 0) {
            resolve(array)
        }
        reject("Ha habido un problema con la API") // Ocurre cuando la lista de tareas completadas está vacía.
    });
}

function peticiones() {
    url = "https://jsonplaceholder.typicode.com/todos";

    fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((request) => {
        if (!request.ok) {
            throw new Error("Error en la solicitud al servidor") // Se encarga de detectar si la solicitud HTTP falló 
        }
        return request.json()
    }).then((data) => {
        return filtraje(data);
    }).then((respuesta) => {
        respuesta.forEach((completo) => {
            console.log(completo);
        });
    }).catch((error) => {
        console.log(error.message);
    })
}

// OTRA MANERA
function fetchSolo() {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const tareasCompletadas = [];
            data.forEach(tarea => {
                if (tarea.completed) {
                    tareasCompletadas.push(tarea);
                }
            });
            console.log("Tareas completadas:", tareasCompletadas);
        })
        .catch(error => console.error("Hubo un problema con la petición:", error.message));
}
