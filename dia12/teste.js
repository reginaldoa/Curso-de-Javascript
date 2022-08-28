function somar(x,y){
    if(typeof x !== "number" || typeof y !== "number"){
        throw new TypeError ("esperava numeros")
    }


    return x+y 
}


try{
const soma = somar("a",2)    
console.log(soma)
}catch(error){

}finally{
    console.log("tchau")
}

let pessoa = {
    nome: 'reginaldo',
    idade : 26
}

let = {idade} = pessoa

console.log(idade)
