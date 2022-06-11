/* eslint-disable no-undef */

//Variables: 
const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')
const max = new Date().getFullYear()  //Devuelve el año actual
const min = max - 10  //Año actual - 10
const resultado = document.querySelector('#resultado')  //Contenedor para los resultados


//Genera un objeto con la búsqueda:
const datosBusqueda = {
  marca: '',
  year: '',
  puertas: '',
  transmision: '',
  minimo: '',
  maximo: '',
  color: '',
}

//Eventos
document.addEventListener('DOMContentLoaded', () => {
  mostrarAutos()
  llenarSelect()
})

//Listeners para los select de la búsqueda:

//?) Forma 1:
marca.addEventListener('change', e => {
  datosBusqueda.marca = e.target.value
})

year.addEventListener('change', e => {
  datosBusqueda.year = e.target.value
})

minimo.addEventListener('change', e => {
  datosBusqueda.minimo = e.target.value
})

maximo.addEventListener('change', e => {
  datosBusqueda.maximo = e.target.value
})

puertas.addEventListener('change', e => {
  datosBusqueda.puertas = e.target.value
})

transmision.addEventListener('change', e => {
  datosBusqueda.transmision = e.target.value
})

color.addEventListener('change', e => {
  datosBusqueda.color = e.target.value
  console.log(datosBusqueda)
})


//Funciones:
const mostrarAutos = () => {
  autos.forEach(auto => {
    const { marca, modelo, year, puertas, transmision, precio, color } = auto
    const autoHTML = document.createElement('p')
    autoHTML.textContent = `
      Marca: ${marca} - Modelo: ${modelo} - Año: ${year} - 
      Puertas: ${puertas} - Transmisión: ${transmision} - 
      Precio: ${precio} - Color: ${color}
      
    `
    resultado.appendChild(autoHTML)
  })
}

//Generar los años del select:
const llenarSelect = () => {
  for (let i = max; i >= min; i--) {
    const opcion = document.createElement('option')
    opcion.value = i
    opcion.textContent = i
    year.appendChild(opcion)  //Agrega las opciones al select

  }
}