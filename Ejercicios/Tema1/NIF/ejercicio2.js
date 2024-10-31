
class NIF {

    letraNIF = "TRWAGMYFPDXBNJZSQVHLCKE";

    constructor(numero, letra) {
        this.numero = numero;
        this.letra = letra;
    }
        
    esCorrecto() {

        if (this.numero.toString().length !== 7) {
            return false;
        }
        
        let resto = this.numero % 23;
        
        let numCorrecto = this.letraNIF.charAt(resto)
        // The same const numCorrecto2 = this.letraNIF[resto];
        

        return this.letra === numCorrecto;

        
    }
}

let nif = new NIF(2255667, "B")
console.log("DNI:", "\nNº NIF: ", nif.numero, "\nLetra: ", nif.letra, "\nEs: ", nif.esCorrecto())

let nif2 = new NIF(1489562, "J")
console.log("DNI: ", "\nNº ", nif2.numero, "\nLetra: ", nif2.letra, "\nEs: ", nif2.esCorrecto())

let nif3 = new NIF(1156987, "A")
console.log("DNI: ", "\nNº ", nif3.numero, "\nLetra: ", nif3.letra, "\nEs: ", nif3.esCorrecto())

let nif4 = new NIF(3569874, "P")
console.log("DNI: ", "\nNº ", nif4.numero, "\nLetra: ", nif4.letra, "\nEs: ", nif4.esCorrecto())