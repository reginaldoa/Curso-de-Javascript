/*const data = new Date();
console.log(data.toString(2022, 01)) // ano, mes, dia, hora,mes, segundo,milessimo
*/

/*const data = new Date('2022-03-20 00:14:50.80');
console.log("dia", data.getDate());
console.log("mes", data.getUTCMonth()+1);
console.log("ano", data.getFullYear());
console.log("hora", data.getHours());
console.log("min", data.getMinutes());
console.log("seg", data.getSeconds());
console.log("ms", data.getMilliseconds());
console.log("dia semana", data.getDay());
console.log(data.toString());
console.log(Date.now())
*/

/*function zeroesquerda (num){
    return num >= 10 ? num : `0${num}`
}

function formatadata(data){
    const dia = zeroesquerda (data.getDate());
    const mes = zeroesquerda (data.getMonth());
    const ano = zeroesquerda (data.getFullYear());
    const hora = zeroesquerda (data.getHours());
    const min = zeroesquerda (data.getMinutes());
     const seg = zeroesquerda (data.getSeconds());

     return `${dia}/${mes}/${ano}/${hora}:${min}:${seg}`;
    
}

const data = new Date();
const databrasil = formatadata(data)
console.log(databrasil)

*/

const numero = 11;
const teste = numero < 10 ? `0${numero}` : numero
console.log(teste)