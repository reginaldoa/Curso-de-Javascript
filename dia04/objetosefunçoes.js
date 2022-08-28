const pessoa1 = {
    nome: "reginaldo",
    sobrenome: "alves",
    idade: 26,


    fala() {
        console.log(`a minha idade atual é ${this.idade}`)
    },

    maisidade(){
        this.idade++
    }
}
pessoa1.maisidade();
pessoa1.fala()
