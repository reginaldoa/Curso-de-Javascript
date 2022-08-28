let container = document.querySelector(".container")
let inputtarefa = document.querySelector('.inputtarefa')
let andtarefa = document.querySelector(".andtarefa")
let tarefas = document.querySelector(".tarefas")
let res = document.querySelector("#res")
let.testeapagar = document.querySelector("#testeapagar")

function teste(){
if(inputtarefa.value ==0){
    alert("é necessário digitar a tarefa")
}else{
    res.innerHTML += `<li>${inputtarefa.value}</li>`
}
inputtarefa.value = '';
inputtarefa.focus();

}

function apagarlista(){
    res.innerHTML=''
}


