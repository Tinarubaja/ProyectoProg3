import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class CardCancionHome extends Component{
    constructor(props){
        super(props);
        this.state={
            boton:false
        }
    }
    verMas(){
        this.setState({boton:true})

    }
    verMenos(){
        this.setState({boton:false})
    }
    render(){
        return(
        <article>
            <h1>{this.props.title}</h1>
            
            <Link to={`/Cancion/${this.props.id}`}>detalle cancion</Link>
            <h1>{this.props.id}</h1>
            
        {this.state.boton !== false?
            <section>
                <button onClick={()=>this.verMenos()}>Ver menos</button>
                <p>Descripcion</p>
            </section>
            :
            <button onClick= {()=> this.verMas()}> Ver mas</button>

        }
    


    
          
        </article>
        )
    }

}
export default CardCancionHome;