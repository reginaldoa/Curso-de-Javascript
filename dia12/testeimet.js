function data(){
    let dia = new Date()

    return dia.toLocaleTimeString('pt-BR',{
        hour12:false
    })
}


começartempo = setInterval(function(){
    console.log(data())
},1000)


setTimeout (function(){
    clearInterval(começartempo)
},5000)

setInterval(function(){
    console.log("VAI DORMIR!")
},6000)