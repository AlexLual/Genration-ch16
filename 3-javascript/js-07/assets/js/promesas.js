//variable que simula pedidos

const saludo = "Hola mundo"
const datos = [
  {
    nombre: "Jonathan",
    apellido: "Vazquez"
  }, 
  {
    nombre: "Jonathan",
    apellido: "Vazquez"
  },  
  {
    nombre: "Jonathan",
    apellido: "Vazquez"
}
]

function obtenerDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      if (true) {
 
        resolve(datos)     
      
      } else {
        reject("Nunca te quiso")
      }

    
  }, 2000)
})


}


// Forma #1
obtenerDatos().then((datos) => {
  
  console.log(datos);
}).catch((error) => {
  console.log("Existe un error en la peticion");
  console.log(error);

})

//Forma #2 funciones asincronas

async function funcionAsincrona() {
  try {
    const datos = await obtenerDatos()
  
    console.log(datos);

  } catch (error) {
    console.log(error);
  }
}
funcionAsincrona()