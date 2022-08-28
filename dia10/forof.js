//usar os 3 tipos de for...
const nome = "reginaldo";

for (let i = 0; i < nome.length; i++){
    console.log(nome[i])
}

console.log("-----------------------------------------")

for(i in nome){
    console.log(i, nome[i])
}

console.log("----------------------------------------------")

for (i of nome){
    console.log(i)
}
