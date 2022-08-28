// produto -> aumento, desconto
//camiseta = cor, caneca = material

function Produto(nome, preço,cor, estoque){
    this.nome = nome,
    this.preço = preço,
    this.cor = cor,
    this.estoque = estoque;
}

Produto.prototype.aumento = function (quantia){
    this.preço += quantia;
}
Produto.prototype.desconto = function (quantia){
    this.preço -= quantia;
}


function Camiseta (nome,preço,cor,estoque){
    Produto.call(this,nome,preço,cor, estoque)
    this.cor = cor;
};


Camiseta.prototype= Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual){
    this.preço = this.preço + (this.preço * (percentual /100))
}



function Caneca(material, preço, cor, estoque){
    Produto.call(this, material, preço, cor, estoque)
}

Object.defineProperty(this, 'estoque',{
    enumerable:true,
    configurable:false,
    get: function (){
        return estoque;
    },
    set: function(valor){
        if(typeof valor !== 'number') return "Necessário ser número" 
        return estoque = valor
    }
})

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

Caneca.prototype.aumento = function(quantia){
    this.preço += quantia
}

Caneca.prototype.desconto = function(quantia){
    this.preço -= quantia
}


const caneca = new Caneca('plastico', 100,'verde',50)
caneca.desconto(100)
console.log(caneca)
console.log(caneca.estoque)

const camiseta = new Camiseta('regata',20, 'preta',50)
camiseta.aumento(100)
console.log(camiseta)