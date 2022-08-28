//IIFE ->  IMMEDIATELY INVOKED FUNCTION EXPRESSION

/*(function(idade, peso, altura){
  const sobrenome = 'alves'
  function crianome(nome){
      return nome  + ' ' + sobrenome;
  }

  function falanome(){
      console.log(crianome("reginaldo"))
  }

  falanome()
  console.log(idade, peso, altura)
})(26, 90, 1.76);

*/




(function (){
    setInterval(function(){

    
    const nome = 'reginaldo'

    function FalaSobrenome(sobrenome){
        return `${nome} ${sobrenome}`
    }

    function DizNome(){
        console.log(FalaSobrenome('alves'))
    }

    DizNome()

},3000)
})()


let teste = setInterval(function(){
    console.log('teste')
},5000)