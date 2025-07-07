const MESES_POR_ANIO = 12;
let nombre = prompt("Ingresa tu nombre:");
var entradaEdad = prompt("Ingresa tu edad:");
let entradaPeso = prompt("Ingresa tu peso en kilogramos:");
let edad = parseInt(entradaEdad);
let peso = parseFloat(entradaPeso);
let edadEnMeses = edad * MESES_POR_ANIO;
var pesoEnGramos = peso * 1000;
let nombreVacio = (nombre === "");
let edadPar = (edad % 2 === 0);
let validacion = nombreVacio || edadPar;

console.log("Nombre:", nombre);
console.log("Edad en meses:", edadEnMeses);
console.log("Peso en gramos:", pesoEnGramos);
console.log("¿Nombre vacío?:", nombreVacio);
console.log("¿Edad par?:", edadPar);
console.log("Resultado de la combinación lógica (||):", validacion);