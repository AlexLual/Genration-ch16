"use strict"
let condicion = false; //asignacion
console.log("5" == 5);
console.log("5" === 5);


if (condicion === "A") {
  /* Codigo que se hace si se cumple la condicion A  */
console.log("Entro en la condicion A");
}
else if (condicion === "B") {
  /* Codigo que se hace si se cumple la condicion B  */
  console.log("Entro en la condicion B");
}
else if (condicion === "C") {
  /* Codigo que se hace si se cumple la condicion C  */
  console.log("Entro en la condicion C");
}

else {
  /* Codigo que se hace si no se cumple la condicion */

  console.log("No cumple con ninguna");
}

function dividir(a, b) {

  if (b === 0) {
console.log("No se puede realizar la operacion");
    
  } else {
    console.log(a / b);
  
  }
  
}
/* dividir(10, 2)
 */



/* switch estrutura de control, evaluan expresion*/
/* == o === regresa un true o false si la condicion se cumple */
let nuevaCondicion = 1;

switch (nuevaCondicion) {
  case "Hola":
    console.log("Buenos Dias");
    console.log("Espero que te encuentres bien");
    break
  case "Adios":
    console.log("Nos Vemos");
    break;
  case "Saludo":
    console.log("Te mando un saludo");
    break
  
  default:/* por defecto */
    console.log("No entendi tu mensaje");
  
}

/* Aparte */
let edad = 30;

switch (edad >= 18) {
  case true:
    console.log("mayor");
    break;
  case false:
    console.log("menor");
}


switch (elegir) {
  case "sumar":
    console.log("Vamos a sumar");
    break;

  case "Restar":
    console.log("Vamos a restar");
    break;

  case "multiplicar":
    console.log("Vamos a multiplicar");
    break;

  case "dividir":
    console.log("Vamos a dividir");
    break;

  default: console.log(
    "No entiendo");   
}
/* diferencia */

if(elegir === "sumar"){

    console.log("Vamos a sumar");

}else if(elegir == "restar"){

    console.log("Vamos a restar");

}else if(elegir == "dividir"){

    console.log("Vamos a dividir");

}else if(elegir == "multiplicar"){

    console.log("Vamos a multiplicar");

} else {

    console.log("No entiendo");

}
