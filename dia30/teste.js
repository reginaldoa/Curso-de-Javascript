function Eu(nome){
    this.nome = nome
}


Eu.prototype.time = function(clube){
    this.clube= clube
    return `${this.nome} torce para o ${this.clube}`

}

const pessoa = new Eu('reginaldo')
console.log(pessoa.time('palmeiras'))


//primeiro passo é criar a função, depois o prototipo, e depois a constante para jogar a função, após isso, eu jogo o prototipo, dentro da constante criada.