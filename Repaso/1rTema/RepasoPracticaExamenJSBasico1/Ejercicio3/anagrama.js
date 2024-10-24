

function anagrama(text1, text2) {
    

    let texto1 = text1.split("").sort().join("");
    let texto2 = text2.split("").sort().join("");

    if (texto1 == texto2) {
        console.log("Es un anagrama")
        return true
    } else {
        console.log("No es un anagrama")
        return false
    }
}

let respuesta = anagrama("ESTANCO", "ACENTOS");
console.log("La respuesta es:", respuesta)