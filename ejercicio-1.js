const alumnos = [
    {
        nombre: 'Matias',
        lastName: 'Duro',
        edad: 29
    },
    {
        nombre: 'Martin',
        lastName: 'Perez',
        edad: 22
    },
    {
        nombre: 'Lucia',
        lastName: 'Carmona',
        edad: 42
    },
    {
        nombre: 'Lucas',
        lastName: 'Gomez',
        edad: 51
    },
    {
        nombre: 'Manuel',
        lastName: 'Gomez',
        edad: 26
    }
]



function devolverMayorEdad(param){

    let alumnoADevolver;
    let edad = 0;

    
    for (let index = 0; index < param.length; index++) {
        const alumno = param[index];
        
        if (alumno.edad > edad){
            edad = alumno.edad;
            alumnoADevolver = alumno ;
        }
    }
       
    

    return alumnoADevolver
}



const alumno = devolverMayorEdad(alumnos)

console.log(alumno)

