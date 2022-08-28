//mais utilizada para reduzir array para um único elemento, mas também serve para outras coisas.

//acumulador: valor inicial no final. Serve para fazer um loopind, mais ou menos igual o for.

//para somar pares, precisa ter o 0 como valor inicial do acumulador.

const numeros =[5,50,80,1,2,3,5,8,7,11,15,22,27]
const total = numeros.reduce(function(acumulador, valor){
   acumulador += valor
    return acumulador
},0);

//console.log(total)





const pessoas = [
    {nome: 'luiz', idade: 62},
    {nome: 'maria', idade: 23},
    {nome: 'eduardo', idade: 55},
    {nome: 'LETICIA', idade: 19},
    {nome: 'rosana', idade: 70},
    {nome: 'wallace', idade: 47},
];

const maisvelha = pessoas.reduce(function(acumulador,valor){
  if (acumulador.idade > valor.idade) return acumulador
     return valor;
})
console.log(maisvelha)