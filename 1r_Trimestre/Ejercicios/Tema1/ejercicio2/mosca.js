/* Una mosca volaba per la llum
En aquest exercici treballarem amb la famosa cançó "Una mosca volava per la
llum". A partir d'aquesta cançó (String), feu com la cançó i escriviu-la canviant
totes les vocals per la lletra "a", "e", "i", "o" i "u" respectivament. */

cancion = "Una mosca volaba per la llum" // variable canción

vocales = ['a','e','i','o','u'] // variable vocales con una lista con las vocales

for (let vocal of vocales) { 
    nueva_cancion = ""

    for (let letra of cancion) {
        if (vocales.includes(letra.toLowerCase())) {
            nueva_cancion += vocal;
        } else {
            nueva_cancion += letra;
        }
    }
    console.log("Frase con la letra: " + vocal + "\n" + nueva_cancion)
}