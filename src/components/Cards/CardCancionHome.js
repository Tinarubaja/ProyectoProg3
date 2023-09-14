import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./CardCancion.css"
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

        <section class="card">
            <Link to={`/Cancion/${this.props.id}`}>
                <h4>{this.props.title}</h4>
            </Link>
            
        {this.state.boton !== false?
            <section>
                <button class="botonVermasMenosCancion" onClick={()=>this.verMenos()}>Ver menos</button>
                <p>Descripcion:</p>
                {
                    this.props.duration !== null ?
                    <>
                        <p>Duracion: {this.props.duration}</p>
                        <p>Ranking: {this.props.rank}</p>
                    </> :
                        <p>Explicit lyrics: {this.props.explicit_lyrics}</p>
                            }

            </section>
            :
            <button class="botonVermasMenosCancion" onClick= {()=> this.verMas()}> Ver mas</button>

        }
    


    
          
        </section>
        )
    }

}
export default CardCancionHome;