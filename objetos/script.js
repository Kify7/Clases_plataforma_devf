// OBJECTS

/* ¿Qué es?
Un objeto es una colección de propiedades, y una propiedad es una a
sociación entre un nombre y un valor. Un valor de propiedad 
puede ser una función, la cual es conocida entonces como un 
método del objeto. En JavaScript, casi todo es un objeto.


Objetos literales
Podemos crear un objeto en Javascript asignando un valor
 literal de objeto en una variable. Eso se consigue colocando
  dicho literal entre llaves y dentro de ellas tantas propiedades 
  o métodos con pares clave: valor, por medio de una sintaxis como esta */

  const dimensiones = {
      altura: 34,
      anchura : 455
  }
  console.log(dimensiones.altura);

// Objetos (instancias)
// Haciendo uso de las clases de JavaScript, obtenemos una sintaxis mucho más clara y simple para 
// crear objetos.

// Para la definición o declaración de una clase, es necesario el uso de la palabra reservada 
// class y un nombre para la clase .

// El cuerpo de una clase es la parte que se encuentra entre las llaves { }. Este es el lugar donde se definen los miembros de clase, como el constructor y los métodos .

class Poligono {
    constructor(base, alto){
        this.base = base;
        this.alto = alto;
    }
    getArea(){
        return(this.base * this.alto);
    }
};

const pi = 13.1459
class Circulo extends Poligono{
    constructor(base, alto, radio){
        super(base, alto);
        this.radio = radio;
    }
    getArea(){
        return (pi * this.radio^2)
    }
};

let circulo1 = new Circulo(4,5,6);
console.log(circulo1.alto);
console.log(circulo1.getArea());





