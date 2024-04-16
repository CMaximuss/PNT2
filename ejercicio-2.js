


function devolverPares(numeros){
    
    let pares =[];

    for (let i = 0; i < numeros.length; i++) {
        const numero = numeros[i];
        
        if (numero % 2 === 0 ){
            pares.push(numero);
        }

    }

    return  pares;
    
}

const numeros = [1,2,3,4,5,6,7,8,9,10]

const pares = devolverPares(numeros)

console.log(pares);



