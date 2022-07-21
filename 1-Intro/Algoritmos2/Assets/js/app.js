/*Arreglos
let num = [];
console.log(num);
// Arreglo 2nd forma
let arr1 = new Array();
console.log(arr1);
// Usar un arreglo

const arr = [1, 2, 3, 4, 5];
console.log(arr);
//notacion de cochertes[]
console.log(arr[3]);

arr[5] = 25;
arr[6] = 8;
arr[6] = 0;
arr[10] = 40;

console.log(arr);

//porpiedades de los arreglos
//Descripcion de nuestro arrelo
console.log(arr, length);*/

//metodos- Acciones que puede realizar un arreglo
const frutas = ["Manzanas", "Platano"];
console.log(frutas);
//push -agrega un valor final al arreglo
let fruta = "Toronja";

frutas.push("Naranja");
frutas.push(fruta);

console.log(frutas);
//Metodo Pop-- quita elemento al final del arreglo
let elementoborrado = frutas.pop();
frutas.pop();
console.log(frutas);
console.log(elementoborrado);

//Metodo unshift agrega elemento al inicio de arrreglo
let devolver = frutas.unshift("Uva", "Pera");
frutas.unshift("Uva", "Pera");
console.log(frutas);
console.log(devolver);
//shift  elimina un elemento al inicio del arreglo
frutas.shift();

let frutaquitada = frutas.shift();

console.log(frutas);
console.log(frutaquitada);
