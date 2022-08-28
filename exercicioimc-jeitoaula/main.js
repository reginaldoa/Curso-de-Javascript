//capturar evento de submit do formulário
const form = document.querySelector("#form");

form.addEventListener('submit',function(e){
    e.preventDefault();
    const inputpeso = e.target.querySelector("#peso");
    const inputaltura = e.target.querySelector("#altura");

    const peso = Number(inputpeso.value);
    const altura = Number(inputaltura.value);
});

function criaP(){
    const p = document.createElement("p");
    return p;

}

function setresultado(msg){
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML='';

    constp = criaP;
    
}