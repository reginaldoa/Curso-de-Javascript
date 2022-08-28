function Calculadora(){
    this.display = document.querySelector(".display")

    this.inicia = () => {
        this.capturacliques();
        this.capturaEnter();    
    }

    this.capturaEnter = () => {
        this.display.addEventListener('keypress', e =>{
            if (e.keycode === 13) return
            this.realizaconta()
        })
    }

    this.capturacliques = () => {
        document.addEventListener('click', event =>{
            const el = event.target;
            if(el.classList.contains('btn-num'))this.addnumdisplay(el);
            if(el.classList.contains('btn-clear'))this.clear(el);
            if(el.classList.contains('btn-del'))this.del(el);
            if(el.classList.contains('btn-eq'))this.realizaconta(el);
        });
    };

    this.addnumdisplay = (el) => {
        this.display.value += el.innerText
        this.display.focus();
    };
    
    this.clear = (el) =>{this.display.value = ""}
    this.del = (el) =>{this.display.value = this.display.value.slice(0, -1)}
   

    this.realizaconta= () => {
        try{
            const conta = eval(this.display.value);
            
            if(!conta){
                alert("conta invalida")
                return;
            }
            this.display.value = conta;
        }catch(e){
            alert("conta invalida")
            return;
        }
    }
}

const calculadora = new Calculadora();
calculadora.inicia();