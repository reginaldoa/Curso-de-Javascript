import React,{Component} from "react";

export default class Conversor extends Component{
    constructor(props){
        super(props);

        this.state = {
            moedaB_valor:"",
            moedaA_valor: 0,
        }

        this.converter= this.converter.bind(this);
    }

    converter(){
        let cotacao = 5.35
        let moedaB_valor = parseFloat(this.state.moedaA_valor) * parseFloat(cotacao)
        console.log(moedaB_valor)

        return moedaB_valor;

    }

    render(){
        return (
        <div className="conversor">
            <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
            <input type="text" onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}}></input>
            <button type="button" onClick = {this.converter}>Converter</button>
            <h2>{this.converter()}</h2>

        </div>
        )
    }
}