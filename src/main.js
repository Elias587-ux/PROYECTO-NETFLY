import './style.css'

console.warn('// ! Callbacks');
// Una funcion que se pasa como argumento a otra funcion

const texto1 = () => {
  console.log('Soy el texto 1');
}
console.log(texto1); //Mostramos la referencia de la funcion
texto1() // Ejecutamos , incovando , llamado a la funcion
const prueba = (callbacks) =>{
  console.log(callbacks);  // La referencia de la funcion texto1
  console.log('otra cosa');
  console.log('-----');
  console.log('-----');
  console.log('otra cosa mas')
  callback()
}

//prueba(texto1)
console.warn('// ! Callbacks');