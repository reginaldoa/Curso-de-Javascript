function hora(data){
    if(data && !(data instanceof Date)) {
       throw new TypeError ("esperando instancia de Date.");
    
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

}

try{
    const datas = new Date('01-01-1970 12:58:12')
    const horas  = hora();
    console.log(horas)

}catch(error){
    //tratar erro
}finally{
    console.log('tenha um bom dia')
}




