/* Para acceder al elemento de "hombre" */
var v1 = document.getElementById("hombre");
console.log("getElementById('hombre')", v1) // Accede al elemento Id = "hombre"

/* Para acceder desde el name:"sexo" */
var v2 = document.getElementsByName("sexo"); // Accede al elemento name = "sexo"
console.log("getElementsByName('sexo')", v2)

var V3 = document.getElementsByTagName("input") // 
console.log("getElementsByTagName('input')", V3)

var v3 = document.getElementsByTagName("body"); // Accede al elemento Tag = "body"
console.log("getElementsByTagName('body') v3", v3) // Accede al elemento Tag = "body" { 0: body, length: 1 }
console.log("getElementsByTagName('body') v3[0]", v3[0]) // Accede al elemento Tag = "body" <body>
console.log("getElementsByTagName('body') v3[0].childNodes", v3[0].childNodes) // Accede a los nodos hijos del body
console.log("getElementsByTagName('body') v3[0].children", v3[0].children) // Accede a los hijos del body
console.log("getElementsByTagName('body') v3[0].parentElement ", v3[0].parentElement) // Accede al padre del body
console.log("getElementsByTagName('body') v3[0].children[0].nextElementSibling", v3[0].children[0].nextElementSibling) // Accede al siguiente elemento del body

var v4 = document.getElementsByClassName("sexo");
console.log('document.getElementsByClassName("sexo")', v4) // Accede al elemento Class = "sexo"

var v5 = document.getElementById("sexo");
console.log('document.getElementById("sexo") ESTA MAL:' ,v5) // No existe el id "sexo"

var v6 = document.getRootNode();
console.log('document.getRootNode()', v6) // Saca todo el html en consola