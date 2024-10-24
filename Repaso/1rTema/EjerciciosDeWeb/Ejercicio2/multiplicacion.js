const num_a_Multiplicar = 12;
const tabla_De_Multiplicar = 5;
let tabla;
function tablaMultiplicar(numero) {
    console.log("Tabla de multiplicar de", numero);
    for (let x = 1; x <= num_a_Multiplicar; x++) {
        let tabla = numero * x;
        console.log(numero + ' x ' + x + ' = ' + tabla);
    }
}
tablaMultiplicar(tabla_De_Multiplicar);

