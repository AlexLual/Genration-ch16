const palindromo = require("../js/palindromo.js")

describe("Pruebas de la funcion palindromo", () => {
  test('Debe regresar "Es un palindromo"si ingresamos ojo', () => {
    let mensaje = 'Es un palindromo';
    let palabra = 'ojo'

    expect(palindromo(palabra)).toBe(mensaje);

  })
  
  test('No debe regresar "Es un palindromo"al ingresar generation', () => {
    let mensaje = 'No es un palindromo';
    let palabra = 'generation'
    
    expect(palindromo(palabra)).not.toBe(mensaje);
    
  })
  test('al ingresar un numero debe regresar el mensaje', () => {
    let mensaje = 'No es una palabra'
    let valor = 1;

})


})