const E = true && true;  // as duas precisam ser verdadeiras para retornar verdadeiro
const OR = true || false; // se uma retornar verdadeiro, dá true


const usuario = "reginaldo";
const senha = 123456;

const logar = usuario === "reginaldo" && senha === 123456

if (logar === false){
    console.log("tentativa invalida")
}else{
    console.log("entra")
}