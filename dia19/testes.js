function torcedor(nome, time, idade, peso, altura){
   return{
    nome,
    time,
    idade,
    peso,
    altura,
    fala: function(){
       return `${nome} torce para o ${time} e ele tem ${this.idade} anos.`
    },

    get imc(){
        const indice = this.peso / (this.altura ** 2 )
        return indice.toFixed(2)
    },

    dizimc: function(){
        return `Esse torcedor tem o imc de ${this.imc}`
    }


} 
}

const p1 = torcedor('reginaldo', 'palmeiras',26, 90, 1.76)
console.log(p1.fala())
console.log(p1.dizimc())