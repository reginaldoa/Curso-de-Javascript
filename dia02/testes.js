let nota1 = 7.5;
let nota2 = 8.5;
let nota3 = 10.0;
let nota4 = 2.1;

média = (nota1+nota2+nota3+nota4) / 4;

console.log(`a nota final (média) do aluno, de forma arredondada foi: ${Math.ceil(média)}`);

if (média >= 7){
    console.log("aprovado")
}else{
    console.log("reprovado")
}