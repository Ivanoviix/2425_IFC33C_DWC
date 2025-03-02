/* 
Ejercicio 5: Creación de una promesa personalizada
Enunciado:
Crea una promesa personalizada que simule el lanzamiento de un dado.
1. Cuando el usuario haga clic en un botón, lanza el dado (genera un número aleatorio
entre 1 y 6).
2. Si el resultado es mayor o igual a 4, resuelve la promesa mostrando "¡Éxito!
Obtuviste un [número]".
3. Si el resultado es menor a 4, rechaza la promesa mostrando "Fallaste. Obtuviste un
[número]".
Requisitos:
● Implementa un diseño simple con un botón y un área para mostrar los resultados.
● Utiliza estilos para distinguir entre éxito y fallo.
*/

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    dado();
}

function dado() {
    let label = document.createElement('label');
    let boton = document.createElement('button');
    let p = document.createElement('p');
    boton.innerText = "Iniciar";
    label.appendChild(boton);
    label.appendChild(p);
    document.body.appendChild(label);
    p.innerText = "";

    boton.addEventListener("click", () => {
        p.innerText = "El dado está girando..."
        p.style.color = "black";

        let min = 1;
        let max = 6
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(random)
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (random >= 4) {
                    resolve(`¡Éxito! Obtuviste un ${random}`);
                } else {
                    reject(`Fallaste. Obtuviste un ${random}`);

                }
            }, 3000);
        });

        promise.then(respuesta => {
            p.innerText = respuesta;
            p.style.color = "green";
        }).catch(respuesta => {
            p.innerText = respuesta;
            p.style.color = "red";
        });

    });

}