const METROS_X_KM = 1000
let kilometros = parseFloat(prompt("Introduce la distancia en kilometros"));
let metros = kilometros *  METROS_X_KM
let centimetros = metros * 100
var esmenoraunkm = kilometros < 1
var valornulo = null;
console.log("Distancia en metros", metros)
console.log("Distancia en centimetros", centimetros)
console.log("¿La distancia es menor a un km?", esmenoraunkm)
console.log("Valor nulo", valornulo)