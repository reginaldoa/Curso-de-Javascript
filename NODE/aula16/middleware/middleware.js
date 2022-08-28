exports.middlewareglobal= (req,res,next) =>{
    res.locals.umaVariaveLocal ='Este é o valor da variável local.';
    next();
}

exports.outromiddleware =(req,res,next)=>{
    console.log('sou seu outro middleware');
    next();
}