function funcao({nome, sobrenome, idade}){
    console.log(nome,sobrenome,idade)
}

funcao({nome:'reginaldo', sobrenome:'alves', idade: 26})
// a função tem uma variavel especial : arguments, que sustenta todos os argumentos enviados. não funciona em arrow functions


function conta(operador,acumulador, ...numeros){
    for(let numero of numeros){
       if (operador ==="+") acumulador += numero;
       if (operador ==="-") acumulador -= numero;
       if (operador ==="/") acumulador /= numero;
       if (operador ==="*") acumulador *= numero;

    }
    console.log(acumulador)
}
conta("+",1,20,30,40,50)


const ola = () => {console.log('ola mundo')}
ola()

function olamundo(oi){
  return oi
}

let oi = ' oi '
console.log(olamundo(oi))