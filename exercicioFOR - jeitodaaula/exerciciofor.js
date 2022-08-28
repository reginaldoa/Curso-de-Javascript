const elementos = [
    {tag:'p',texto:'frase 1'},
    {tag:'div',texto:'frase 2'},
    {tag:'footer',texto:'frase 3'},
    {tag:'section',texto:'frase 4'}
]

const container = document.querySelector(".container");
const div = document.createElement("div");

for(let i =0; i < elementos.length; i++){
    const{tag, texto} = elementos[i];
    const tagcriada = document.createElement(tag)
    tagcriada.innerHTML= texto
    div.appendChild(tagcriada)
}

container.appendChild(div)




