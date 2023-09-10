import React, {Component} from "react";
import {Link} from 'react-router-dom';

class Formulario extends Component{
    constructor(props){
        super(props);
        this.state = {
            formulario:''
        };
    }
    controlarEnvio(evento){
        evento.preventDefault();
        console.log("No me mandé");
        
    }
    guardarDatosDelInput(eventoEnCampoInput){
        this.setState({
            formulario: eventoEnCampoInput.target.value
        }, () => console.log(this.state.formulario + "lo guardo")) 
    }
    

render(){
    console.log("Me monté");
    console.log(this.state)
    return(
        <React.Fragment>
                <form action={`/Busqueda/${this.state.formulario}`}>
                    <input class="busqueda" type="text" placeholder="Buscar"
                    onChange={(eventoEnCampoInput)=>this.guardarDatosDelInput(eventoEnCampoInput)} value={this.state.formulario}></input>
                    <button  type="submit" > buscar</button> 
                </form>
        </React.Fragment>

    )
           
  
 }
}
export default Formulario;