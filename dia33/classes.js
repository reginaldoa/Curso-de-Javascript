//instanciar é criar uma pessoa a partir da classe, a classe é um molde.

//classe
class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){ // método, seria um prototype na função construtora.
        console.log(`${this.nome} está falando`)
    }
}

//comparando a mesma coisa, na função construtora.

//função construtora
function Pessoa2(nome,sobrenome){
    this.nome = nome,
    this.sobrenome= sobrenome;
}

Pessoa2.prototype.falar=function(){
    console.log(`${this.nome} está falando`)
}


const p1 = new Pessoa('reginaldo','alves')
const p2 = new Pessoa2('reginaldo', 'alves')
console.log(p1.falar())
console.log(p2.falar())


