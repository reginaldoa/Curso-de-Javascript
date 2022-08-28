function soma(a,b){
    return a+b
}


function soma2(b,c){
    console.log(b+c)
}

function criapessoa(nome, sobrenome){
    return {nome,sobrenome}
}

const p1 = criapessoa('reginaldo', 'alves')

const p2 = {
    nome:'joao',
    sobrenome:"oliveira"
}

const p3 = criapessoa("teste", 'teste')



function falafrase(começo){
    function falaresto(resto){
        return começo + ' ' + resto;
    }
    return falaresto;
}

const fala = falafrase('olá')
const resto  = fala("mundo!")
//console.log(resto)


function criarmultiplicador(multiplicador){
    return function(n){
        return n * multiplicador;
    }
}

const duplica = criarmultiplicador(2)
const triplica = criarmultiplicador(3)
const quadruplica = criarmultiplicador(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadruplica(2))