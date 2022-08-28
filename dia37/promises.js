//código assincrono

function rand(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve,reject)=>{
        if(typeof msg !== 'string') reject ('bad value')
        setTimeout(() =>{
            resolve(msg)
        },tempo)
    });


 
}


esperaAi('Conexão com o banco de dados', rand(1,3))
.then(resposta =>{
    console.log(resposta);
    return esperaAi('Buscando dados da Base',rand(1,3))
})
.then(resposta =>{
    console.log(resposta);
    return esperaAi('Tratando os dados da base',rand(1,3))
}).then(resposta =>{
    console.log(resposta)
    return esperaAi(22222, rand(1,3))
}).then(() =>{
    console.log('Exibir os dados na tela.')
})
.catch(erro =>{
    console.log('erro',erro)
})


console.log('isso aqui sera exibido antes de qlqer promisse.')