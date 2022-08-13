// URL a consumir:

const urlPokemon = "https://pokeapi.co/api/v2/pokemon/";

// Elementos del DOM:

const imgPokemon = document.getElementById("img-pokemon");

const idPokemon = document.getElementById("id-pokemon");

const nombrePokemon = document.getElementById("nombre-pokemon");

const listaHabilidades = document.getElementById("lista-habilidades");

const listaTipos = document.getElementById("tipos")

const formulario = document.getElementById("buscar-pokemon");

//Evento
formulario.addEventListener("submit", (e) => {
  e.preventDefault()

  const inputPokemon = document.getElementById("busqueda-pokemon");
  console.log(inputPokemon.value);
const nuevaBusqueda = urlPokemon + inputPokemon.value
console.log(nuevaBusqueda);
  
  obtenerPokemon(nuevaBusqueda);


})

//Funciones:
async function obtenerPokemon(url) {
 try{
  const respuesta = await fetch(url);
  const datos = await respuesta.json();
  const pokemon = {
    nombre: datos.forms[0].name,
    habilidad: datos.abilities,
    id: datos.id,
    tipos: datos.types,
    imagen: datos.sprites.other["official-artwork"].front_default,
  };
  //imagen
  imgPokemon.src = pokemon.imagen;
  idPokemon.textContent = `ID: ${pokemon.id}`; //CONCATENAMOS EL VALOR JALADO CON EL ID:
  nombrePokemon.textContent = pokemon.nombre;


  //Habilidades
  let template = ``

  for (let i = 0; i < pokemon.habilidad.length; i++) {
    const nombreHabilidad = pokemon.habilidad[i].ability.name;


    template = `<li class="list-group-item"> ${nombreHabilidad} </li>`;
    
  }

  listaHabilidades.innerHTML = template
  //Tipos

  let templeTipos = ""
 
  pokemon.tipos.forEach((tipo) => {
    const nombreTipo = tipo.type.name;
    
    templeTipos = `<li class="list-group-item">${nombreTipo}</li>`;
  })
  
  listaTipos.innerHTML = templeTipos
} catch (e) {
  
  alert("Pokemon no Descubierto... aun ")
}
}