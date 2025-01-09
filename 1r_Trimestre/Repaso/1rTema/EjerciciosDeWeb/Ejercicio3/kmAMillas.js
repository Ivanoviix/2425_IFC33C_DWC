let kms = 64

function conversion(kms) {
    let conversion = 0.621371;

    console.log("Km a convertir: " + kms);
    conversion_a_millas = kms * conversion;

    conversion_a_millas = parseFloat(conversion_a_millas.toFixed(2));

    console.log("Km:", kms, "convertidos a Millas:", conversion_a_millas);

}

console.log(conversion(kms));
