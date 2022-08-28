class familia{
    constructor(pai,mae){
        this.pai = pai,
        this.mae = mae
    }

    casados(){
        console.log(`${this.pai} é casado com ${this.mae}`)
    }
}


const familia1 = new familia('renato', 'neide')
familia1.casados()

