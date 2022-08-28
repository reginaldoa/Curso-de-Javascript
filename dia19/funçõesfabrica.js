function criapessoa(nome, sobrenome, altura, peso){
    return{
        nome,
        sobrenome,
        get nomecompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        set nomecompleto(valor){
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
            console.log(valor)
        },

        fala: function(assunto){
            return `${this.nome} está falando sobre ${assunto}`
        },

        altura,
        peso,
        //Getter = para obter o valor, finge que é apenas um atributo ao invés de método.
        get imc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    };
}

var p1 = criapessoa("reginaldo", "alves",1.76 , 90)
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.imc)
p1.nomecompleto= "teste testinho"
console.log(p1.nomecompleto)
console.log(p1.fala("testando"))