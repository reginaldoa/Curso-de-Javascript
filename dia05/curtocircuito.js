/*function oi(){
    return'oi'
    
}

const teste = ""

console.log(teste || oi());*/


/*const cor = "vermelho" ;
const corpadrao = cor || "preto"
console.log(corpadrao)
*/


const a = 0;
const b = null
const c = 'false' // vai mostrar esse, mas será o verdadeiro, pois está dentro de aspas, não é valor falso literal.
const d = false
const e = NaN

console.log( a || b || c || d || e)