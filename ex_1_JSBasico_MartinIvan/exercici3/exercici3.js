/**
 * Classifica una persona segons la seva edat.
 * @param {number} edat - L'edat de la persona.
 * @returns {string} - La classificació de la persona.
 */
function classificarPerEdat(edat) {
    let classificacio;

    // AÑADIR EL CÓDIGO DEL PUNT 1 AQUÍ
    switch (true) {
        case edat < 0:
            classificacio = "Edat no vàlida";
            break;
        case edat >= 0 && edat <= 12:
            classificacio = "Nena/o";
            break;
        case edat >= 13 && edat <= 17:
            classificacio = "Adolescent";
            break;
        case edat >= 18 && edat <= 64:
            classificacio = "Adult";
            break;
        case edat >= 65:
            classificacio = "Persona gran";
            break;
        default:
            classificacio = "Edat no vàlida";
    }
    return classificacio;
}

// Array d'objectes que representen pacients
const pacients = [
    { nom: "Laura", edat: 5 },
    { nom: "Javier", edat: 15 },
    { nom: "Rosa", edat: 25 },
    { nom: "Antonio", edat: 70 },
    { nom: "Sofia", edat: -3 },
];

// Classificació i impressió de cada pacient
for (const pacient of pacients) {
    // AÑADIR EL CÓDIGO DEL PUNTO 2 AQUÍ
    const classificacio = classificarPerEdat(pacient.edat);
    console.log("A la pacient", pacient.nom, "(edat:", pacient.edat, "), la classificació es:", classificacio);
}