//console.log(document. );


//getElementByid()

console.log(document.getElementById("parrafo1").textContent);

const parrafo1 = document.getElementById("parrafo1");

console.log(parrafo1.textContent);

parrafo1.textContent = "Hola Ale, trata de poner mas atencion🐱‍👤";

console.log(parrafo1.textContent);

console.log(parrafo1.style);

parrafo1.style.color = "red"

parrafo1.style.backgroundColor = "blue"


//querySelector
//etiquetas = p
///clase = .parrafo2
// id =#parrrafo1

const parrafo2 = document.querySelector(".parrafo2");
console.log(parrafo2.textContent);


/* parrafo2.textContent = "Eso Ale, si estas entendiendo😺" */

parrafo2.textContent += "Eso Ale, si estas entendiendo😺";
 
//\n-- imserta un salto de linea ===<br>

//querySelectorAll
const parrafos = document.querySelectorAll("p");
console.log(parrafos);

console.log(parrafos[2]);

parrafos[2].style.fontSize = "2rem"

//css - font-size
//js - fontSize- Lower camel case

//Modificar los atributos html

const enlace = document.getElementById("Enlace")
console.log(Enlace);
//se puede mostrar en la consola

Enlace.href = "https://www.youtube.com";

Enlace.target = "_blank"
Enlace.textContent = "Enlace a youtube🐱‍💻"


//Cambios

parrafos[2].style.color = "purple"
parrafos[2].style.background = "red"
parrafos[2].textContent = "Esto se vera, solo si he puesto atencion🐱‍👓"

parrafo2.style.color = "green"
parrafo2.style.background = "pink"


parrafos[3].style.color = "yellow"
parrafos[3].style.background = "black"
parrafos[3].style.fontSize = "2rem"
parrafos[3].style.fontFamily = "Algerian"

//Reemplazar contenido

const parrafo4 = document.getElementById("parrafo4")

console.log(parraffo4.nodeName);
console.log(parrafo4.textContent);
console.log(parrafo4.innerHTML);//muestra el html que haya en el interior dele el elemento
console.log(parrafo4.outerHTML);// muestra el contenido html incluyendo e elemento
//parrafo4.innerHTML = '<a href="http://google.com">Enlace</a>';

//parrafo4.outerHTML = '<div class = "elemento">Este es un div</div>';

console.log(parrafo4.classList.contains("elemento"));

//parrafo4.classList.add('elemento');

const cambiarColor = () => {
  parrafo4.classList.toggle('elemento');
}

cambiarColor()// Se cambia el color
cambiarColor()// Se quita la clase