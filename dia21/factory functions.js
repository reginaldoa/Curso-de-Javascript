function CriaCalculadora(){
    return{
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),


        iniciar(){
            this.CliqueBotoes();
            this.pressionaEnter()
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta)
                if(!conta){
                    alert("Conta Invalida")
                    return;
                }

                this.display.value = String(conta);
            }catch(e){
                alert("conta invalida")
                return
            }
        },



        ClearDisplay(){
          this.display.value= ''  
        },

        apagaUM(){
            this.display.value = this.display.value.slice(0, -1)
        },

       

        CliqueBotoes(){
            document.addEventListener('click', e =>{
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.ClearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUM();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta()
                }
            })
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        }
    };
}

const calculadora = CriaCalculadora();
calculadora.iniciar();