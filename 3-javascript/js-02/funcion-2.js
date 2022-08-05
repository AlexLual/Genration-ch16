"use strict"

/* function miFuncion(a, b) {

  return (a + b);
  
}
let resultado = miFuncion(3, 6);
console.log("El resultado es:" + resultado);

/* funcion o expresion anonima */

/* let suma = function (a, b) {
  return (a + b)};
let res = suma(2, 3);
console.log("La suma es :" + res);
 */


let restar = function (a, b) { return (a - b) };
let resultado= restar(50, 46);
console.log(" la resta es :" + resultado);

let mul= function (a, b) {
  return (a * b)
    
};
let multiplica= mul(13, 13);
console.log("La multiplicacion es :" + multiplica);

let div = function (a, b) { return (a / b) };

let divis = div(169, 13);
console.log("La division es :" + divis);

/* self invoking */
(function(a, b){console.log("El resuultado es :" +(a + b));})(3, 4)