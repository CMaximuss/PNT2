//Ejercicios Clase '2'

console.log('Ejercicio Numeros')

let numeros = [1,2,3,4,5,6];

console.log('Array principal')

numeros.forEach(numero => console.log(numero ))

numeros.push(7);

console.log('Agregando un numero')

numeros.forEach(numero => console.log(numero ));

numeros.pop();

console.log('Sacando un un numero')

numeros.forEach(numero => console.log(numero));

console.log('***************')

console.log('Ejercicio Objetos')

let persona = {
    nombre : 'Romina',
    edad : '34',
    ocupacion : 'Analista'

}
console.log ('El nombre del a presona es : ' + persona.nombre)

console.log('***************')

console.log('function')

function sumar(num1, num2)
{
    return num1+num2
}

console.log(sumar(4,6));

const resultado = (num1, num2) => num1 + num2;
console.log(resultado(7,6));

console.log('***************')

console.log('Array final')

let encontrado = numeros.find(numero => numero > 3)
console.log(encontrado);

let mayoresAdos = numeros.filter((numero) => numero > 2);
console.log(mayoresAdos);

let duplicados = numeros.map((numero) => numero * numero);
console.log(duplicados);