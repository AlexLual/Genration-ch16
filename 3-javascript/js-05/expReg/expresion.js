//let texto = "hoy parece que va a salir el sol"
//let buscar = /sol/;
/* let texto01 = "la espero en el aeropuerto de la" */
//let texto02 = "te marque anoche"
//let texto04 = "o =4.567";
//let texto05 = "o =9"
//let texto06 = "los numeros primos son 2 3 5 7 dentro de los primeros 10 numeros"
let texto07 = "usuario@servidor"



let buscar07 = /[\w]+@{1}[\w]+ \ [a-z]{2,3}/;
//let buscar02 = /[eo]/;
//let buscar03 = /[aeiou]/;
//let buscar04 = /[1-5]/;
//let buscar05 = /\d{3}/;



console.log(buscar07.test(texto07));
//console.log(buscar.test(texto));
/* console.log(buscar01.test(texto01));
 *///console.log(buscar02.test(texto02));
//console.log(buscar03.test(texto04));
//console.log(buscar04.test(texto05));
//console.log(buscar05.test(texto06));