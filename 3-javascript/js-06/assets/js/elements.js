//crear elemento

const imagen = document.createElement('img')
//console.log(imagen);
//modificar atributos html del elemento
imagen.src = 'https://placeimg.com/200/200/animals'
imagen.alt = 'Imagenes aleatorias de animales'





//lo insertamos en un elemento padre
document.body.appendChild(imagen);
document.body.insertAdjacentElement("afterbegin", imagen)



//utilizar forEach para pintar datos

const frutas = ["Toronjas", "Manzana", "Granada", "Melon", "Limon", "Kiwi"]

const listasFrutas = document.getElementById('frutas')

/* frutas.forEach((element) => {
 // console.log(element);
  const li = document.createElement('li')
  li.textContent = element
  listasFrutas.appendChild(li)
  
}) */

//forma2

frutas.forEach((el) => {
  listasFrutas.innerHTML += `<li>${el}</li>  `;

})