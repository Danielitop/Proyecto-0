
let textoUsuario = prompt("Escribe un texto:");
const SALUDO = "¡Tu texto es: ";
var textoCompleto = SALUDO + textoUsuario;
let esTextoLargo = textoUsuario.length > 10;
var negacion = !esTextoLargo;
var valorNulo = null;

console.log("Texto completo:", textoCompleto);
console.log("¿El texto es largo (>10)?", esTextoLargo);
console.log("Negación del resultado:", negacion);
console.log("Valor nulo:", valorNulo);