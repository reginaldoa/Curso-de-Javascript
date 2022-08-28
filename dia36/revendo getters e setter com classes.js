const _velocidade = Symbol('velocidade') // não precisa usar NEW

class Carro{
    constructor(nome, velocidade){
        this.nome = nome;
        this[_velocidade]= 0
    }

    set velocidade(valor){
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade(){
        return  this[_velocidade]
    }

    acelerar(){
    if(this[_velocidade] >=100) return;
    this[_velocidade] ++;
    }

    freiar(){
        if(this[_velocidade] <= 0) return
        this[_velocidade] --;
        }
}

const c1 = new Carro("fusca")

/*for(let i = 0; i <= 200; i++){
   c1.acelerar()
}*/

c1.velocidade =9
console.log(c1.velocidade)


class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomecompleto(){
        return this.nome + ' ' + this.sobrenome
    }

    set nomecompleto(valor){
        valor = valor.split(' ')
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}


const p1 = new Pessoa('reginaldo','alves')
p1.nomecompleto='reginaldo alves'
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.nomecompleto)