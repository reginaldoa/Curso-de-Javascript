try{
    console.log("Abrir um arquivo")
    console.log('manipulei o arquivo e gerou erro')
    console.log("fechei o arquivo")

    try{
        console.log(a)
    }catch(e){
        console.log('deu erro')
    }finally{
        console.log("tambem sou finally")
    }

    
}catch(e){
    console.log('tratando o erro')
}finally{
    console.log("FINALLY:eu sempre sou executado")
}