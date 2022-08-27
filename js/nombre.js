
const guardar = () =>{
    console.log("ando dentro");
    const nombre = document.getElementById('nombre').value
    localStorage.setItem("nombre", nombre);
}


const carga = () =>{
    console.log("Hola que jue")
    const nombre = localStorage.getItem("nombre");
    document.getElementById('imprimirNombre').innerText = nombre
}

