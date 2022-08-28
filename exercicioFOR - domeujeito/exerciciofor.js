const classe = document.querySelector(".container")
const elementos = [
        {tag:'p',texto:'frase 1'},
        {tag:'div',texto:'frase 2'},
        {tag:'footer',texto:'frase 3'},
        {tag:'section',texto:'frase 4'}
    ]


const[primeiro, segundo, terceiro , quarto] =elementos
const{tag, texto} = primeiro;
const{tag:tag2,texto:texto2} = segundo;
const{tag:tag3,texto:texto3} = terceiro;
const{tag:tag4,texto:texto4}= quarto;



classe.innerHTML="Lorem ipsum dolor sit amet <br>"
classe.innerHTML+=`${tag,texto}<br> <br>`
classe.innerHTML+=`${tag2,texto2} <br>`
classe.innerHTML+=`${tag3,texto3} <br>`
classe.innerHTML+=`${tag4,texto4}`


