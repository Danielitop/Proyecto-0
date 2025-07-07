
var entrada1 = prompt("Introduce el primer número:");
var entrada2 = prompt("Introduce el segundo número:");


let numero1 = parseFloat(entrada1);
let numero2 = parseFloat(entrada2);


var suma = numero1 + numero2;
let diferencia = numero1 - numero2;

const sonIguales = numero1 === numero2;

let combinacionLogica = sonIguales || false;

console.log("Suma:", suma);
console.log("Diferencia:", diferencia);
console.log("¿Son estrictamente iguales (===)?", sonIguales);
console.log("Resultado lógico (sonIguales || false):", combinacionLogica);
