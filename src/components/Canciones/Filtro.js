import React , {Component} from 'react';
class Filtro extends Component {
    constructor(){
        super()
        this.state = {
            ValorDelInput:''
        }
    }

controlarEnvio(event){
    event.preventDefault();
    return true
}
guardarDatosDelInput(eventoEnCampoInput){
    this.setState({
    valorDelInput: eventoEnCampoInput.target.value
    },()=> console.log(this.state.ValorDelInput)); 
}

render(){
    return(
        <form action=" " onSubmit={(e)=>this.controlarEnvio(e)}>
            <label htmlFor="">Filtrar por:</label>
            <input type ="text" name ="filtro" onChange={(e)=> this.guardarDatosDelInput(e)} value = {this.state.ValorDelInput}/>
            <button type = 'submit'>Filtrar</button>
        </form>
    );
}
}



export default Filtro