
function mostrarURLActual() {
    return alert(window.location.href);
}



function actualizarEstado(accion) {
  /*   if (!history.state) {
        history.replaceState("{posicion: 0", "Inicio")
    } */
    
    // Comprueba el estado actual de la posición.
    let posicionActual = history.state.posicion; // posicion de history.state que state es "state: {posicion:0}"

    // Si accion es true, el estado actual será (num) - 1, si no, el estado actual sumará 1
    let  nuevaPosicion = accion === "atras" ? posicionActual - 1 : posicionActual + 1;
    // Aplicará el estado de la posicion con 'pushState', con un titulo de la posicion.
    history.pushState(`{posicion: ${nuevaPosicion}}`, `Posición ${nuevaPosicion}}`)

}
function irAtras() {
    let posicionActual = history.state.posicion;
    console.log(`posicion actual: ${posicionActual}, history.length: ${history.length}`);

    // Si la posición del state y la posición actual es mayor que 0, entonces llamamos la función para que actualize la posición y va hacia atrás.
    if (!history.state && posicionActual > 0) {
        actualizarEstado("atras")
        history.back();
    } else {
        alert("No hay más páginas hacia atrás.")
    }
}

function irAdelante() {
    let posicionActual = history.state.posicion;
    console.log(`posicion actual: ${posicionActual}, history.length: ${history.length}`);

    // Si la posicion actual es true con el último índice aplicará el estado "adelante" en la función actualizarEstado, sumará 1 a la posición del state.
    if (posicionActual === history.length - 1) {
        actualizarEstado("adelante")
        history.forward();
    } else {  // Si es false, saldrá el mensaje.
        alert("No hay más páginas hacia delante.")
    }
}




function mostrarInfoNavegador() {
    let mensajeInfo = (`Nombre del navegador: ${window.navigator.userAgent} 
                        \nIdioma del navegador: ${window.navigator.language}  
                        \nEstado del navegador: ${window.navigator.onLine}`)

    alert(mensajeInfo);
    
}


function preventDefault() {
  
}

let url;
function redirigirURL() {
    url = document.getElementById('urlInput').value;

    console.log(url);
    

    if (url) {
        try {
            window.location.assign(url);
        } catch {
            alert("URL invalida.")
        }
    } else {
        alert("Introduzca una url.")
    }
}


function abrirPopup() {
    pau = window.open('https://paucasesnovescifp.cat', "Ventana Popup","width=500px,height=500px");

    if (!pau) {
        alert("El navegador no permite la ventana emergente.")
    }
}


function cerrarPopup() {    
    
    if (pau && !pau.closed) {
        pau.close();
        alert("Ventana cerrada.")
    } else {
        alert("No hay ninguna ventana abierta.")
    }

}

// ------------------------------------------------------------------------------------------------------------------------
let ventana;
function abrirPopupv2() {
    let url = document.getElementById('urlInput').value;
    ventana = window.open(url, "Ventana Popup","width=500px,height=500px");

     if (!ventana) {
        alert("El navegador no permite la ventana emergente.")
    }

}

function cerrarPopupv2() {
     
    if (ventana && !ventana.closed) {
        ventana.close();
        alert("Ventana cerrada.")
    } else {
        alert("No hay ninguna ventana abierta.")
    } 

}






