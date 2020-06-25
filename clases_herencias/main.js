
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
