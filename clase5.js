//constructor
let cancion = prompt("Cómo se llama la cancion?");
let cantante = prompt("Cómo se llama el cantante de la cancion?");
let genero = prompt("Cual es el genero de la cancion?");

class Lectura{
  constructor (cancion, cantante, genero){
  this.cancion = cancion;
  this.cantante = cantante;
  this.genero = genero;
  }

  salida(){
    alert("Se agrego a tus lista " + this.cancion + " de " + this.cantante + ", del genero " + this.genero);
  }
}

const lectura1 = new Lectura( cancion , cantante, genero);
lectura1.salida();