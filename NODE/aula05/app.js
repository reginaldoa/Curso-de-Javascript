const path = require ('path');
const caminhoArquivo = path.resolve(__dirname,'texto.json')
const escreve = require('./escreve')
const ler = require('./ler')

const times = [
    {nome:'PALMEIRAS'},
    {nome:'SANTOS'},
    {nome:'SAO PAULO'},
    {nome:'CORINTHIANS'},
    {nome:'CHELSEA'}
]

const json = JSON.stringify(times,'',2)
console.log(escreve(caminhoArquivo,json))


async function lerarquivo(caminho){
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados){
    dados= JSON.parse(dados);
    dados.forEach(val => console.log(val.nome))
}

lerarquivo(caminhoArquivo)