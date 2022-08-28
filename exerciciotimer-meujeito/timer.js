const relogio = document.querySelector('.relogio');
let segundos = 0
let timer ;
let iniciar = document.querySelector(".iniciar")
let pausar = document.querySelector(".pausar")
let zerar = document.querySelector(".zerar")


function chamardia(segundos){
    let data = new Date(segundos*1000)

    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone:'UTC'
    })
    }
    
  
iniciar.addEventListener('click',function(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = chamardia(segundos)
    },1000)
})

pausar.addEventListener('click', function(){
    setTimeout(function(){
        clearInterval(timer)
        segundos = 0
    })
})

zerar.addEventListener("click", function(){
    setTimeout(function(){
        clearInterval(timer)
        relogio.innerHTML = '00:00:00'
        segundos = 0
    })
})