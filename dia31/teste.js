function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo
}


Conta.prototype.sacar= function(valor){
    if(valor > this.saldo){
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;
    }
    
    this.saldo -= valor

};

Conta.prototype.depositar= function(valor){
   return this.saldo += valor;
      
};

Conta.prototype.verSaldo = function(){
    console.log(`Saldo : ${this.saldo}`)
}


function ContaCorrente(agencia, conta, saldo,limite){ //outra função, mas com call, ou seja, jogando uma função dentro da outra 
    Conta.call(this,agencia, conta, saldo)
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype) 
ContaCorrente.prototype.constructor = ContaCorrente


ContaCorrente.prototype.sacar= function(valor, limite){ //redeclarei apenas um prototype, o que eu quis.
    if(valor >(this.saldo+limite)){
        console.log(`Saldo insuficiente ${this.saldo}`)
        return
        
    }

    this.saldo -= valor 

};


function ContaPoupança(agencia, conta, saldo){ //outra função, mas com call, ou seja, jogando uma função dentro da outra 
    Conta.call(this,agencia, conta, saldo)
}

ContaPoupança.prototype = Object.create(Conta.prototype)
ContaPoupança.prototype.constructor = ContaPoupança

//a poupança não precisou redeclarar nenhum prototype.



const n = new ContaPoupança(10,10,500,)
n.depositar(500)
n.sacar(500)
n.verSaldo()
console.log(n)



