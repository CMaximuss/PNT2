let numeros = [1,2,3,4,5];

for(let i = 0; i <numeros.length; i++){
    console.log(numeros[i]);
}


let frutas = ['Manzana','Kiwi','Pera']

for (let i= 0; i < frutas.length; i++){
    console.log(frutas[i] + ' | ');

}


frutas.forEach(fruta=> console.log(fruta));

for (let fruta of frutas){
    console.log(fruta + '-')
}

let frutasMayus = frutas.map((fruta) => {
    return fruta.toUpperCase();

    console.log(frutasMayus);
})

