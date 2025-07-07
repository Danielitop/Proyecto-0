
var ancho = prompt("Introduce el ancho del rectángulo:");
ancho = parseFloat(ancho); 


let alto = prompt("Introduce el alto del rectángulo:");
alto = parseFloat(alto); 


let area = ancho * alto;


const AREA_LIMITE = 50;


let esAreaGrande = area > AREA_LIMITE;


var sinDefinir;


console.log("Área del rectángulo:", area);
console.log("¿Es el área mayor a 50?", esAreaGrande);
console.log("Valor de la variable sin definir:", sinDefinir);