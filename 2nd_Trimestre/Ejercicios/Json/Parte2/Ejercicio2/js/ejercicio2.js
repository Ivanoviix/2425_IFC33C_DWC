let torneo = [
    { "nombre": "Ana", "puntuacion": 150 },
    { "nombre": "Carlos", "puntuacion": 200 },
    { "nombre": "Beatriz", "puntuacion": 180 }
]


document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    mostrarUsuarios(torneo);

}

function mostrarUsuarios(torneo) {
    let tabla = document.createElement('table');

    torneo.forEach(element => {
        let tr = document.createElement('tr');

        Object.values(element).forEach(elemento => {
            let td = document.createElement('td');
            td.innerText = elemento;
            tr.appendChild(td);
        });
        tabla.appendChild(tr);
    });
    // Creo la tr y los botones.
    let trBotones = document.createElement('tr');
    let buttonAsc = document.createElement('button');
    let buttonAlf = document.createElement('button');

    // Introducimos el texto en los botones.
    buttonAsc.innerText = "Ordenar Ascendentemente"
    buttonAlf.innerText = "Ordenar Alfabeticamente"

    // Aplicamos en cada boton la función de ordenar.
    buttonAsc.addEventListener("click", () => {
        ordenarPorPuntuacion(torneo);
        mostrarUsuarios(torneo);
    })

    // Aplicamos en cada boton la función de ordenar.
    buttonAlf.addEventListener("click", () => {
        ordenarAlfabeticamente(torneo);
        mostrarUsuarios(torneo);
    })
    // Aplico los botones a las tr y luego a la tabla.
    trBotones.appendChild(buttonAsc);
    trBotones.appendChild(buttonAlf);
    tabla.appendChild(trBotones);

    document.body.appendChild(tabla);
}


// Función de ordenar por puntuación.
function ordenarPorPuntuacion(torneo) {
    torneo.sort((a, b) => a.puntuacion - b.puntuacion);
}

// Función de ordenar alfabeticamente.
function ordenarAlfabeticamente(torneo) {
    torneo.sort((a, b) => a.nombre.localeCompare(b.nombre));
}
