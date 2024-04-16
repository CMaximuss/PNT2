//const edad = 20;
//const msj = (edad>=18) ? "eres mayor" : "eres Menor";
//console.log (msj);

//for (var i = 0; i < 5; i++) {  
  //  console.log("El valor de i es : " + i);
//}

/*
var dia =2;
switch (dia) {
    case 1:
        console.log("lunes");
        break;
    case 2:
        console.log("martes");
        break;
    default:
        console.log("otro dia");
}
*/

/*
var i = 1;
while (i <= 5) { 
    console.log("El valor es : " + i);
    i++;
}
*/

/*
let numeros =[1,2,3,4];
for (var i = 0; i < numeros.length; i++) {
    console.log("numero " + numeros[i]);

}
*/

/*
var mes = new Date().getMonth();
switch (mes) {
    case 0:
        console.log("Enero");
        break;
    case 1:
        console.log("Febrero");
        break;
    case 2:
        console.log("Marzo");
        break;
    case 3:
        console.log("Abril");
        break;
    case 4:
        console.log("Mayo");
        break;
    default:
        console.log("otro mes");
}
*/

/*
function esPar(numero) {
    return numero % 2 === 0;
    
}

console.log(esPar(4));
console.log(esPar(5));

const otroPar = (num) => {
    return num % 2 ===0;
}

console.log(otroPar(6));
console.log(otroPar(9));
*/

function suma(numero1 , numero2) {
    return numero1 + numero2;
}

function resta(numero1 , numero2) {
    return numero1 - numero2;
}

function multi(numero1 , numero2) {
    return numero1 * numero2;
}

function div(numero1 , numero2) {

    if(numero2 === 0) {
        console.log("No se puede dividir por cero.");
        return null;
      }
      return numero1 / numero2;
    
  
}

console.log("Suma " + suma(4,5));
console.log("Resta " + resta(2,1));
console.log("Multiplicacion " + multi(8,9));
console.log("Division " + div(2,0));
console.log("Division " + div(2,2));