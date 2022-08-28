const express = require ('express');
const app = express();

app.use(
    express.urlencoded(
        {extended: true}
        )
    )

app.get('/palmeiras/:melhortime?/:parametro?',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.query)
})

        //req    parametro   parametro opcional
app.get('/time/:idUsuarios?/:parametro?',(req,res)=>{
        console.log(req.params); // mostra os parametros que escolhi
        console.log(req.query);
        res.send(req.query) // mostra valores em JSON
})

app.get('/',(req,res)=>{
    res.send('<form action="/" method="POST"> Nome: <input type= "text" name="nome"><button>Melhor time</button> </form>')
})
app.post('/',(req,res)=>{
    console.log(req.body)
    console.log(req.params)
    console.log(req.query)
    res.send(`O que você me enviou foi ${req.body.nome}`)
})

app.listen(5000,()=>{
    console.log('acessar http://localhost:5000')
    console.log('servidor executado na porta 5000')
})