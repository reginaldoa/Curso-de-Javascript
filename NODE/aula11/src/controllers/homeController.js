exports.paginaInicial =(req,res)=>{
    res.render('index');
};

exports.trataPost=(req,res)=>{
    res.send(`Olá , eu sou a rota de post.`);
}