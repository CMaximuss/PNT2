let numero = 17

if (numero === "17"){
    console.log("igual");

}else {
    console.log("distinto");
}

let persona ={
    nombre: "Cesar",
    edad: 18,
    perdmitido:false
}

if(persona.edad >= 18){
    persona.perdmitido = true
} else {
    persona.error = "No permitido"
}

console.log(persona)