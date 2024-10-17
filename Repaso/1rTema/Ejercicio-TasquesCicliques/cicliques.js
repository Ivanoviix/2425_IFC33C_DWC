const familia_Galmes = {
    miembros: ["Padre", "Madre", "Hijo", "Hija"],
    tareas: ["Poner la lavadora", "Limpiar la cocina", "Limpiar el baño"],
    semanas: 52
}

const familia_Duran = {
    miembros: ["Padre", "Madre", "Hijo", "Hija"],
    tareas: ["Planchar", "Limpiar el baño"],
    semanas: 4
}

const familia_Sastre = {
    miembros: ["Padre", "Madre", "Hija", "Hija grande", "Hija pequeña"],
    tareas: ["Poner la lavadora", "Limpiar la cocina", "Limpiar la casa", "Planchar", "Limpiar el baño"],
    semanas: 12
}

function repartirTareas(familia) {
    let numeroTareas = familia.tareas.length;

    for (let semana = 1; semana <= familia.semanas; semana++) {
        let indexSemanas = "Semana: " + semana + ":";
        let tareaSemana = "";

        for (let tarea = 0; tarea < numeroTareas; tarea++){
            let indiceTareas = (tarea + semana) % numeroTareas;
            let indexTareas = familia.tareas[indiceTareas] + " " + familia.miembros[indiceTareas];
            tareaSemana += indexTareas + " | "
        }
        console.log(indexSemanas, tareaSemana.slice(0, -3))
    }
}
console.log("TAREAS ANUALES")
repartirTareas(familia_Galmes);
console.log("TAREAS MENSUALES")
repartirTareas(familia_Duran);
console.log("TAREAS TRIMESTRALES")
repartirTareas(familia_Sastre);
