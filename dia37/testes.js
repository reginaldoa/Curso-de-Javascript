function timespaulistas(times){
    if(typeof times!== 'string') reject('santos não é da grande SP')
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(times)
        },1000)
    })
}

timespaulistas('palmeiras')
.then(resposta=>{
    console.log(resposta);
    return timespaulistas('corinthians')
    
}).then(resposta=>{
    console.log(resposta);
    return timespaulistas('spfc')

}).then(santos=>{
    console.log(santos)
    return timespaulistas(1)
}).then(santos=>{
    console.log(santos)
})
.catch()