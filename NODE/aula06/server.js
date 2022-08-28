const express = require('express');
const app = express();


//        criar, ler ,atualizar, apagar
//CRUD == CREATE, READ, UPDATE, DELETE
//        post,    get,    put, delete

app.get('/', (req,res) =>{
    res.send(
        '<form action="/" method="POST"> Nome: <input type= "text" name="nome"><button>Enviar</button> </form>'
    )
});

app.post('/',(req,res)=>{
    res.send('recebi o formulario')
})

app.get('/contato',(req,res)=>{
    res.send('Obrigado por entrar em contato!')
})

app.listen(3000, () =>{
    console.log('acessar http://localhost:3000')
    console.log('servidor executando na porta 3000')
});