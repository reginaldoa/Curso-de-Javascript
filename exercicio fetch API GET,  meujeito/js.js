document.addEventListener('click', e =>{
    const elemento = e.target;
    const tag = elemento.tagName.toLowerCase()

    if(tag === 'a'){
        e.preventDefault() //fazendo isso, não vai permitir ir para o link.
       carregaPagina(elemento);
    }


});

async function carregaPagina(elemento){
    try{
        const href = elemento.getAttribute('href');
        const response = await fetch(href)
        if(response.status !== 200) throw new Error('error!')
        const html =await response.text()
        carregaResultado(html)
    }catch(e){
        console.log(e)
    }
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}