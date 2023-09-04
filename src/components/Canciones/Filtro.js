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
    return true
}
guardarDatosDelInput(event){
    this.setState({
    valorDelInput: event.target.value
    },
    ()=> console.log(event)); 
}
}
render(){
    return(
        <form action ="" onSubmit={(e)=>this.controlarEnvio(e)}>
            <label htmlFor="">Filtrar por:</label>
            <input type ="text" name ="filtro" onChange={(e)=> this.guardarDatosDelInput(e)} value = {this.state.ValorDelInput}/>
            <button type = 'submit'>Filtrar</button>
        </form>
    );
}

export default Filtro