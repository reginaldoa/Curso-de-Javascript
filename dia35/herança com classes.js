class Dispositivoeletronico{
    constructor(nome){
        this.nome = nome
        this.ligado = false;
    }
    ligar(){
        if(this.ligado){
            console.log(this.nome +'já ligado')
            return
        }
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome +'já desligado')
            return
        }
        this.ligado = false;

    }
}

class Smartphone extends Dispositivoeletronico{ // com classe, fica mais fácil
    constructor(nome, cor , dono){
        super(nome)//seria tipo o call
        this.cor = cor;
        this.dono = dono
    }
}

class tablet extends Dispositivoeletronico{
    constructor(nome, TemWifi){
    super(nome)
    this.TemWifi = TemWifi
}
ligar() {
    console.log("olha, você alterou o método ligar.")
}

falaroi(){
    console.log('falaoi')
}
}


const smart = new Smartphone('samsung','preto','reginaldo')
smart.ligar()
smart.ligar()
console.log(smart)

const t = new tablet ('tabletinho',true)
t.ligar()
t.falaroi()
console.log(t)