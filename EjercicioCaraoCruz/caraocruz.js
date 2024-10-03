const cara = 1;
const cruz = 2

function ventanaPopup(){
    var coinImage = document.getElementById("coinImage");
    var formula = Math.floor(Math.random() * (cruz - cara + 1)) + cara; 
    setTimeout(() => coinImage.src = "./Images/questionMark.png", 200);

    if (formula == cara) {
        coinImage.src = "./Images/cara.png";
        setTimeout(()=> alert("CARA! HAS GANADO!"), 200);
    } else {
        coinImage.src = "./Images/cruz.png";
        setTimeout(() => alert("CRUZ! HAS PERDIDO!"), 200);
    }
}


