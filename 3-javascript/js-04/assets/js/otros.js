/* //Otros metodos
//sort()
//ordenar los elementos de un arreglo

const arr = ["X", "A", "H", "a", "W", "b"]
arr.sort();

console.log(arr);

const arr2 = ["Hola", "adios", "bienvido", "Calle"]

arr2.sort();
console.log(arr2);

const arr3 = [5, 1231, 567, 1, 80];
//Mayor a menor
arr3.sort((a, b) => b - a);
//menor a mayor
arr3.sort((a, b) => a - b);
console.log(arr3);





/* Otras funciones */
//funcion declarada
//hoisting
///un proceso de reacomodo automatico del codigo

function sumar(a, b) {
  return a + b;
}
console.log(sumar(5, 7));


let a = 2;
console.log(a);
//hoisting no funciona
// funcion exxpresada
const multiplicar = function (a, b) {
  return a * b;
}
console.log(multplicar(3, 5));


//funcion flecha
//nuevas ,2015 creacion
//mas elegante
const dividir = (a, b) => {
  return a / b;
}

/ */console.log(dividir(10, 2));



//forEach
//un ciclo que recorre en automatico todo nuestro arreglo

const arrNumeros = [1, 4, 6, 8, 10, 20, 30]

/* /* for (let i=0; i< arrNumeros.length; i++){
  arrNumeros[i] = arrNumeros[i] * 2;
  console.log(arrNumeros);
   
} */



/* arrNumeros.forEach((elemento, index, arr) => console.log(elemento *= 2)
//elemento =elemento * 2
); */

