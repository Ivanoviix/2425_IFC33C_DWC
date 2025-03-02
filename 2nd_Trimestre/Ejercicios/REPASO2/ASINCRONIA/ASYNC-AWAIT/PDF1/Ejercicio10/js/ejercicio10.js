/* 
Ejercicio 10: Simulación de Carga Progresiva con async/await
Enunciado:
Crea una función que obtenga fotos desde https://jsonplaceholder.typicode.com/photos y
muestre las fotos una a una cada segundo. Muestra el título de cada foto mientras se carga.
Requisitos:
1. Usa async/await para obtener los datos.
2. Utiliza setTimeout para simular la carga progresiva.
3. Maneja errores mostrando un mensaje adecuado.
*/

document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    cargaFotos();
}

async function cargaFotos() {
    try {
        let url = "https://jsonplaceholder.typicode.com/photos";

        const response = await fetch(url, {})

        if (!response.ok) {
            throw new Error("Página no encontrada.")
        }
        const respuesta = await response.json();
        for (const foto of respuesta) {
            console.log("Cargando foto:", foto.title);
            await new Promise(resolve => setTimeout(resolve, 1000)); 
            console.log(foto.url);
        }
    } catch (err) {
        console.log("Error", err)
    }
}
