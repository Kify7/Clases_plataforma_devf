// VARIABLES
// Variable lobal
var respuesta = 42;
// Variable local
let mensaje ="Hola Mundo";
// Constante
const pi = 3.14159;

// Tipos de datos

// Boolean
const estoyVivo = true;

// Number
const numero = 365;

// String
const dojo = "DEVF";

// Null
const articulos = null;
console.log(estoyVivo);
console.log(numero);
console.log(dojo);
console.log(articulos);

// Undifined: variabes que solo han sido declras pero no definidas, o
// argumentos vacíos


// OBJECTS
const producto = {
    nombre: 'jabón zote',
    precio: 19.90
};

// OBJECTS LISTA
console.log(typeof product);
const listaFrutas = [
    'Naranja',
    'Pera',
    'Sandía',
    'Plátano',
];
console.log(typeof listaFrutas);

// OPERADORES LÓGICOS: retornn un boolean a partir de que s ecumpla o no la condición:
console.log("Operador '==': ", 2 == 2 ) // Verifica que el valor sea el mismo 
console.log("Operador '!=': ", 2 != 4)  // Verifica que el valor sea diferente
console.log ("Operador '>': ", 5 > 1)   // Verifica si el valor es mayor que
console.log("Operador '>='", 5 >= 5)     // Verifica si el valor es mayor o igual
console.log("Operador '<' ", 3 < 7)     // Verifica si el valor es menor
console.log("Operador '<=' ", 9 <= 9 )  // Verifica si el valor es  menor o igual

// Listas
// La lista nos permite almacenar datos de forma ordenada, al igual que los vectores pero, a diferencia de estos, esta estructura es dinámica, por lo que no tenemos que saber "a priori" los elementos que puede contener.

const otraListaFrutas = ['Naranja', 'Pera','Platano']; 


// Estructuras de control
// Las estructuras de control nos permiten controlar el flujo del programa: tomar decisiones, repetir acciones, etc.

// Todo de acuerdo a las condiciones que nosotros mismos establezcamos.

// IF ELSE
const edad = 12;

if(edad >= 18) {
    console.log('eres mayor de edad');
} else {
    console.log('no eres mayor de edad');
}
// FOR
for(let i=0; i<10; i++){
    console.log('el índice va en: ', i);
}

console.log('ha concluido el ciclo for');

// FUNCIONES:
// Es una sección de código reutilizable que realiza una tarea específica, 
// y que puede ser llamada desde otra función.
 function sumar(a,b) {
     return(a + b);
 }

//  ARROW FUNCTIONS ES6:
const restar = (a,b) => (a + b);
 
console.log(sumar(10, 5));
console.log(restar(15, 17));

