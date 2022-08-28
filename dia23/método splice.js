//                 -5     -4       -3         -2        -1 comparação de negativo e positivo nos indices
//                  0       1       2           3       4
const nomes = ['maria', 'joao', 'eduardo', 'gabriel', 'julia']

//nomes.splice(indice onde começa, quantos delete, add elemento1, elemento2, elemento3, etc )
//pop
//const removidos = nomes.splice(1,2) //tambem retorna o elemento removido, porem, retorna um array
//nomes.splice(nomes.length, 0 ,'reginaldo')

nomes.splice(2,2,'eu', 'vc', 'nos')
console.log(nomes)


//o splice simula varias funções, como shift, push, pop, unshift, é interessante usar ele 