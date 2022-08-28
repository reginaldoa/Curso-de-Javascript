function recursiva(max) {
    console.log(max)
    if(max >= 10) return;
    max++;
    
    recursiva(max)
}
recursiva(-1)

function palmeiras(titulos){
 if( titulos >= 4) return
 console.log(`o palmeiras ja ganhou ${titulos} títulos esse ano...e contando...`)
 titulos++

 palmeiras(titulos)

}

palmeiras(0)




function minhaidade(idade){
    if(idade >= 27) return
    console.log(`Minha idade é de ${idade} anos`)
    idade++

    minhaidade(idade)

}

minhaidade(0)