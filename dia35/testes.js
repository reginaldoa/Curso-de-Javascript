class Familia{
    constructor(pai, mae, eu){
        this.pai = pai;
        this.mae = mae;
        this.eu = eu
    }

    netos(neto, neta){
        this.neto = neto
        this.neta = neta

    }
}


class familiathiago extends Familia{

}

const familia = new Familia("renato",' neide',' reginaldo')
familia.netos('giovanna', 'renatinho')
console.log(familia)


const thiago = new familiathiago('pai dele','mae dele', 'thiago')
console.log(thiago)




let a = 'a'
let b= 'b'
let c= 'c';

[a,b,c] = [b,c,a]

console.log(a,b,c)
