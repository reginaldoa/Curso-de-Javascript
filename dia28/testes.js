function Conta(x,y){
    let resposta = x+y
    return resposta
}

Conta.prototype.teste = 'A resposta é essa abaixo'

const continha = new Conta(5,5)
console.log(continha)

function eu(nome,idade){
    this.Nome= nome,
    this.idade=idade

    return `${this.nome} tem ${this.idade}`

}

eu.prototype.sexo='Masculino'

const pessoa1 = new eu("reginaldo",26)
console.log(pessoa1)
console.log(pessoa1.sexo)



function Comida (arroz, feijao){
    this.arroz = arroz
    this.feijao = feijao

    return `minha comida preferida é ${this.arroz} e ${this.feijao}`


}

Comida.prototype.macarrao= function (teste){
    return teste

}

const comidapreferida = new Comida('arroz','feijao')
console.log(comidapreferida)
console.log(comidapreferida.macarrao('teste'))

const testando = 10

for(let a=0 ; a <11 ; a++){
    console.log(a)
}


let numeros = [1,2,3,4,5,6,7,8,9,10]
numeros.push(500,26)
console.log(numeros);

let a ="A";
let b="B";
let c= 'C';

[a,b,c] = [b,c,a]

console.log(a,b,c) //isso tudo se trata de testes, para ir melhorando o meu código, é mto importante rs. Vou começar a escrever coisas em inglÊs, já pra ir treinando um enquanto faço o outro. Isso é muito importante.
//por exemplo, ao criar uma variavel, será "let = house = 'blablabla". Isso é muito poderoso em meus estudos, pq ao mesmo tempo que estudo um, irei ficar estudando o outro.... Então é importante, eu faço o que quiser nessa página, pois são páginas de teste, não de estudos ou trabalho em si .




