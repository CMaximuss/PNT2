function obtenerDatos() {
    return new Promise ((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then (response => response.json())
    .then(data => resolve(data))
    .catch(error => reject(error));
});
}

async function obtener () {
    try{
        const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
        const datos = await response.json();
        console.log("datos cargados", datos );

    } catch (error){
        console.error("Error al cargar los datos " , error);
    }

}
obtener();