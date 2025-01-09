// Obtengo la tabla mediante el nombre de la clase.
let tabla = document.getElementsByClassName('contenedor-tabla')[0];
// Creación del tbody para la tabla.
let tbody = document.createElement('tbody');
function crearTablaPartituras(partitures) {
    // Bucle para que cree las partituras 15 veces (100 partituras)
    for (let y = 0; y < 20; y++) {
        for (let x = 0; x < partitures.length; x++) {
            /* Cálculo de la posición de la partitura.
               Y la posicion del bucle que recorre del 0 al 20, lo multiplico por las partituras que hay
               y le sumo la posición del bucle que recorre las partituras disponibles(x, que son 5 partituras).
               finalmente le sumo 1 para que empiece por 1 y no por 0 */
            let posicion = y * partitures.length + x + 1;
            // Creación de los elementos tr y td.
            let tr = document.createElement('tr');
            let tdTitol = document.createElement('td');
            tdTitol.textContent = partitures[x].nombre;
            let tdIdiomaO = document.createElement('td');
            tdIdiomaO.textContent = partitures[x].idioma;
            // Creación del botón con la icono de editar.
            let tdAccion = document.createElement('td');
            let editButton = document.createElement('button');
            let editImg = document.createElement('img');
            // Aplico el src del icono al boton deleteImg.
            editImg.src = "./assets/img/icons/edit.svg";
            editButton.appendChild(editImg);
            editButton.onclick = EditarPartitura;
            editButton.append(" Editar");
            tdAccion.appendChild(editButton);

            // Creación del botón con la icono de borrar.
            let deleteButton = document.createElement('button');
            let deleteImg = document.createElement('img');
            // Aplico el src del icono al boton deleteImg.
            deleteImg.src = "./assets/img/icons/trash.svg"; 
            deleteButton.appendChild(deleteImg);
            deleteButton.append(" Borrar");
            tdAccion.appendChild(deleteButton);

            deleteButton.addEventListener('click', function() {
                BorrarPartitura(posicion);
            });

            // Añado las tr al tbody de la tabla y luego añado el tbody a la tabla desde el nombre de la clase de la tabla.
            tr.appendChild(tdTitol);
            tr.appendChild(tdIdiomaO);
            tr.appendChild(tdAccion);
            tbody.appendChild(tr);
            tabla.appendChild(tbody);
        }
    }
}
console.log("Partituras disponibles:", partitures);

crearTablaPartituras(partitures)

// Funcion incompleta para editar partituras.
function EditarPartitura(posicion) {
    let respuesta = window.confirm(`Està segur que vol editar l'element ${posicion}?`);

    if (respuesta) {
        alert(`No esta configurat per editar!`);
    } else {
        alert(`No esta configurat per editar!`);
    }
}
// Función para "borrar" partituras
function BorrarPartitura(posicion) {
    let respuesta = window.confirm(`Està segur que vol borrar l'element ${posicion}?`);

    if (respuesta) {
        alert(`Element esborrat!`);
    } else {
        alert("Has cancel·lat l'acció.");
    }
   
}
// Función para abrirPopup
function abrirPopup() {
    const login = "./login.html";
    let width = 600;
    let height = 450;
    let left = (screen.width / 2) - (width / 2);
    let top = (screen.height / 2) - (height / 2);
    const pagina = window.open(login, "PopupLogin", `width=${width}px, height=${height}px, left=${left}px, top=${top}px, resizable=yes, scrollbars=yes`);

    if (!pagina) {
        console.log("La pagina no está operativa actualmente.");
        alert("Habilita los popups en tu navegador para esta página.");
    }
}

window.abrirPopup = abrirPopup;