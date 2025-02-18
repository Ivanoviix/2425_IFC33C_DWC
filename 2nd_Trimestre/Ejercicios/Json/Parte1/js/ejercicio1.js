let contenedores = {
    "Grandes" : {
        "Grande Ancho": ["Agua", "Leche", "Aceite"],
        "Mediano Ancho": ["Agua", "Leche", "Aceite", "Vinagre"] 
    },
    "Medianos" : {
        "Mediano ancho": ["Agua", "Leche", "Aceite", "Vinagre"],
        "Pequeño": ["Jabón", "Alcohol"]
    },
    "Verticales" : {
        "Grande Alto": ["Agua", "Leche", "Aceite", "Vinagre"],
        "Mediano Alto": ["Lejía", "Amoniaco", "Aguarrás", "Gasolina", "Alcohol"]
    }
}

let Objeto_a_Json = JSON.stringify(contenedores);
console.log(Objeto_a_Json);

let parsedJson = JSON.parse(Objeto_a_Json);
console.log("Contenedor Grande: ", parsedJson.Grandes)
console.log("Contenedor Mediano: ", parsedJson.Medianos)
console.log("Contenedor Vertical: ", parsedJson.Verticales)


function imprimirObjeto(objeto) {
    let ul = document.createElement('ul');
    for (let key in objeto) {
        let li = document.createElement('li');
        li.innerText = key + ": " + JSON.stringify(objeto[key]);
        ul.appendChild(li);

        if (typeof objeto[key] ) {
            let subUl = document.createElement('ul');
            for (let subKey in objeto[key]) {
                let subLi = document.createElement('li');
                subLi.innerText = subKey + ": " + JSON.stringify(objeto[key][subKey]);
                subUl.appendChild(subLi);
            }
            li.appendChild(subUl);
        } 
    }
    document.body.appendChild(ul);
}
imprimirObjeto(contenedores);


