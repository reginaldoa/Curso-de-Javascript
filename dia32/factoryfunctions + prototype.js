const falar = {
        falar(){
            console.log(`${this.nome} está falando`)
        }
}

const beber = {
    beber(){
        console.log(`${this.nome} está bebendo`)
    }

}

const comer ={
    comer(){
        console.log(`${this.nome} está comendo`)
    }
}

//composição, compor um objeto com vários outros objetos.

const pessoaPrototype = Object.assign({}, falar, beber,comer )

function criaPessoa(nome,sobrenome){
        return Object.create(pessoaPrototype, {
            nome:{value: nome},
            sobrenome: {value: sobrenome}
        });
}

const p1= criaPessoa('reginaldo','alves')
const p2 =criaPessoa('maria',"alves")
console.log(p1.beber())
console.log(p2.falar())