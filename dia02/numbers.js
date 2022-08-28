// IEE 754-2008
let num1 = 0.7;
let num2 = 0.1;

resposta = num1+ num2;
resposta += num1+ num2;
resposta = Number(resposta.toFixed(2))


console.log(resposta)
console.log(Number.isInteger(resposta))


/*num1 += num2 
num1 += num2 
num1 += num2 
num1 += num2 
num1 += num2 
num1 += num2 
num1 += num2 
num1 += num2 
num1 += num2 

console.log(num1)
console.log(Number.isInteger(num1))
 */

//console.log(num1.toString() + num2); // nesse caso vira concatenação
//num1 = num1.toString();
//console.log(typeof num1);
//console.log(num1.toFixed(2)) //< isso é legal de saber 
//console.log(Number.isInteger(num1))
//let temp = num1 * "casa";
//console.log(Number.isNaN(temp));
// não faça contas com strings

//let casa = "5"
//console.log(Number(casa))
//casa = Number(casa)
//console.log(typeof casa)