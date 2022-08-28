class Time{
    constructor(time){
        this.time = time
        this.apelido = 'verdao'    }
    get rrecopa(){
        return 'recopa' 
    }

   get ppaulista(){
        return 'paulista'
    }

    get venceuem2022(){
        if(typeof this.time !=='string') return false
        return `Em 2022, o ${this.apelido} venceu a ${this.rrecopa} e  o ${this.ppaulista}`
    }

    set venceuem2022(valor){
        valor = valor.split(' ')
        this.time = valor.shift('')
        this.apelido = valor.join(' ')
        
    }
}

const palmeiras = new Time('palmeiras')
palmeiras.maiorrival = 'corinthians'
console.log(palmeiras.maiorrival)
console.log(palmeiras.venceuem2022)
