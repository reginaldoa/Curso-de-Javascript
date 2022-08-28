rand=(max, min)=>{
    max *= 1000;
    min *=1000;
    return  Math.floor(Math.random() *(max-min) + max)
}

function times(time,tempo){
    if(typeof time !== 'string'){
        return false
    }
   return new Promise((resolve, reject)=>{
       setTimeout(()=>{
        resolve(time.toUpperCase())
        return
       },tempo)
   })
}

const timespaulistas=[
    times('palmeiras',rand(1,5)),
    times('corinthians',rand(1,5)),
    times('spfc', rand(1,5)),
]

Promise.all(timespaulistas)
.then(function(valor){
    console.log(valor +'ESSE É O ALL')
})
.catch()

Promise.race(timespaulistas)
.then(function(valor){
    console.log(valor +'esse é o race')
}).catch()



function palmeirascampeao(){
    const campeaopaulista = true
    if(campeaopaulista){
        return Promise.resolve('palmeiras é o campeão paulista de 2022')
    }else{
        return Promise.reject('é sim!ERRO')
    }
}


palmeirascampeao()
.then((campeao)=>{
    console.log(campeao +'esse é o resolve e reject')

})
.catch((erro)=>{
    console.log(erro)
})


let n1 = 10
let n2 = 0

/*while(n2 < n1){
  console.log(n2);
  n2++
}
**/

function familia(pai, mae){
   return new Promise((resolve, reject)=>{
       if(typeof pai !== 'string'  || typeof mae !== 'string'){
        reject('só é valido strings')
        return reject
       }
       resolve(pai.toUpperCase() +' '+ mae)
   })
}

async function teste(){
    try{
    const testando = await familia(  'renato', 3)
    console.log(testando)}

    catch(e){
        console.log(e)
    }
}


teste()

console.log('sempre lembrar de treinar tudo..sempre melhorar e sempre evoluir!')