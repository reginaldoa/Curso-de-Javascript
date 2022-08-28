const a1 = [1,2,3]
const a2 = [4,5,6]

//const a3 = a1.concat(a2,[7,8,9], 'reginaldo')
//... functiona como rest, -> spread
const a3 = [...a1,'reginaldo',...a2, ...[7,8,9]]
console.log(a3)
//rest operator tambem serve para objetos
