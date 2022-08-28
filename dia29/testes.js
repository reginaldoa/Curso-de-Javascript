/*function loja(produto,preco){
    this.produto = produto,
    this.preco = preco;

};


loja.prototype.confirmaçao = function(){
    this.desconto = this.preco - 10
    return `você confirmou a compra do produto: ${this.produto} e vai pagar apenas ${this.desconto} reais`
};


const p1 = new loja('camiseta', 50)
console.log(p1.confirmaçao())*/



const numeros = [10,21,31,41,11,6,70,80,90,100]
const numerospares = numeros
.filter(valor =>
     valor %2===0
)
.map((valor)=>
     valor * 2
)
.reduce((acumulador,valor) => 
     acumulador + valor 
)

console.log(numerospares)


retornaoi = () =>{return `oi`}

console.log(retornaoi())


const a1 = [10,20,30]
const a11 = a1.reduce(function(acumulador,valor){
    return acumulador + valor 

})

console.log(a11)