let numeros = parseInt(prompt("Escribe la tabla de multiplicar que deseas ver:"));

let tabla = document.createElement("table");
var tr;
var td;
function crearTabla(numeros) {
    for (let x = 0; x <= numeros; x++) {
        tr = document.createElement("tr"); // Creamos una fila por cada iteración de x

        for (let y = 0; y <= numeros; y++) {
            td = document.createElement("td"); // Creamos una columna por cada iteración de y
            td.style.border = "1px solid black";
            td.style.padding = "5px";

            if (x === 0 && y === 0) { // Si esta en la primera fila y columna se pone 0
                td.innerHTML = 0;
                td.style.fontWeight = "bold";
                td.style.backgroundColor = "#167FF5";
            } else if (x === 0) { // Si x es 0, pero y no lo es, estamos en la primera columna.
                td.innerHTML = y; // Imprimimos el valor de y
                td.style.fontWeight = "bold";
                td.style.backgroundColor = "#167FF5";
            } else if (y === 0) { // Si y es 0, pero x no lo es, estamos en la primera columna.
                td.innerHTML = x; // Imprimimos el valor de x
                td.style.fontWeight = "bold";
                td.style.backgroundColor = "#167FF5";
            } else {
                td.innerHTML = x * y; // Si no estamos en la primera fila ni columna, multiplicamos x por y
                td.style.backgroundColor = "#B2DBF4";

            }
            tr.appendChild(td); // Añadimos la columna a la fila

        }
        tabla.appendChild(tr); // Añadimos la fila a la tabla
        tabla.style.backgroundColor = '#000000';

        
    }
}

crearTabla(numeros); 

// Estilizamos la tabla
tabla.style.border = "1px solid black";
tabla.style.margin = "0 auto";
tabla.style.textAlign = "center";

// Estilizamos el body
document.body.style.display = "flex";
document.body.style.height = "100vh";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
document.body.style.margin = "0";

document.body.appendChild(tabla); // Añadimos la tabla al body del documento HTML cuando se ha puesto ya los estilos.
