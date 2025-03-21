/*
1. Operaciones Básicas
Escribe un programa que solicite al usuario dos números enteros y realice las siguientes operaciones:

Suma
Resta
Multiplicación
División (considerando que no se puede dividir entre cero)
El programa debe mostrar los resultados de forma clara.
*/

let numA = 10;
let numB = 10;


function suma(a,b) { return a + b}
function resta(a,b) { return a - b}
function multiplicacion(a,b) { return a * b}
function division(a,b){
    if (b == 0) return "Error: No se puede dividir entre 0"
    return a / b
}


/*
2. Números Pares e Impares (20 puntos)
Crea un programa que reciba un número entero positivo y determine si es par o impar.
*/

function esPar(num){
    if (num < 0) return "Debé de ingresar un número positivo" 
    return num % 2 == 0 ? "El número es par" : "El número es impar";
}


/*
3. Arreglos y Bucles (20 puntos)
Desarrolla un programa que:

- Solicite al usuario ingresar 5 números enteros.
- Los almacene en un arreglo.
- Calcule y muestre la suma total y el promedio de los números ingresados.
*/

function sumarNumeros(){
    let numeros = [];

    while (numeros.length < 5); {
        let num = parseInt(prompt("Ingresa un numero entero"));
        if (!isNaN(num)) {
            numeros.push(num)
        } else {
            console.log("Por favor ingresa un número válido.");
        }
    } 

    let suma = numeros.reduce((acc, curr) => acc + curr, 0);
    let promedio = suma / numeros.length;

    numeros.forEach(function(numero) {
        suma += numero;
    })

    console.log(`La suma total es: ${suma}`);
    console.log(`El promedio es: ${promedio}`);
}

/*
4. Uso de Funciones (20 puntos)
Escribe un programa que defina una función llamada es_primo(n) que determine si un número entero positivo es primo o no.
El programa debe solicitar un número al usuario y mostrar si es primo o no, usando la función creada.
*/

function esPrimo(num) {
    if (num < 2) return "El número debe ser mayor o igual a 2";

    if (num > 1) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return "El número no es primo";
        }
    }
    return "El número es primo"
}


/*
5. Manipulación de Cadenas (20 puntos)
Crea un programa que reciba una palabra o frase y:

Cuente la cantidad de caracteres sin espacios.
Muestre la palabra o frase en mayúsculas y minúsculas.
*/

function contarCaracteres(){
    let palabra = prompt("Escribre una palabra o frase");
    let caracteres = palabra.replace(/\s/g, "").length;
    
    console.log(`Cantidad de caracteres sin espacios: ${caracteres}`);
    console.log(`En mayúsculas: ${palabra.toUpperCase()}`);
    console.log(`En minúsculas: ${palabra.toLowerCase()}`);
}