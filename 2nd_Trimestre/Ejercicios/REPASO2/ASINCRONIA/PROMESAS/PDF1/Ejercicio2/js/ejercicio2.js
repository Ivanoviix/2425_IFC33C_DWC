/* 
Ejercicio 2: Simulación de temporizador con promesas
Enunciado
Crea una aplicación web que simule un temporizador.
1. Pide al usuario ingresar un número de segundos en un campo de texto y haz clic en
"Iniciar temporizador".
2. Utiliza una promesa para esperar los segundos indicados.
3. Al finalizar, muestra un mensaje diciendo: "El tiempo ha terminado".
4. Si el usuario no ingresa un número válido, rechaza la promesa con un mensaje de
error.
Requisitos
● El temporizador debe aceptar solo valores numéricos positivos.
● Muestra errores si el usuario deja el campo vacío o ingresa valores incorrectos.
*/

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    temporizador();
}

function temporizador() {
    let form = document.createElement('form');
    let label = document.createElement('label');
    let input = document.createElement('input');
    input.type= "number";
    let boton = document.createElement('button');
    boton.type = "submit";
    boton.innerText = "Iniciar temporizador";
    let p = document.createElement('p');    
    p.innerText = "Esperando el tiempo indicado..."
    label.appendChild(p)
    label.appendChild(input);
    label.appendChild(boton);
    form.appendChild(label);

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        let temporizador = parseInt(input.value); // EL TEMPORIZADOR TIENE QUE ESTAR DENTRO DEL EVENTO.

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (input.value === "" || input.value < 0) {
                    reject("Campo vacío o valor incorrecto");
                } else {
                    resolve(`El tiempo establecido (${temporizador} segundos) ya ha terminado`);
                }
            }, temporizador * 1000);
        });

        promise.then(respuesta => {
            p.innerText = respuesta;
            p.style.color = "green";
        }).catch(respuesta => {
            p.innerText = respuesta;
            p.style.color = "red";
        })
    });
    document.body.appendChild(form);

}