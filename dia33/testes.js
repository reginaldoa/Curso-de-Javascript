class Pessoa{
    constructor(nome,idade){
        this.nome = nome,
        this.idade = idade
    }    

    falar(){
        console.log(`${this.nome} fala que te ama e tem ${this.idade} anos`)
    }
}


const eu = new Pessoa('reginaldo', 26)
console.log(eu.falar())