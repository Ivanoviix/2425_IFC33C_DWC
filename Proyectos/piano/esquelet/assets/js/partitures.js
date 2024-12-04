import { partitures } from '../js/piano.js';

/* let tabla = document.querySelector('.contenedor-tabla tbody');*/
let tabla = document.getElementsByClassName('contenedor-tabla')[0];
let tbody = document.createElement('tbody');
function crearTablaPartituras(partitures) {

    for (let y = 0; y < 15; y++) {
        for (let x = 0; x < partitures.length; x++) {
            let tr = document.createElement('tr');
            let tdTitol = document.createElement('td');
            tdTitol.textContent = partitures[x].nombre;
            let tdIdiomaO = document.createElement('td');
            tdIdiomaO.textContent = partitures[x].idioma;

            let tdAccion = document.createElement('td');
            tdAccion.textContent = "Editar Borrar";

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

function EditarPartitura() {

}

/*  for (let partitura of partitures) {
     let tr = document.createElement('tr');
     let tdTitol = document.createElement('td');
     tdTitol.textContent = partitura.nombre;
 
     let tdIdiomaO = document.createElement('td');
     tdIdiomaO.textContent = partitura.idioma
 
     let tdInstrument = document.createElement('td');
     tdInstrument.textContent = "Acción"; 
 
 
     tr.appendChild(tdTitol);
     tr.appendChild(tdIdiomaO);
     tr.appendChild(tdInstrument);
     tabla.appendChild(tr);
}
*/

function abrirPopup() {
    login = "./login.html"
    pagina = window.open(login, "abrirLogin", "width=450px, heigth=450px")

    if (!pagina) {
        print("La pagina no está operativa actualmente.")
    }
}