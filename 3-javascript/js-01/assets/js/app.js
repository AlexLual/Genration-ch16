"use strict";
/* 'use strict'; manera para que el js entienda que no sea permisivo */
/* alert("Tu puedes Alex") */
/* Tipos de datos */

/* tipos de variables */
/* let se usa de manera local y var de manera global, y constante es un valor fijo*/
let a;
const b = 0;
var c;

const PI = 3.1416;

/* scope espacio que existe entre una variable
 */

/* String */
let cadena = "Hola a todos";

/* js deja dclarar variables de esa manera pero no es recomendable */
d = 15;
/* console.log(d); */


/* Number */
let numero = 5;
let num = 5.89;

/* Boolean */

let booleano = true;
let booleano2 = false;

/* undefined */
let variable ;
/* console.log(variable+5); */
/* null */
let vacio = null
//tratar de realizar alguna operación aritmética con algún dato que no es un número

/* Plantillas literales
      template strings
      literal strings
      interpolación
*/
// console.log(`Esta es una cadena ${5 + 4}`);
// console.log("Esta es una cadena normal ${5+4}");

/* let nombre = 'Alex'; */

// let presentacion = ``;
/* console.log("Mi nombre es " + nombre);
console.log(`Yo me llamo ${nombre}`);


/* arrrays */
/* let arrrays = [1, 2, "A"[true, false]]
console.log(arrays[4][0]);

let arrrays2 = new arrrays["B", 2]
console.log(arrays2);
 */
/*objetos
clave/valor */

const persona = { 
      nombre: 'Raúl', 
      edad: 31,
      hobbies: [
            "Leer",
            "Ver Srek 1 y 2",
            "Comer"
      ],
      auto: {
            marca: "VW",
            modelo: "Pointer",
            year: 2000,
      },
      saludar: function (){
            return "saludar"
      }
};


persona.nombre = "Panchito";
/* Notacion de punto */

console.log(`Mi hobbie favorito es ${persona.hobbies¨[1]}`);

console.log(`La marca de mi carro es ${ persona.auto.marca }`);

console.log(`la accion que realizo es: $ { persona.saludar }`)