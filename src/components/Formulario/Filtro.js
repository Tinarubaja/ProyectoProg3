import React , {Component} from 'react';
class Filtro extends Component {
    constructor(props){
        super(props)
        this.state = {
            ValorDelInput:'',
            
        }
    }

controlarEnvio(event){
    event.preventDefault();
    console.log("No me mandé");
    this.props.filtrar(this.state.ValorDelInput)

    return true
}
guardarDatosDelInput(eventoEnCampoInput){
    this.setState({
        ValorDelInput: eventoEnCampoInput.target.value
    },()=> console.log(this.state.ValorDelInput)); 
    return true
}

render(){
    return(
        <form action="" onSubmit={(e)=>this.controlarEnvio(e)}>
            <label htmlFor="">Filtrar por:</label>
            <input type ="text" name ="filtro" placeholder="filtrar" onChange={(e)=> this.guardarDatosDelInput(e)} defaultValue={this.state.ValorDelInput}/>
            <button type = "submit">Filtrar</button>
        </form>
    );
}
}



export default Filtro