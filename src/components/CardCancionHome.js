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
            
        {this.state.boton !== false?
            <section>
                <button onClick={()=>this.verMenos()}>Ver menos</button>
                <p>Descripcion:</p>
                {
                    this.props.duration !== null ?
                    <>
                        <p>Duracion: {this.props.duration}</p>
                        <p>Ranking: {this.props.ranking}</p>
                        <p>Explicit lyrics: {this.props.explicit_lyrics}</p>
                    </> :
                        <p>Explicit lyrics: {this.props.explicit_lyrics}</p>
                            }

            </section>
            :
            <button onClick= {()=> this.verMas()}> Ver mas</button>

        }
    


    
          
        </article>
        )
    }

}
export default CardCancionHome;