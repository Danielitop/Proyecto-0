const DIAS_ANO = 365;
var nombre = prompt("Ingrese su nombre")
let  edad = prompt("Ingrese su edad")
let  edad1 = parseFloat(edad);


let mesesNulo = null;


let escorto = nombre.length;



if (escorto < 5){
console.log("Tu nombre es corto", escorto)
}else {

console.log("", mesesNulo);



}


console.log("Tu nombre es", nombre);
console.log("Tu edad en dias es" , edad1*DIAS_ANO );


