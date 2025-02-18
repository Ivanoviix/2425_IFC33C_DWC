let productos = [
    { "id": 1, "nombre": "Camisa", "precio": 20.99 },
    { "id": 2, "nombre": "Pantalón", "precio": 35.50 },
    { "id": 3, "nombre": "Zapatos", "precio": 50.00 }
]

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    muestraProductos(productos);
}

function muestraProductos(productos) {
    let table = document.createElement('table');
    let tr = document.createElement('tr');
    let th = document.createElement('th');

    // Creo y añado las claves de los productos.
    Object.keys(productos[0]).forEach(key => {
        let th = document.createElement('th');
        th.innerText = key;
        tr.appendChild(th);
    });
    // Introduzco las th en las tr y luego lo introduzco en la tabla
    tr.appendChild(th);
    table.appendChild(tr);
    
    // Recorrer los productos y crear una fila para cada uno
    productos.forEach(producto => {
        let tr = document.createElement('tr');

        // Añadir celdas con los valores de cada producto
        Object.values(producto).forEach(element => {
            let td = document.createElement('td');
            td.style.border = "1px solid black";
            td.innerText = element;            
            tr.appendChild(td);
        });
        // Creo el td del botón, el botón y le aplico un texto
        let buttonTd = document.createElement('td');
        let button = document.createElement('button');
        button.innerHTML = "Marcar Producto";

        // Si el background es rojo, aplicamos el blanco, si no es rojo, aplicamos el blanco
        button.addEventListener("click", () => {
            if (tr.style.background == "red") {
                tr.style.background = "white";
            } else {
                tr.style.background = "red";
            }
        })

        // Metemos el botón en el td, luego, introducimos el td dentro de la tr y lo introducimos en la tabla
        buttonTd.appendChild(button)
        tr.appendChild(buttonTd)
        table.appendChild(tr);
        table.style.margin = "auto";

    });
    // Añadir la tabla al cuerpo del documento
    document.body.appendChild(table);
}

