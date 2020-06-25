// 1.4 Scope
// ¿Qué es?
// Cuando hablamos del Scope de una variable, nos referimos al alcance que tiene una variable respecto al sitio donde se está ejecutando.
// Veamos un ejemplo:

{
    const programa = 'Conta roja'
}

//console.log(programa);//undifined
// El resultado de mostrar en consola el contenido de programa es: undefined
// Sucede esto ya que la constante programa está definida dentro de un bloque de código, definido por las llaves. 

// Podemos observar un comportamiento similar en funciones:

function cinta() {
    const program = 'Cinta roja';
    console.log(program);
}
cinta();  // output esperado: Cinta roja
//console.log(program); // output esperado: undifined
// Dado que la constante programa está definida dentro del bloque de la función, programa solo puede ser accedido desde dentro del mismo bloque. 
// Es decir, es una variable local a la función cinta.

// Por el contrario, una variable global es aquella que puede ser llamada desde cualquier bloque de código.:

const color = 'rojo'

function cinturon(){
    console.log(color); //output rojo
    const prog = `Cinturon ${color}`;
    console.log(prog); // output cinturon rojo
}

cinturon(color); 
console.log(color);// output rojo
// Nos podemos dar cuenta que la constante fue accesible dentro y fuera de la función o bloque de código.

// Veamos un ejemplo de dos variables con el mismo nombre:

const beltColor = 'Red';

function belt(){
    const beltColor = 'White';
    console.log(beltColor); //Output White
    const course = `${beltColor} belt`
    console.log(course); // Otput White belt
}

belt(beltColor);
console.log(beltColor); // Output Red

/* Se definió nuevamente la constante color dentro de la función, sin embargo al llamar a la constante fuera de la función o bloque de código mantiene su valor global y dentro de la función poseé otro valor, quizá pueda ser un poco confuso el uso de variables globales y locales con un mismo nombre.
El uso de variables globales se considera una mala práctica de desarrollo, además de que esto puede hacer nuestro código un poco confuso; también es posible que pueda generar efectos secundarios dentro de nuestras funciones.
Entendamos este concepto con una metáfora, imagina que cada función es una persona, ¿te gustaría compartir tu cepillo de dientes con distintas personas? lo correcto es que cada persona tenga su cepillo de dientes con sus propias características.
Recuerda cepillarte los dientes tres veces al día 🦷😁 */