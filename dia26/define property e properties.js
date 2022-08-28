//defineProperty = define 1 propriedade
//defineProperties = define várias propriedades


function produto(nome, preco, estoque){
  
    Object.defineProperty(this, 'estoque',{
        enumerable: true, // mostra a chave
        value: estoque, //valor
        writable: true, // pode alterar?
        configurable: false // é reconfiguravel ?
    })
    Object.defineProperties(this,{
        nome:{
        enumerable: true, // mostra a chave
        value: estoque, //valor
        writable: true, // pode alterar?
        configurable: false // é reconfiguravel ?
        },
        
        preco:{
            enumerable: true, // mostra a chave
            value: estoque, //valor
            writable: true, // pode alterar?
            configurable: true // é reconfiguravel ?
        },
        estoque:{

        }
    })
}


const p1 = new produto('camiseta',20,3)


for(let chave in p1){
    console.log(chave)
}