/* 
Ejercicio 3: Simulación de carga paralela con Promise.race
Enunciado:
Crea una aplicación web que cargue tres promesas que simulen tareas con tiempos
distintos (por ejemplo, "Imagen A", "Imagen B" y "Imagen C").
1. Usa Promise.race para mostrar cuál de las tareas terminó primero.
2. Muestra el mensaje "La tarea más rápida fue: [nombre de la tarea]".
3. Si ocurre un error en cualquiera de las tareas, rechaza la promesa y muestra "Error
al cargar las tareas".
Requisitos:
● Simula los tiempos de carga con setTimeout.
● Implementa un diseño simple con botones para iniciar la carga
 */

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    carreraPromesas();
}

function carreraPromesas() {
    let label = document.createElement('label');
    let boton = document.createElement('button');
    boton.type = "submit";
    boton.innerText = "Iniciar";
    label.appendChild(boton);
    document.body.appendChild(label);

    boton.addEventListener("click", (event) => {
        event.preventDefault();
        let imagenA = new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve("Tarea de imagenA acabada")
            }, 2000);
            
        })

        let imagenB = new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve("Tarea de imagenB acabada")

            }, 3000);
        })

        let imagenC = new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve("Tarea de imagenC acabada")
            }, 5000);
        })

        Promise.race([imagenA, imagenB, imagenC]).then(respuesta =>{
            console.log("La tarea más rápida fue: ", respuesta)
        }).catch(respuesta =>{
            console.log(respuesta);
        });
    });
}