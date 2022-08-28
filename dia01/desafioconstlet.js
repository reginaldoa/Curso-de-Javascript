const nome = "Reginaldo";
const sobrenome = "Alves da Silva"
const peso = 95.00;
const altura = 1.76;
let IMC = peso/ (altura*altura) ;
const anonascimento = 1995;
const anoatual = 2022;

const idade = anoatual-anonascimento;

console.log(`${nome} ${sobrenome}, tem ${idade} anos, pesa ${peso} KG, tem uma altura de ${altura} e o seu imc é ${IMC}`)
