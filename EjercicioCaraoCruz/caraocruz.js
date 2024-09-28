const cara = 1;

var formula = Math.floor(Math.random() * 2 + 1); 
console.log(formula)

function ventanaPopup(){
    var formula = Math.floor(Math.random() * 2 + 1); 

    if (formula == cara) {
        alert("CARA! HAS GANADO!");
    } else {
        alert("CRUZ! HAS PERDIDO!");
    }
}


