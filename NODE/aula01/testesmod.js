class eu{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
        return `Sou ${this.nome} e tenho ${this.idade}`
    }
}

let nome =' teste'
let idade=10

module.exports = {
    nome, idade
}