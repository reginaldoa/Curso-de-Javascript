teste =() =>{console.log("esse é meu teste")}

class ControleRemoto{ //estático, esse em si nao muda
    constructor(tv){
        this.tv = tv;
        this.volume = 0
        teste()
    }

    //método de instância
    aumentarVolume(){  
        this.volume+=2
    }

    //método de instância
    diminuirVolume(){
        this.volume-=2
    }

    //método estático, é como se fosse uma função dentro da classe.
    //método estático não tem acesso aos valores da instância.
    static soma(x,y){
        console.log(this)
    }
}

const controle1 = new ControleRemoto('LG')
const controle2 = new ControleRemoto("samsung")
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.diminuirVolume()
console.log(controle1)


console.log(ControleRemoto.soma(5,5))


