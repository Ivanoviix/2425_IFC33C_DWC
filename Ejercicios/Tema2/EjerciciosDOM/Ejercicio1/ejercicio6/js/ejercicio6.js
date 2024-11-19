datos = [
    {
        nombre: "Iván",
        edad: "26",
        email: "ivanmartin@paucasesnovescifp.cat",
    },
    {
        nombre: "Helen",
        edad: "25",
        email: "mariaelenarivilla@paucasesnovescifp.cat",
    },
    {
        nombre: "Facundo",
        edad: "23",
        email: "facundonastasi@paucasesnovescifp.cat",
    }
]

let td;
let tr;
let th;
let body = document.querySelector('body');
let tabla = document.createElement('table');
body.appendChild(tabla)

tr = document.createElement('tr')
for (let key of Object.keys(datos[0])) {
    th = document.createElement('th');
    th.innerText = key;
    tr.appendChild(th)
}
tabla.appendChild(tr)

for (let alumno of datos) {
    tr = document.createElement('tr');

    for (let valor of Object.values(alumno)) {
        td = document.createElement('td');
        td.innerText = valor;
        tr.appendChild(td)
    }
    tabla.appendChild(tr)
}


/* Para probar en una función */
function espaciado(element) {
    element.style.margin = "10px"
    element.style.border = "1px solid black"
} 

espaciado(tabla)

/* BODY */
body.style.height = '100vh';
body.style.margin = 0;
body.style.display = 'flex'
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.fontFamily = 'Arial';


/* TABLA */
tabla.style.tableLayout = 'fixed';
tabla.style.textAlign = 'center';
tabla.style.justifyContent = 'center';
tabla.style.width = '70%';
tabla.style.borderCollapse = 'collapse';

let cabecera = document.querySelectorAll('th')
for (let x = 0; x < cabecera.length; x++) {
    cabecera[x].style.fontSize = '18px'
    cabecera[x].style.textTransform = 'capitalize';
    cabecera[x].style.backgroundColor = '#1F80DE';
    cabecera[x].style.border = '1px solid black';
    cabecera[x].style.padding = '5px';
}

let celdas = document.querySelectorAll('tr')
for (let x = 0; x < celdas.length; x++) {
    celdas[x].style.padding = '5px';
}

let celdasInfo = document.querySelectorAll('td')
for (let x = 0; x < celdasInfo.length; x++) {
    celdasInfo[x].style.fontSize = '17px';
    celdasInfo[x].style.backgroundColor = '#B6CADE';
    celdasInfo[x].style.border = '1px solid black';
    celdasInfo[x].style.margin = 0;
    celdasInfo[x].style.padding = '10px';
} 



/* Ejemplo Profe

for (let alumno of datos) {
    for (let valor of Object.values(alumno)) {
        console.log(valor) // Así imprime todos los elementos del array de Objetos
    }
}
console.log(Object.values(datos[0]))
console.log(Object.values(datos[1]))
console.log(Object.values(datos[2])) */