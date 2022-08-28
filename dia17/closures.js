function retornafuncao(nome){
    return function(){
      return nome;
    }
}

const funcao = retornafuncao('luiz');
const funcao2 = retornafuncao("reginaldo")
console.log(funcao())
console.dir(funcao2())