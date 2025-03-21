/* 
* Declaración de una función
*/
// let invitado = "Juan";
// let saludo = function(){
//     console.log("¡Hola " + invitado + ", Bienvenido a Javascript!");
// };

// saludo()

/* 
* Uso del return 
*/
// function sumar(numA,numB){
//     return numA + numB;
// };


/* 
* Funciones Lambda o Flechas 
*/
// const sumar = (a,b) => a + b;
// const restar = (a,b) => a - b;

/* 
* Uso del this
*/
function Persona(nombre, edad) {
    this.nombre = nombre,
    this.edad = edad,
    this.saludar = function() {
        setTimeout(() => {
            console.log("Hola, soy " + this.nombre + " y tengo " + this.edad + " años");
        }, 5000);
    }
};

const persona1 = new Persona("Ana", 22);
const persona2 = new Persona("Juan", 38);

// persona1.saludar();
// persona2.saludar();

/* 
* Uso del Callback
*/
function procesar(mensaje, callback) {
    console.log("Mensaje recibido: " + mensaje);
    callback();
};

procesar("Hola", () => console.log("Mensaje Procesado"));