//getters e settters = fazer um método da função simular que é propriedade, mas vai além disso, também protege a propriedade.

//getter = obter o valor
//setters = resetar o valor

function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    let estoqueprivado = estoque

    Object.defineProperty(this,'estoque',{
        enumerable:true,
        //value: estoque, nao precisa
        //writable: true, nao precisa
        configurable:true,
        get : function(){
            return estoqueprivado; // pega o valor e exibe o mesmo
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                console.log('Só é aceito números, abaixo o último número cadastrado')
                return;
            }

            estoqueprivado = valor
             
        }
    });
}

/*const p1 = new Produto('camiseta',20,3);
//console.log(p1)
p1.estoque = '1'
console.log(p1.estoque)*/

function criaproduto(nome){
    return {
        get nome(){
            return nome
        },
        set nome(valor){
           valor = valor.replace('coisa', ' ');
            nome = valor
        }
    }
}



const p2 = criaproduto('camiseta')
p2.nome= 'qualquer coisa'
console.log(p2.nome)