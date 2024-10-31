function Marca(nombre) {
    this.nombre = nombre;
}

function Modelo(marca, modelo) {
    this.marca = marca; // Atributo del objeto Modelo
    this.modelo = modelo;
}

var ford = new Marca("FORD");
var citroen = new Marca("CITROEN");
var seat = new Marca("SEAT");
var tesla = new Marca("TESLA");
console.log("NOMBRES DE OBJETOS MARCA") 
console.log(ford.nombre)
console.log(citroen.nombre)
console.log(seat.nombre)
console.log(tesla.nombre)

var focus = new Modelo(ford, "FOCUS");
var fiesta = new Modelo(ford, "FIESTA");
var saxo = new Modelo(citroen, "saxo");
var c4 = new Modelo(citroen, "C4");
var ibiza = new Modelo(seat, "IBIZA");
var ateca = new Modelo(seat, "ATECA");
var cybertruck = new Modelo(tesla, "CYBERTRUCK");
var modelX = new Modelo(tesla, "MODEL X");

var coches = [focus, fiesta, saxo, c4, ibiza, ateca, cybertruck, modelX];
console.log("ARRAY DE COCHES")
console.log(coches)

var div1 = document.getElementById("app");
var div2 = document.querySelector("#body>div");
var div3 = document.querySelector("#app");
console.log("")
console.log(div3)

var table = document.createElement("table");
table.id = "coches";

var thead = document.createElement("thead");
table.appendChild(thead);

var tr = document.createElement("tr");
thead.appendChild(tr); // Tr cuelga de thead

/* var th = document.createElement("th");
th.innerText = "MARCA";
tr.appendChild(th);
                            // Lo comentamos por que tenemos un array justo abajo "cabeceras" con las marcas
var th = document.createElement("th");
th.innerText = "MODELO";
tr.appendChild(th); */

var tbody = document.createElement("tbody");
table.appendChild(tbody);


// Es mejor para futuros cambios
var cabeceras = ["MARCA", "MODELO"];

var th;
for (let cabecera of cabeceras) {
    th = document.createElement("th");
    th.innerText = cabecera;
    tr.appendChild(th);
}




for (var i = 0; i < coches.length; i++) { 
    tr = document.createElement("tr");
    tbody.appendChild(tr);

    /* 
    td = document.createElement("td");
    td.innerText = coches[i].marca.nombre;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerText = coches[i].modelo;
    tr.appendChild(td); */

/*     for (let propiedad in coches[i]) {
        td = document.createElement("td");
        
        if (typeof coches[i][propiedad] === 'string') {
            td.innerText = coches[i][propiedad];
        } else {
            tr.innerText = coches[i][propiedad].nombre;
        }
        tr.appendChild(td);
    }  */

        for (let propiedad in coches[i]) {
            td = document.createElement("td");
            
            if (propiedad === 'marca') {
                td.innerText = coches[i][propiedad];
            } else {
                tr.innerText = coches[i][propiedad].nombre;
            } // MAL

            tr.appendChild(td);
        } 

}
div3.appendChild(table);

/* table.style.backgroundColor = "black";
table.style.color = "white";
table.style.border = "5px solid purple";
table.style.borderRadius = "10px"; */
console.log(table)