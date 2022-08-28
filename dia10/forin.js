//const frutas = ["pera", "maça", "uva"]

/*for(let i = 0 ; i < frutas.length; i++){
    console.log(frutas[i])
}*/

/*for (let indice in frutas ){
    console.log(frutas[indice])
}*/

const pessoa = {
    nome:"reginaldo",
    sobrenome:"alves da silva",
    idade:26
}

const chave = 'nome'

for(let chave in pessoa){
    console.log(chave,pessoa[chave])
}

