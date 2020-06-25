
// 1.3 Herencia
// ¿Qué es la herencia?
// La idea detrás de la herencia es que un objeto es una versión especializada de otro objeto.

// Existe una clase padre (también conocida como superclase) que define las propiedades básicas de nuestro objeto,
//  y existe una clase hija (subclase) que hereda las propiedades de la clase padre. 

// La herencia nos permite reutilizar código definiendo un objeto en términos de otro objeto.

// SuperClase
 class Shape {
     constructor(x, y) {
         this.xPosition = x;
         this.yPosition = y;
     }
    getArea(){

    };
 }

//  Subclase
class Circle extends Shape{
    constructor(x, y, radius){
        super(x, y);
        this.radius = radius;
    }
    getArea(){
        const pi = 3.14159;
        return pi * (this.radius)*(this.radius);
    }
}
// Instancia dela clase Circle que es Subclase (clase hija) de  la clase Shape.
let circle = new Circle(1, 2, 3);

console.log(circle.getArea());

// CONCEPTOS

// Clase padre o super clase:
// El concepto de herencia conduce a una estructura jerárquica de clases o estructura de árbol, 
// lo cual significa que en la Programación Orientada a Objetos todas las relaciones entre clases deben 
// ajustarse a dicha estructura.
// En esta estructura jerárquica, cada clase tiene sólo una clase padre. 
// La clase padre de cualquier clase es conocida como su superclase.


// Clase hija o subclase:
// En esta estructura jerárquica, la clase hija de una superclase es llamada una subclase.

// Método super()
// La palabra clave super es usada para acceder y llamar funciones del padre de un objeto.

// Sustitución Liskov
// El principio de sustitución de Liskov nos dice que si en alguna parte de nuestro código estamos usando una clase, y esta clase es extendida, debe ser posible utilizar cualquiera de las clases hijas y que el programa siga siendo válido.

// Esto nos obliga a asegurarnos de que cuando extendemos una clase no estamos alterando el comportamiento del padre.