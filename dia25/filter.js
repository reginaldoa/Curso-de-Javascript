//filter, map, reduce são funções importantes para array dentro do js
//filter sempre retorna array com a msm qtd de elementos, ou menos
const numeros =[5,50,80,1,2,3,5,11,22,27]

const numerosfiltrados = numeros.filter(valor=> valor >10)
//console.log(numerosfiltrados)

const pessoas = [
    {nome: 'luiz', idade: 62},
    {nome: 'maria', idade: 23},
    {nome: 'eduardo', idade: 55},
    {nome: 'LETICIA', idade: 19},
    {nome: 'rosana', idade: 32},
    {nome: 'wallace', idade: 47},
];

const pessoasfiltro = pessoas.filter(valor => valor.nome.length >5)
//console.log(pessoasfiltro)

const pessoasfiltro2 = pessoas.filter(valor => valor.idade >50)
//console.log(pessoasfiltro2)

const pessoasfiltro3 = pessoas.filter(valor =>valor.nome.toLocaleLowerCase().endsWith('o'))

console.log(pessoasfiltro3)