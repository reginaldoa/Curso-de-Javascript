const pessoa = {
    nome: "reginaldo",
    idade: 26 + " anos",
}


const{nome} = pessoa
console.log(nome)
console.log("___________________")

for(let i in nome){
    console.log(i, nome[i])
}