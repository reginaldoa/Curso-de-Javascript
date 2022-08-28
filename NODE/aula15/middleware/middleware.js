exports.middlewareglobal= (req,res,next) =>{
    next();
}

exports.outromiddleware =(req,res,next)=>{
    console.log('sou seu outro middleware');
    next();
}