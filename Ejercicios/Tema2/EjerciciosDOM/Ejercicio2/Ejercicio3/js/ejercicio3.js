const tareas = [
    {categoria : "Casa", tarea : "Limpiar" },
    {categoria : "Trabajo", tarea : "Reuniones" },
    {categoria : "Estudios", tarea : "Estudiar" },
]

function tareasAgrupadas(prompt) {
    let tareas = document.createElement('div');
    tareas.className = 'contenedor-tareas';

    for (x = 0; x < prompt.length; x++) {
        let tarea = prompt[x];
        let div = document.createElement('div');
        let li = document.createElement('li');
        let ul = document.createElement('ul');
        let h2 = document.createElement('h2');

        div.className = 'tareas';

        h2.textContent = tarea.categoria
        li.textContent = tarea.tarea;
        ul.appendChild(h2);
        ul.appendChild(li);
        div.appendChild(ul);
        tareas.appendChild(div);
    }
    document.body.appendChild(tareas);
}

tareasAgrupadas(tareas);