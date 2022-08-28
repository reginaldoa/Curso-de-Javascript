const notas = [10 ,10 ,10 ,10]

const total = notas[0] +notas[1] +notas[2] +notas[3]
console.log(`a nota somada foi ${total}`)
const media = total /4;

console.log(`A média no final foi ${media}`)

switch(media){
    case  4:
    console.log("reprovado")
    break

    case 10:
        console.log("aprovado porra")
        break
}