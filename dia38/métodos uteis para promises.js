function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + max)
}

function esperaAi(msg,tempo){
    return new Promise((resolve,reject)=>{
        if (typeof msg !== 'string'){
            return console.log('cai no erro')
        }

        setTimeout(() =>{       
            resolve(msg.toUpperCase()+'passei na promise')
            return;
        },tempo)
          })
}

function baixaPagina(){
    const emCache = true;

    if(emCache){
       return Promise.resolve('pagina em cache')
    }else{
        return esperaAi('Baixei a página', 3000)
    }
}



const promises = [
    'Primeiro valor',
    esperaAi('promise1',rand(1,5)),
    esperaAi('promise2',rand(1,5)),
    esperaAi('promise3',rand(1,5)),
    esperaAi(1000,1000),
    'Outro valor'
]

/*Promise.race(promises)
.then(function(valor){
    console.log(valor)
})
.catch(function(erro){
    console.log(console.log('erro'))
})*/


baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina)
})
.catch(e =>{
    console.log('ERRO', e)
})

//promise.all =resolve uma de cada vez 
//promise.race = manda a que resolver primeiro 
//promise.resolve promise.reject = resolve traz a promesa resolvida, reject traz ela com erro
//todos os métodos tem then e cath