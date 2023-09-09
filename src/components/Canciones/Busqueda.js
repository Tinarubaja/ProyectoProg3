import React, {Component} from 'react';
//import Formulario from './Formulario';

class Busqueda extends Component{
    constructor(){
        super();
        this.state = {
            
        }
    }
    render(){
        console.log("Me monté");
        console.log(this.state)
        return(        
            <div>
                <h2>hola soy LA Busqueda</h2>
            </div>
        )
    }
    
}


export default Busqueda;