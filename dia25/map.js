//map altera valores do array

const numeros =[5,50,80,1,2,3,5,11,22,27]

const dobranumeros = numeros.map((valor,indice,array) => valor*2)

//console.log(dobranumeros)



const pessoas = [
    {nome: 'luiz', idade: 62},
    {nome: 'maria', idade: 23},
    {nome: 'eduardo', idade: 55},
    {nome: 'LETICIA', idade: 19},
    {nome: 'rosana', idade: 32},
    {nome: 'wallace', idade: 47},
];

const nomes = pessoas.map(obj => obj.nome)
const idades = pessoas.map(obj => ({idade:obj.idade}))
const id = pessoas.map((obj,indice)=>{
    const newobj = {...obj}
    newobj.id = (indice +1)*1000 //para nao ter id 0
    return newobj
})

console.log(pessoas)
console.log(id)