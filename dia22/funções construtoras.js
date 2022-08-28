//Função construtora retorna objetos
//Função fábrica  -> objetos
//na construtora -> iniciar o nome com letra maiuscula... Pessoa(new) 

function Pessoa(nome, sobrenome){
    this.nome = nome,
    this.sobrenome = sobrenome;

    this.metodo = function(){
        const ID = 123456;
        // atributos ou métodos privados
        const metodointerno = function(){

        }

        //atributos ou métodos públicos ( da pra usar fora do escopo)
        console.log(this.nome + "sou um método")
    }
}

const p1 = new Pessoa ("reginaldo", "alves")
const p2 = new Pessoa ("renato",'da silva')

console.log(p1.nome)
console.log(p2.nome)
p1.metodo()