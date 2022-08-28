class CPF{
    constructor(cpf){
        this.cpf = cpf
        
    }

    CriarDigito1(){
        let cpflimpo = this.cpf.replace(/\D+/g, '')
        let cpfparcial = cpflimpo.slice(0,-2)
        let cpfarray = Array.from(cpfparcial)
        let multiplos = cpfarray.length+1;
        let somando = cpfarray.reduce((acumulador, valor)=>{
        acumulador += (multiplos* Number(valor))
        multiplos--
        return acumulador
        },0)

        const digito1 = 11 - (somando % 11)

        if(digito1 > 9) return 0
        if(digito1 ==! 'number') return "erro"
        console.log(digito1)
    }

      
    CriarDigito2(){
        let cpflimpo = this.cpf.replace(/\D+/g, '')
        let cpfparcial = cpflimpo.slice(0,-1)
        let cpfarray = Array.from(cpfparcial)
        let multiplos = cpfarray.length+1;
        let somando = cpfarray.reduce((acumulador, valor)=>{
        acumulador += (multiplos* Number(valor))
        multiplos--
        return acumulador
        },0)

        const digito2 = 11 - (somando % 11)

        if(digito2 > 9) return 0
        if(digito2 ==! 'number') return "erro"
        console.log(digito2)

    }
  
}


  



const  cpf =  new CPF('443.607.518-42')
cpf.CriarDigito1()
cpf.CriarDigito2()




//705.484.450-52   070.987.720-03 443.607.518-42
//consegui, do meu jeito! porém, com alguns erros, amanha ver o codigo do professor. o meu nao mostrou os zeros a esquerda.

