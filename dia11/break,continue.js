const numeros = [1,2,3,4,5,6,7,8,9,10];

for(let numero of numeros){
    if (numero === 3){
        console.log("Pulando o três aqui!")
        continue;
    }

    if(numero ===8){
        console.log("achei o oito, acabou!")
        break;
    }
   console.log(numero)
}