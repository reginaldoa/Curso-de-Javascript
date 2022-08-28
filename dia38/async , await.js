function rand(min=0, max=3){
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(typeof msg !== 'string'){
                reject('cai no erro');
                return;
            }

            resolve(msg.toLocaleUpperCase()+ 'passei na promise')
            return
        },tempo)
    })
}

/*esperaAi('fase 1', rand())
.then(valor =>{
    console.log(valor)
    return esperaAi('fase 2', rand())
}).then(valor=>{
    console.log(valor)
    return esperaAi('fase 3 ', rand())
}).then(valor=>{
    console.log(valor)
    return false;
}).then(fase=>{
    console.log('terminamos na fase :', fase)
}).catch(e=>{
    console.log('e')
})*/

async function executa(){ //lembrar do ASYNC
    try{
        const fase1 =  esperaAi('fase 1', 1000)
    console.log(fase1)

    setTimeout(function(){
        console.log('essa promise estava pendente', fase1)
    })

    const fase2 = await esperaAi('fase 2', rand())
    console.log(fase2)

    const fase3 = await esperaAi('fase 3', rand())
    console.log(fase3)

    console.log('terminamos na fase:', fase3)
    } catch(e){
        console.log(e)
    }

    
}

//executa();

const teste2 =  esperaAi('qlq',5000)
console.log(teste2)
