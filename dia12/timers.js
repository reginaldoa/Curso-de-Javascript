function MostrarHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR',{
        hour12:false
    })
}


const tempo = setInterval(function () {
    console.log(MostrarHora())
}, 1000)


setTimeout(function(){
    clearInterval(tempo)
}, 3000);

setTimeout(function(){
    console.log('ola mundo')
}, 5000)