const nombres = ["Ana", "Luis", "María", "Carlos", "Sofía"];

let li;
let body = document.querySelector('body');
let ul = document.createElement('ul');
body.appendChild(ul);

for (let x = 0; x < nombres.length; x++) {
    li = document.createElement('li');
    li.innerText = nombres[x];
    ul.appendChild(li);
}