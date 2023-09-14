import React, {Component} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import "./CardAlbum.css"
class CardAlbum extends Component{
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
                    <Link to={`/Albums/${this.props.id}`}>
                        <img src={this.props.cover}/>
                        <h4>{this.props.title}</h4>
                    </Link>
                    {this.state.boton !== false?
                        <div class="container">
                            <button class="botonVermasMenos" onClick={()=>this.verMenos()}>Ver menos</button>
                            <p>Descripcion:</p>
                    {
                        this.props.duration !== null ?
                        <>
                            
                            <p> Record type: {this.props.record_type}</p>
                            <p>Track: {this.props.position}</p>
                        </> :
                            <p>Explicit lyrics: {this.props.explicit_lyrics}</p>
                                }
                            
                        </div>
                        :
                        <button  class="botonVermasMenos" onClick= {()=> this.verMas()}> Ver mas</button>
                    }
                </section>
        )
    }

}
export default CardAlbum;



        


    