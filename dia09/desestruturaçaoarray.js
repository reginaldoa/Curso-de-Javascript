/*const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];

let [primeironumero, segundonumero, , quartonumero , , sextonumero ,...rest] = numeros;

console.log(primeironumero, quartonumero, sextonumero);
//a diferença da desustruturação de objetos e array é.. objeto=== {}, array=== []
*/

const numeross = [[1,2,3],[4,5,6],[7,8,9]]
const [lista1, lista2, lista3] = numeross
console.log(lista2[1])


const numero = [1 ,2 , 3 ,4];
const[primeiro, segunda,, quarto] = numero;
console.log(primeiro, quarto)
