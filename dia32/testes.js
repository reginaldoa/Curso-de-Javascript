const falar ={
    falar(){
        return `${this.nome} está falando`
    }
}

const prototypepessoa = {...falar}

function criapessoa(nome,idade){
    return Object.create(prototypepessoa,{
        nome:{value:nome},
        idade:{value: idade},
    });
};

const pessoa = criapessoa('reginaldo',26 )
console.log(pessoa.falar())

