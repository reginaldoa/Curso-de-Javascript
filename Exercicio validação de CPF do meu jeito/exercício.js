// 705.484.450-52   070.987.720-03
/*

7x  0x  5x  4x  8x  4x  4x  5x  0x  
10  9   8   7    6   5   4   3   2 
70  0   40  28   48  20  16  15  0  = 237

11 - (237 % 11) = 5 (primeiro digito)
se o número for maior que 9 , podemos considerar 0


7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
11  10  9   8   7    6   5   4   3   2 
77   0  45  32  56   24  20  20  0   10  = 284

11 - (284 % 11) = 2 (segundo digito)
se for maior que 9, consideramos 0;*/

let CPF = '070.987.720-03'

EncontrandoDigito1 = () =>{

let CPFlimpo = CPF.replace(/\D+/g, '')
let cpfparcial = CPFlimpo.slice(0,-2)
let cpfarray= Array.from(cpfparcial)

let multiplos =  cpfarray.length +1;
    let somando = cpfarray.reduce((ac, vl)=>{
        ac += (multiplos* Number(vl))
        multiplos--
        return ac
    },0);

const digito1= 11 - (somando % 11)

if(digito1 >9) return 0
return digito1
}


EncontrandoDigito2 =() =>{
let CPFlimpo = CPF.replace(/\D+/g, '')
let cpfparcial = CPFlimpo.slice(0,-2)
cpfarray= Array.from(cpfparcial+digito1)

let multiplos =  cpfarray.length +1;
    let somando = cpfarray.reduce((ac, vl)=>{
        ac += (multiplos* Number(vl))
        multiplos--
        return ac
    },0);

const digito2= 11 - (somando % 11)

if(digito2 >9) return 0
return digito2
}

const digito1 = EncontrandoDigito1()
const digito2 = EncontrandoDigito2()
console.log(`CPF:${CPF},dois últimos digitos: ${digito1} e ${digito2}`)




//consegui dessa forma