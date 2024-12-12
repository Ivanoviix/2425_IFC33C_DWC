// 1 Ordenar y mostrar una lista estática

const numeros = [3, 6, 5, 7, 4, 8, 1, 9]

let listaOrdenadaYDesordenada = () => {
    let ul = document.createElement('ul')
    let liA = document.createElement('li')
    let liD = document.createElement('li')
    let li = document.createElement('li')

    li.innerText = numeros;
    liA.innerText = ordenarAscendente()
    liD.innerText = ordenarDescendente()

    ul.appendChild(li)
    ul.appendChild(liA)
    ul.appendChild(liD)
    document.body.appendChild(ul)
};

function ordenarAscendente() {
    // el array numeros cambiaría con el sort y se quedaria con este array [1,3,4,5,6,7,8,9]
    return numeros.sort((a, b) => (a - b));
}

function ordenarDescendente() {
    // el array numeros cambiaría con el sort y se quedaria con este array [9,8,7,6,5,4,3,1]
    return numeros.sort((a, b) => (b - a));
}

listaOrdenadaYDesordenada()
// --------------------------------------------------------------------------------------------------------------
function ordenarAscendente() {
    return [...numeros].sort((a, b) => a - b);
}

function ordenarDescendente() {
    return [...numeros].sort((a, b) => b - a);
}

function mostrarLista(array, ul) {
    array.forEach(num => {
        let li = document.createElement('li');
        li.innerText = num;
        ul.appendChild(li);
    });
}

let listaOrdenadaYDesordenada2 = () => {
    let ulOriginal = document.createElement('ul');
    let ulAscendente = document.createElement('ul');
    let ulDescendente = document.createElement('ul');

    mostrarLista(numeros, ulOriginal);
    mostrarLista(ordenarAscendente(), ulAscendente);
    mostrarLista(ordenarDescendente(), ulDescendente);

    document.body.appendChild(ulOriginal);
    document.body.appendChild(ulAscendente);
    document.body.appendChild(ulDescendente);
};

listaOrdenadaYDesordenada2();


// 2 Crear una tabla dinámica de datos
const personas = [
    {"Nombre": "Pedro", "Edad": 25},
    {"Nombre": "Ivan", "Edad": 26},
    {"Nombre": "Helen", "Edad": 25},
    {"Nombre": "Facundo", "Edad": 23}
]

function ordenandoEdad() {
    return personas.sort((a, b) => a.Edad - b.Edad);
}
