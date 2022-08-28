class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    get nomecompleto(){
        return `${this.nome} ${this.idade}`
    }


}

const p1 = new Pessoa('reginaldo',26)
console.log(p1.nomecompleto)




class Testando{
 constructor(teste){
    this.teste = teste;
    
}
 reduzir(){
    for(let i=0 ;i <=10; i++){
        console.log(i)
    }
 }
}


let testee = new Testando(10)
testee.reduzir()