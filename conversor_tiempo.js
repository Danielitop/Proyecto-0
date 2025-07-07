
var horas = prompt("Introduce una cantidad de horas:");
horas = parseFloat(horas); 


const MINUTOS_POR_HORA = 60;
const SEGUNDOS_POR_MINUTO = 60;

let minutos = horas * MINUTOS_POR_HORA;

var segundos = minutos * SEGUNDOS_POR_MINUTO;


let esMayorAUnaHora = horas > 1;


console.log("Minutos:", minutos);
console.log("Segundos:", segundos);
console.log("¿Es mayor a 1 hora?", esMayorAUnaHora);
