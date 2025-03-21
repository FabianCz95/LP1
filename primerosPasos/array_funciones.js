// let numeros = [30, 40, -50, -60, 70, -80, 90, 100, 10, -20];
// let mayor = 0;
// let menor = 0;

// for(let i = 0;i < numeros.length; i++){
//     if (numeros[i] > mayor) {
//         mayor = numeros[i];
//     } else if (numeros[i] < menor) {
//         menor = numeros[i];
//     }
// }

// console.log('El número mayor es: ' + mayor);
// console.log('El número menor es: ' + menor);

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for(let i = 0; i < matriz.length; i++){
    console.log(matriz[i]);
    for(let x = 0; x < matriz[i].length; x++){
        console.log(matriz[i][x]);
    }
}


