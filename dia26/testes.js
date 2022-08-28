function pessoa(nome,sexo, idade){
    Object.defineProperties(this,{
        nome:{
        enumerable: true,
        value: nome,
        writable: false,
        configurable: true

        },

        sexo:{
        enumerable: true,
        value: sexo,
        writable: true,
        configurable: true
        },
        
        idade:{
        enumerable: true,
        value: idade,
        writable: true,
        configurable: true
        }
    })

}

const p1 = new pessoa("reginaldo", 'masculino', 26)
p1.nome = 'renato'
console.log(p1)

function timespaulistas (palmeiras, sp , corinthians){
    Object.defineProperty(this,'palmeiras',{
        enumerable: true,
        value: palmeiras,
        writable: false,
        configurable: true
    })

}

const clubes = new timespaulistas("palmeiras", 'sp', 'corinthians')
timespaulistas.palmeiras = 'porco'
console.log(clubes)





function pessoas(nome, idade){
    this.nome = nome,
    this.idade = idade
    function dizoi(){
        return `meu nome é ${this.nome}, tenho ${this.idade} anos e quero dizer OI`
    
    }
     return dizoi()
}


const pessoa1 = pessoas("reginaldo",26)
const pessoa2 = pessoas("renato",50)
console.log(pessoa1,pessoa2)