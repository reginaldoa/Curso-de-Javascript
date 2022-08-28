function chamapessoa(nome, idade, time){
    return{
        nome,
        idade,
        time,
    

    get fala(){
        return `Essa pessoa se chama ${this.nome} e  torce para o ${this.time} e nasceu em ${2021-idade}`


    },

    get teste(){
        return this.fala
    }
    }
}

const p1 = chamapessoa("reginaldo", 26,'palmeiras')
const p2 = chamapessoa('regineide',28,'santos')
p2.time =  'palmeiras'

p1.nome= 'REGINALDO'
console.log(p1.fala)
console.log(p2.teste)

