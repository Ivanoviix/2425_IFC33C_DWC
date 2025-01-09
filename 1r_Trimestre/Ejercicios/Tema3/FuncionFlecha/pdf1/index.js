// 1 CREAR Y AGREGAR ELEMENTOS DOM
let ivifuncion = () => {
    let p = document.createElement("p");
    p.innerText = "Este es un parrafo dinamico"
    document.body.appendChild(p)
}
ivifuncion()


// 2 Generar una lista dinamica
array = ["Ivan", "Helen", "Facundo"]

let funcionLista = () => {
    let ul = document.createElement("ul")
    for (let x = 0; x < array.length; x++) {
        let li = document.createElement("li")
        li.innerText = array[x]
        ul.appendChild(li)
    }

    document.body.appendChild(ul)
}

funcionLista()


// 3 Mostrar propiedades del objeto Window
let propiedades = () => {
    let p = document.createElement("p")
    p.innerText = `El width de la pantalla es: ${window.innerWidth} y el heigth de la pantalla es ${window.innerHeight}`
    document.body.appendChild(p)
}

propiedades()


// 4 Genera una tabla con datos estaticos
let generaTabla = () => {
    let tabla = document.createElement('table')
    let thead = document.createElement('thead')
    let tr = document.createElement('tr')
    let tdC1 = document.createElement('td')
    let tdC2 = document.createElement('td')

    tdC1.innerText = "Nombre"
    tdC2.innerText = "Edad"

    tr.appendChild(tdC1)
    tr.appendChild(tdC2)
    thead.appendChild(tr)
    thead.appendChild(tr)
    tabla.appendChild(thead)

    let tbody = document.createElement('tbody')
    let data = [
        { nombre: "Ivan", edad: 25 },
        { nombre: "Helen", edad: 30 },
        { nombre: "Facundo", edad: 28 }
    ]

    data.forEach(item => {
        let tr = document.createElement('tr')
        let tdNombre = document.createElement('td')
        let tdEdad = document.createElement('td')

        tdNombre.innerText = item.nombre
        tdEdad.innerText = item.edad

        tr.appendChild(tdNombre)
        tr.appendChild(tdEdad)
        tbody.appendChild(tr)
    })

    tabla.appendChild(tbody)
    document.body.appendChild(tabla)
}

/* generaTabla() */

// 5 Contar palabras en un texto
let texto = "Este examen lo doy a aprobar."

let contadorPalabras = (texto) => {
    let p = document.createElement('p')
    let palabras = texto.split(" ").length
    p.innerText = `El texto tiene ${palabras} en total`

    document.body.appendChild(p)
}

/* contadorPalabras(texto); */


// 6 Crear una tabla de multiplicar.
let tablaMultiplicar = (num, multi) => {
    let table = document.createElement('table')
    let tbody = document.createElement('tbody')

    for (let x = 1; x <= num; x++) {
        let tr = document.createElement('tr')
        let tdNum = document.createElement('td')
        let tdX = document.createElement('td')
        let tdMulti = document.createElement('td')

        tdNum.innerText = multi
        tdX.innerText = "x"
        tdMulti.innerText = ` ${x} = ${x * multi}`
        tr.appendChild(tdNum)
        tr.appendChild(tdX)
        tr.appendChild(tdMulti)
        tbody.appendChild(tr)

    }

    table.appendChild(tbody)
    document.body.appendChild(tbody)
}

tablaMultiplicar(150, 4)

//7 Mostrar datos del navegador
let datosNav = () => {
    let p = document.createElement('p')
    p.innerText = `El navegador agent es "${navigator.userAgent}" y el lenguaje es "${navigator.language}"`
    document.body.appendChild(p)
}

datosNav()

//8 Crear un listado númerico
let listOrdenada = (numero) => {
    
    for (x = 0; x <= numero; x++){
        let p = document.createElement('p')
        p.innerText = x
        document.body.appendChild(p)
    }
}
listOrdenada(10)


//9 Crear una lista de enlaces
const miArray = [
    { "nombre": "google", "url": "https://www.google.com" },
    { "nombre": "Pau Cases Noves", "url": "https://paucasesnovescifp.cat" },
    { "nombre": "google", "url": "www.google.com" }
];

let listaDeEnlaces = (miArray) => {
    let ul = document.createElement('ul')
    let li
    let liText;
    miArray.forEach(objeto => {
        li = document.createElement('li')
        ul.appendChild(li)
        liText = "" // Creamos un texto vacio
        for (key in objeto) {
            liText += `${key}: ${objeto[key]}` // Recorremos el diccionario, primera parte y luego con el for añadimo el proximo +=
        }
        li.innerText = liText
    });
    document.body.appendChild(ul)
}

listaDeEnlaces(miArray);


// 10 Calcular promedio de un array

const elArray = [5,7,8,9,10]

let promedioArray = () => {
    let p;
    let arrayComplet = elArray.length;
    let sumaNum = 0;
    for (let x = 0; x < elArray.length; x++) {
        p = document.createElement('p');
        sumaNum += elArray[x];
        promedio = sumaNum / arrayComplet;
        p.innerText = promedio;
    }
        document.body.appendChild(p)
};
promedioArray()

