function getDiaSemanaTexto(semana){
    let diasemanatexto;

    switch(semana){
    case 0:
        diasemanatexto = "domingo";
        return diasemanatexto;
    case 1:
        diasemanatexto ="nada";
        return diasemanatexto;
    default:
        diasemanatexto=""
        return diasemanatexto;
    }

}

const data = new Date();
let semana = data.getDay();
const diasemanatexto = getDiaSemanaTexto(semana)

console.log(semana, diasemanatexto)


/*const data = new Date("2022-02-27 00:00:00");
const diasemana= data.getDay();
let diasemanatexto;

switch(diasemana){
    case 0: 
    diasemanatexto= `domingo`
*/