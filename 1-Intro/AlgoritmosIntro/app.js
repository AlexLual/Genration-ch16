//alert("Hola mundo 246"); comentario de una linea
/*
comentario 
de 
bloque

*/
//variables
let miVariable = "Alejandro";

console.log(miVariable);

miNumber = 28;

const apellido = "Hernandez";
console.log(apellido);
//console.log(miVariable);

//datos primitivos que maneja JS

//string    cadena de texto
//"texto"  ´texto´ ¨

let variableCadena = "texto mas texto";
console.log(variableCadena);

//Number  numero
//1235465

let variableNumber = 3456;
variableNumber = variableNumber + 5;
console.log(variableNumber);

//concatenacion
//unir dos textos
// unir texto y numero
let a = 1;
let b = "1";
let c = 2;
let d = "2";
console.log(a + b);
console.log(a + c);
console.log(b + d);

//Boolean  booleano
// dato logico
// true o false

let verdadero = true;

let falso = false;

console.log(verdadero, false);

//null  dato asignado a ningun valor, nulo

let varNull = null;
console.log(varNull);

/*undefined valor indefinido sin valor
variable declarada sin asignarle un valor, sera
variable undefined
es un estado*/
let variable;
console.log(variable);
console.log(variable + 1);

//typeof

let num1 = 159;
console.log(typeof num1);

let varBool = true;
console.log(typeof varBool);

console.log(typeof 1456);

console.log(typeof null);
console.log("Mi nombre es", miVariable, apellido);
//console.log("Mi nombre es" + miVariable);
console.log("Mi numero es", miNumber);
let varMascota = "si";
console.log("Tengo Mascota", varMascota);
