"use stric"
/* Declara un array llamado carreritas con los siguiente valores: Lucia, Roberto, Maria, Jesus, Andrea y Jose (este será el orden de sus posiciones dentro de una carrera).
Deberás imprimir en consola la clasificación actual.

La carrera continua y se van modificando esas posiciones:
Andrea adelanta a Maria
Jose es descalificado de la carrera
Detrás de Lucia y antes de Roberto se clasifican tres nuevo corredores: Cristobal, Fernanda y Armando
Hay un nuevo concursante que toma el primer puesto: Federico.
 */

Array = ["Lucia", "Roberto", "Maria", "Jesus", "Andrea", "Jose"]
let carreritas = Array
console.log(carreritas);
carreritas.splice(2,0, "Andrea")
carreritas.pop()
carreritas.pop()
newArray = ["Cristobal", "Fernanda", "Armando"]
let nuevos = newArray
carreritas.splice(1, 0, nuevos)
carreritas.unshift("Federico")
console.log(carreritas);



/* Otra manera de hacerlo */
/* Array = ["Lucia", "Roberto", "Maria", "Jesus", "Andrea", "Jose"];
let carreritas = Array;
console.log(Array);

carreritas.pop();
carreritas.shift("Lucia");
carreritas.unshift("Armando");
carreritas.unshift("Fernanda");
carreritas.unshift("Cristobal");
carreritas.unshift("Lucia");
carreritas.unshift("Federico");
carreritas.pop();
carreritas.splice(6, 0, "Andrea");
console.log(carreritas); */
