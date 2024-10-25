class Familia {
    constructor(membres, tasques, setmanes) {
        this.membres = membres;
        this.tasques = tasques; 
        this.setmanes = setmanes; 
    }

    planificarTasques() {
        let tareasSemanales = [];
        let arraydetareas = []
        let tareaActual;
        let miembros = this.membres;
        let tareas = this.tareas;
        for (let x = 0; x < this.setmanes.length; x++) {
            tareasSemanales = []
            for (let y = 0; y < this.miembros.length; y++) {
                tareaActual = (x + y) % tareas;
                
                tareasSemanales.push("Miembros" + this.miembros[x] + " : " + this.tasques[tareaActual])
            }
            arraydetareas.push("Semanas" + x + ":" + tareasSemanales.join(" "))
        }    
        for (let x = 0; x < arraydetareas.length; x++) {
            console.log(arraydetareas[x]);
        }
    }
}


let familiaGalmés = new Familia(
    ["Pare", "Mare", "Fill", "Filla"],
    ["Posar rentadora", "Fer cuina neta", "Fer bany net"],
    52 
);

let familiaDuran = new Familia(
    ["Pare", "Mare", "Fill", "Filla"],
    ["Planxar", "Fer bany net"],
    4
);

let familiaSastre = new Familia(
    ["Pare", "Mare", "Fill", "Filla gran", "Filla petita"],
    ["Posar rentadora", "Fer cuina neta", "Netejar la casa", "Planxar", "Fer bany net"],
    12 
);


console.log("Planificació anual per a la família Galmés:");
familiaGalmés.planificarTasques();

console.log("\n\nPlanificació mensual per a la família Duran:");
familiaDuran.planificarTasques();

console.log("\n\nPlanificació trimestral per a la família Sastre:");
familiaSastre.planificarTasques();


