// arreglos
// colecion de elementos
//cada elemento ocupa una posicion
//esa posicion se conoce como indice y comienza a partir de a

/* let arr = [1, 2, 3, 4];
console.log(arr); */

// Propiedades - describen
//metodos - acciones que pueede realizar
/* console.log(arr[2]); */

/* agregar elemento */
/* arr[4] = 190;
arr[5] = "Hola";
console.log(); */

/* Metodos de arreglos */
const arreglo = ["adios"];

//push() al final

arreglo.push(2);
arreglo.push(true);
let num = 500;
arreglo.push(num);

console.log(arreglo);

/* unshift agrega elementos al inicio */

arreglo.unshift("A");
arreglo.unshift("B");
console.log(arreglo);

/* typeof  determina que es */
console.log(typeof arreglo[4]);
/* metodos para quitar elementos */
/* pop quita elemento de al final */

let dato1 = arreglo.pop();
console.log(dato1);
console.log(arreglo);

//shift()
//quita elemento del inicio del arreglo

let dato2 = arreglo.shift();
console.log(dato2);
console.log(arreglo);

//splice
/* quitar una parte de determinado lugar */
//permite reemplazar elemento
//permite insertar un elemento en una posicion en especifico

arreglo.splice(1, 1, "palabralarga", 151515);

//posicion de inicio (1,x,x,x)
// cantidad a quitar(x, 1, x, x)
//Elemento a insertar(x, x, "palabralarga"151515)

//modifican el arreglo original
//Metodos que no modifican el aarreglo original hacen una copia o modifican esa copia

//slice(
  //cortar partes de un arreglo
  //debemos indicar un rango
  //genera un arreglo con los elementos cortados
  let dato3 = arreglo.slice(0, 2)
  console.log(dato3);
console.log(arreglo);