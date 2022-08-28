LaçoDeRepetição = (numero) => {
    numero++
    console.log(numero)

    if(numero >= 10) return console.log("finalizado") 
   
    LaçoDeRepetição(numero)
}



console.log("Vou testar, como nas aulas, colocando uma função chamando outra.")

ChamaOutra=(teste) =>{
    LaçoDeRepetição(0)

}

const VerdadeiroOuFalso = true
const falso = NaN

if(VerdadeiroOuFalso && falso){
    ChamaOutra()
}else{
    console.log("to aprendendo muito bem!")
}