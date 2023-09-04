import React , {Component} from 'react';
class Filtro extends Component {
    constructor(props){
        super(props)
        this.state = {
            ValorDelInput:''
        }
    }

controlarEnvio(evento){
    evento.preventDefault();
}
guardarDatosDelInput(event){
    this.setState({
    valorDelInput: event.target.value
    },
    ()=> this.props.funcionFiltrar(this.state.ValorDelInput)); 
}

render(){
    return(
        <form action ="" onSubmit={(event)=>this.controlarEnvio(event)}>
            <label>Filtrar por:</label>
            <input type ="text" name ="filtro" onChange={(event)=> this.guardarDatosDelInput(event)} value = {this.state.ValorDelInput}/>
            <button type = 'submit'>Filtrar</button>
        </form>
    );
}
}



export default Filtro