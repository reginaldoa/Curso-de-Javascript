function enviar(){
    let peso = document.querySelector("#peso").value
    let altura = document.querySelector("#altura").value
    let res = document.querySelector("#res")
    let imc = peso/(altura*altura)
    let formulario = document.querySelector("#formulario")


    res.innerHTML=`Seu imc é de ${imc.toFixed(2)} <br>.`
   

    if(peso <= 0 || altura <=0 ){
        window.alert("Erro! É necessário digitar peso e altura para continuar.")
    }
    else if (imc <18.5){
        res.innerHTML+=`Você está abaixo do peso ideal`
    }else if (imc >=18.5 && imc < 24.99){
        res.innerHTML+= `Seu peso está normal, parabens!` 
    }else if(imc >= 25 && imc < 29.99 ){
        res.innerHTML+=`Você está com sobrepeso`
    }else if(imc > 29.99 && imc < 34.99){
        res.innerHTML+=`Você está com obesidade grau 1`
    }else if(imc > 34.99 && imc < 39.99 ){
        res.innerHTML+=`Você está com obesidade grau 2`
    }else{
        res.innerHTML+=`Você está com obesidade grau 3`
    }

    console.log(res)

    formulario.addEventListener('submit',receberevento)
    receberevento.preventDefault()
    
} 

