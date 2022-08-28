//construtora -> molde (classe)

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomecompleto =() => 'ORIGINAL' + this.nome + ' ' + this.sobrenome

    
}

Pessoa.prototype.nomecompleto = function(){
    return `${this.nome} ${this.sobrenome}`
};

const pessoa1 = new Pessoa("luiz", 'O')
const pessoa2 = new Pessoa("maria", 'A')
const data = new Date();

console.dir(pessoa1.nomecompleto())


