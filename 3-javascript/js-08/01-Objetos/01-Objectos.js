/* let x = 10;
console.log(x - length); */


let persona = {
  nombre: "Pepe",
  apellido:"Perez",
  edad: 28,
  correo: "alexmvz902015@gmail.com",
  //nombreCompleto: function() {
 /*    return this.nombre + " " + this.apellido;
  } */
  idioma: "es",
  get leng() {
    return this.idioma.toUpperCase()

  },  
  set leng(lang) {
  this.idioma =lang.toLowerCase

}
}
console.log(persona.leng);
persona.lang = "ES"
console.log(persona.leng);
console.log(persona.idioma);

persona.tel = "5617068191"
persona.te1 = "55189825644"


console.log(persona);
console.log(persona.nombre);
console.log(persona.nombreCompleto);

// for in
for (varPropiedad in persona) {
  
  console.log(persona[varPropiedad])
} 
let personaString = JSON.stringify(persona);
console.log(personaString);












/* let Personas = new Object()
Personas.nombre = "ramiro"
Personas.apellido= "ramirez"
Personas.edad = 30
Personas.correo = "ass@gmail.com"

console.log(Personas.nombre);
console.log(Personas.apellido);
console.log(Personas.edad);
console.log(Personas.correo); */