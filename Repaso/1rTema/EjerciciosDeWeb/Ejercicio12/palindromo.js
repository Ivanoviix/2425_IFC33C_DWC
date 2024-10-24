function palindromo(prompt) {
    console.log("Palabra recibida: ", prompt)
    let texto_minuscula = prompt.toLowerCase();
    let texto_reversed = texto_minuscula.split("").reverse().join("");
    console.log("Palabra revertida: ", texto_reversed)

    if (texto_minuscula == texto_reversed) {
        console.log("Es pálindromo")
        return true;
    } else {
        console.log("No es pálindromo")
        return false;
    }
}


let texto = "kayak";
palindromo(texto)