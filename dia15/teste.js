function mostrardata(){
    const data = new Date(segundos *1000)

    return data.toLocaleTimeString("pt-BR",{
        hour12: false,
        timeZone: 'UTC'
    })
}

let segundos = 0 

const iniciar = setInterval(function(){
    segundos++    
    console.log(mostrardata(segundos))

},1000)

setTimeout(function(){
    clearTimeout
    console.log("testando")
    segundos++
},3000)

setTimeout(function(){

})

setTimeout(function(){
    clearTimeout(iniciar)
    console.log("parei")
},7000)