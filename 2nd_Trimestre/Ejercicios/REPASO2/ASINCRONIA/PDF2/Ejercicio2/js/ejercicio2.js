/* 
Ejercicio 2: Cadena de Promesas para Procesamiento de Datos
Enunciado:
Has recibido una lista de productos desde un servidor. Debes crear una función
obtenerProductos que devuelva una promesa con el siguiente array de productos después
de 1 segundo.
[
{ id: 1, nombre: "Teclado", precio: 30 },
{ id: 2, nombre: "Ratón", precio: 20 },
{ id: 3, nombre: "Monitor", precio: 200 }
]
Luego, encadena otra promesa para aplicar un descuento del 10% a cada producto y
muestra el resultado final. Si ocurre un error durante el proceso, captura y muestra el error.
*/

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    produccion();
}

/* function productos() {

    const productos = `[
        { "id": 1, "nombre": "Teclado", "precio": 30 },
        { "id": 2, "nombre": "Ratón", "precio": 20 },
        { "id": 3, "nombre": "Monitor", "precio": 200 }
    ]`;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random < 0.3) {
                reject("Campo vacío o valor incorrecto");
            } else {
                resolve(JSON.parse(productos));
            }
        }, 1000);
    }).then((respuesta) => {
        console.log("Esta es la lista de productos: ", respuesta)
        return new Promise((resolve, reject) => {
            for (result of productos) {
                result.precio = result.precio * 0.9;
            }
            resolve(productos)

        }).then((resultado) => {
            console.log("Los productos con un 10% de descuento", resultado)
        }).catch((error) => {
            console.log(error)
        })
    }).catch((error) => {
        console.log(error)
    });

} */

/*también
  resultado.precio = resultado.precio - (resultado.precio * 10 / 100); */


function obtenerProductos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productos = [
                { id: 1, nombre: "Teclado", precio: 30 },
                { id: 2, nombre: "Ratón", precio: 20 },
                { id: 3, nombre: "Monitor", precio: 200 }
            ];

            if (Math.random() < 0.3) {
                reject("Campo vacío o valor incorrecto");
            } else {
                resolve(productos);
            }
        }, 1000);
    });
}

function aplicarDescuento(p) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!Array.isArray(p)) {
                reject("Los datos no son válidos");
                return;
            }
            let copiaDeProductos = JSON.parse(JSON.stringify(p));

            /* for (let i = 0; i < copiaDeProductos.length; i++) {
                copiaDeProductos[i].precio = +(copiaDeProductos[i].precio * 0.9).toFixed(2);
            } */

            for (let product of copiaDeProductos) {
                product.precio = +(product.precio * 0.9).toFixed(2);
            }
            resolve(copiaDeProductos);
        }, 2000);
    });
}

function produccion() {
    obtenerProductos()
        .then((resultado) => {
            console.log("Productos sin descuento: ", resultado)
            return aplicarDescuento(resultado)
        })
        .then(productosConDescuento => {
            console.log("Los productos con un 10% de descuento:", productosConDescuento);
        })
        .catch(error => {
            console.error("Ocurrió un error:", error);
        });
}


/* 
document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    obtenerProductos();
}

function obtenerProductos() {
    let productos = `[
        { "id": 1, "nombre": "Teclado", "precio": 30 },
        { "id": 2, "nombre": "Ratón", "precio": 20 },
        { "id": 3, "nombre": "Monitor", "precio": 200 }
    ]`;
    let productosObj = JSON.parse(productos);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve(productosObj);
            } else {
                reject("No se han encontrado productos")
            }
        }, 1000);
    })
        .then((resultado) => {
            console.log("Productos obtenidos: ", resultado);
            let productosCopia = structuredClone(resultado); // hacer copia profunda del objeto (deep copy)

            return new Promise((resolve, reject) => {
                if (Math.random() > 0.5) {
                    productosCopia.forEach(producto => {
                        producto.precio = producto.precio * 0.9;
                    });
                    resolve(productosCopia);
                } else {
                    reject("Ha habido un error en el descuento")
                }
            })
                .then((resultadoDescuento) => {
                    console.log("Productos con descuento: ", resultadoDescuento);
                })
                .catch((error) => {
                    console.log(error);
                })
        })
        .catch((error) => {
            console.log(error);
        })
} */