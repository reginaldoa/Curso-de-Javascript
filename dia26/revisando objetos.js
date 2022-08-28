const pessoa ={
    nome:  'reginaldo',
    sobrenome: 'alves da silva',
    idade : 26
}
const chave = 'nome'
console.log(pessoa[chave]) //da pra colocar valor dinamico com []
console.log(pessoa.idade)

const pessoa1 = new Object()
pessoa1.nome='renato'
pessoa1.sobrenome ='silva'
pessoa1.idade = 50

pessoa1.getnascimento = function(){
    const dataatual = new Date()
    return dataatual.getFullYear() - this.idade
}

console.log(pessoa1.getnascimento())

const pessoa2 ={
    nome:"luiz",
    sobrenome: 'otavio'
}

//delete pessoa1.nome;


console.log(pessoa1.nome, pessoa1.sobrenome)


pessoa.falarnome = function(){
    console.log(`${this.nome} está falando o seu nome`)
}

pessoa.falarnome()



const pessoa10={
    nome:'neide',
    idade: 49
}

pessoa10.datanascimento = function(){
    return 2022 - this.idade
}

console.log(pessoa10.datanascimento())
//quando vc retorna algo na função, precisa colocar console.log
//arrow function nao tem this




for(let chave in pessoa1){
    console.log(chave)
}


//factory functions / construction functions /classes
function criaPessoa(nome, idade, sobrenome){
    return{
        nome, 
        idade,
        sobrenome,
        get nomeCompleto(){
          return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa("reginaldo", 'alves', 26)
console.log(p1.nomeCompleto)


function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    //return this // nome: luiz. sobrenome :miranda
}


//new = cria objeto vazio {}, pega o this  e atrela ele dentro da função ao objeto
const pessoa100 = new Pessoa("luiz",'miranda')
const pessoa101 = new Pessoa("maria","miranda")
delete pessoa100.nome
Object.freeze(pessoa100)
pessoa100.nome ="eu"


console.log(pessoa100)
console.log(pessoa101)

//quando a função precisa ter a letra maiuscula, lembrar de colocar o New depois nas variaveis ou constantes 


// a constante não muda o valor dela, mas pode mudar o valor de um 'endereço' que está nela, isso é mto poderoso!



//exemplo
//p1 = "" nao pode pq ta alterando a variavel
//p1.nome = "" pode, pq ta alterando o valor que está no endereço da variavel

//freeze(p1) trava um objeto, ele nao muda