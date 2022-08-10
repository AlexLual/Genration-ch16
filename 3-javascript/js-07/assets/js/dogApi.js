

//URLs para consumir 
const urlAleatorios = "https://dog.ceo/api/breeds/image/random"


//elementos del Dom
const imagenPerrito = document.getElementById("img-perrito")
const btn = document.getElementById("btn-perrito")
console.log(btn);

//evento 
btn.addEventListener("click", () => {
  console.log("Boton presionado");
//Agregar funcionalidad
  obtenerPerritoAleatorio(urlAleatorios)
})  


//funcion
async function obtenerPerritoAleatorio(url){
  
  const respuesta = await fetch(url)
  const datos = await respuesta.json()
console.log(datos);
  console.log(datos.message);
  console.log(datos.status);
imagenPerrito.src = datos.message;

}

 obtenerPerritoAleatorio(urlAleatorios)