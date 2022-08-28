/*const nome ='reginaldo'
const sobrenome ='alves'

falanome =()=>{return `${nome} ${sobrenome}` };

/*module.exports.nome = nome;
module.exports.sobrenome= sobrenome;  esse pode exportar como objeto
module.exports.falanome = falanome

console.log(module.exports)

exports.nome = nome;  esse nao pode exportar como objeto
exports.sobrenome = sobrenome;
exports.falanome = falanome;
this.qualquercoisa ='ola'

console.log(exports)*/

class Pessoa{
    constructor(nome){
        this.nome = nome
    }
}

exports.Pessoa = Pessoa;

//abaixo, formas que da pra exportar 
//module.exports.'blabalbal'
//exports.'blalal'
//this.sobrenome= 'qualquer coisa'