
/* const palindromo = (palabra) => {
  let palabraInvertida = palabra.split("").reverse().join("")

  if (palabra === palabraInvertida) {
    return "Es un palindromo"
  } else {
    return"No es un palindromo"
  }
  
}
console.log("ojo");
 */

//Operador ternario


 const palindromo = (palabra) => {
  let palabraInvertida = palabra.split("").reverse().join("") 

  return palabra == palabraInvertida? "Es un palindromo" : "No es un palindromo" 
}
 //)condicion) ? verdadero : falso
//(condicion) ? if         : else

//console.log(palindromo("generation"));

module.exports = palindromo;