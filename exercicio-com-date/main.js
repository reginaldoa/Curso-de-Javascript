//Minha forma, certa, porém, muito grande
/*function teste(qualdia){
    let diasemana;

    switch(qualdia){
        case 0:
            diasemana="domingo"
            return diasemana;
            case 1:
            diasemana="segunda"
            return diasemana;
            case 2:
            diasemana="terça"
            return diasemana;
            case 3:
            diasemana="quarta"
            return diasemana;
            case 4:
            diasemana="quinta"
            return diasemana;
            case 5:
            diasemana="sexta"
            return diasemana;
            case 6:
            diasemana="sabado"
            return diasemana;


    }
}

function teste2(qualmes){
    let mes;

    switch(qualmes){
        case 1:
            mes ="janeiro";
            return mes;
        case 2:
            mes ="fevereiro";
            return mes;
        case 3:
            mes ="março";
            return mes;
        case 4:
            mes ="Abril";
            return mes;
        case 5:
            mes ="maio";
            return mes;
        case 6:
            mes ="junho";
            return mes;
        case 7:
            mes ="julho";
            return mes;
        case 8:
            mes ="agosto";
            return mes;
        case 9:
            mes ="setembro";
            return mes;
        case 10:
            mes ="outubro";
            return mes;
        case 11:
            mes ="novembro";
            return mes;
        case 12:
            mes ="Dezembro";
            return mes;
    }
}

let data = new Date();
let diasemana1 = data.getDay();
let diasemana = teste(diasemana1);//coloquei a função dentro da variavel. joguei a variavel dos dados do ano, dentro do parametro dela, pois usei o switch
let mes1 = data.getMonth()+1;
let mes =  teste2(mes1) //coloquei a função dentro da variavel. joguei a variavel dos dados do mes, dentro do parametro dela, pois usei o switch
let ano = data.getFullYear();
let h1 = document.querySelector('.container h1');
let horas = data.getHours();
let minutos = data.getMinutes();
let dia = data.getDate()

h1.innerHTML=`${diasemana},${dia} de ${mes} de ${ano}. Horário : ${horas}:${minutos}.`
*/


//forma do professor, muito melhor, pois é menor
let h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML= data.toLocaleString('pt-BR',{dateStyle:'full', timeStyle:'short'});

const ps = document.querySelectorAll("p");
const corfundo = getComputedStyle(document.body);
corfundoverdadeiro = corfundo.backgroundColor

//ABAIXO, APENAS UM TESTE
for(let p of ps){
    p.style.backgroundColor = corfundoverdadeiro;
    p.style.color="#FFFFFF"
    
}


