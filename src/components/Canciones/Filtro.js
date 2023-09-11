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
    ValorDelInput: eventoEnCampoInput.target.value
    },()=> console.log(eventoEnCampoInput.target.value)); 
}

render(){
    return(
        <form action=" " onSubmit={(e)=>this.controlarEnvio(e)}>
            <label htmlFor="">Filtrar por:</label>
            <input type ="text" name ="filtro" placeholder="filtrar" onChange={(e)=> this.guardarDatosDelInput(e)} value = {this.state.ValorDelInput}/>
            <button type = 'submit'>Filtrar</button>
        </form>
    );
}
}



export default Filtro