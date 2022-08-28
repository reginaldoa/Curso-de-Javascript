/*const a1 = [1,2,3,4,5,6,7,8,9,10]
const a2 = [11,12,13,14,15,16,17,18,19,20]

const a3 = [...a1,...a2]
console.log(a3)



const nomes = ['reginaldo', 'caio', 'thiago','douglas']
const removidos = nomes.splice(2,1,'andressa')
console.log(nomes)
console.log(removidos)

const juntar = [...nomes, ...removidos]
console.log(juntar)
*/

let n1 = ['reginaldo','renato','neide']
let n2 = ['giovanna', 'renatinho']
n1.push('ramon', 'regineide')
let n3 = [...n1, ...n2]

let i = 0

teste = () =>{while(i < n3.length){console.log(n3[i])
i++}

}

teste()

ola = (nome) => {console.log(`olá ${nome}`)}



ola(n1[0])
