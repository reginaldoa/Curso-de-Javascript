const res = require("express/lib/response")

exports.paginaInicial =(req,res)=>{
    res.send(
        '<form action="/" method="POST"> Nome: <input type= "text" name="nome"><button>Enviar</button> </form>'
    )
}

exports.trataPost=(req,res)=>{
    res.send(`Olá ${req.body.nome}, eu sou a rota de post.`)
}