const pessoas = [
    {nome:'reginaldo', idade: 26},
    {nome:'renato', idade: 50},
    {nome:'neide', idade: 49}
]

const filtrar = pessoas.filter(valor => valor.nome.length > 7)
const idades = pessoas.filter(valor => valor.idade>26)

const ColocarIndice = pessoas.map((valor, indice) =>{
    const NewValor = {...valor}

    NewValor.id = indice
    return NewValor
} )

//console.log(idades)
//console.log(filtrar)
//console.log(ColocarIndice)
//console.log(pessoas)


const n1 = [1,2,3,4,5,6,7,8,9]
const n11= n1.filter(valor =(valor)=> valor <= 5 )
const n12= n1.map((valor,indice) =>{
    const newvalor = {...valor}

    newvalor.id = indice
    return newvalor
})

console.log(n12)