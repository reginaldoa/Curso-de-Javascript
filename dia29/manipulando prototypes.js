//new Object > toda função construtora tem object.prototype
//__proto__: object.prototype, isso ocorre "por debaixo dos panos"

const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
};

const objC = new Object();
objC.chaveC= 'C'

/*Object.setPrototypeOf(objB,objA)
Object.setPrototypeOf(objC,objB)
console.log(objC.chaveB)*/



function Produto(nome, preco){
    this.nome = nome;
    this.preco=preco;


}


Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco*(percentual /100) )
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco +  (this.preco*(percentual /100) )
}

const p1 = new Produto ('camiseta', 50)
const p2 = { //objeto literal
    nome: 'caneca',
    preco:15
}

Object.setPrototypeOf(p2, Produto.prototype)
p2.desconto(100)


/*const p3 = Object.create(Produto.prototype,{
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 113 
    },
    tamanho2:{
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42 

    }
})*/


const p3 = Object.create(Produto.prototype)
p3.nome= 'teste'
p3.preco = 50

p3.aumento(100)
console.log(p3)
