/* class Persona{
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
} */

class Persona {
  constructor(_nombre, apellido) {
    this.nombre = nombre;
    this._apellido = apellido;
  }
    get nombre(){
    return this._nombre;  
  }
  set _nombre(nombre) {
  
}

}



let persona1 = new Persona('Jose', 'Perez')
console.log(persona1);
let persona2 = new Persona("Ana", "Pimienta")
console.log(persona2);