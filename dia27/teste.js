function Compras(produto, valor, estoque){
    this.produto = produto,
    this.valor = valor,
    this.estoque = estoque;

    Object.defineProperty(this,'estoque',{
        enumerable:true,
        configurable:true,

        get: function(){
            return estoque
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                console.log("só é aceito números, último número cadastrado , está logo abaixo:")
            }
            return estoque= valor}

        }

    )


}

const mercado = new Compras('camiseta',30, 1)
mercado.estoque= 500
console.log(mercado.estoque)






let a = 'a'
let b = 'b'
let c = 'c'

teste = [a,a,b] = [b,c,a]

console.log(teste)




function Familia(eu, pai, mae){
    this.eu = eu,
    this.pai = pai,
    this.mae= mae

    Object.defineProperty(this,'eu',{
        configurable : false,
        enumerable: true,


    })
}

const euzao = new Familia('reginaldo', 'renato', 'neide')
Object.freeze(euzao)
euzao.eu = 'rs'
console.log(euzao.eu)

