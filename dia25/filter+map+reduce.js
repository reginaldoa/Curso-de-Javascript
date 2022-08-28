const numeros =[5,50,80,1,2,3,5,8,7,11,15,22,27]
const numerospares = numeros
.filter(valor =>valor % 2 ===0)
.map(valor=>valor *2)
.reduce((acumulador, valor) => acumulador + valor)


//console.log(numerospares)


//[ 50, 80, 2, 8, 22 ] pares 


const n1 = [3,10,20,30,40,50,7]
const pares = n1.filter(valor => valor %2 ===0)
.map(valor => valor *2)
.reduce((acumulador,valor) => acumulador + valor)

console.log(pares)






