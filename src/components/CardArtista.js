import React, {Component} from 'react';
class CardArtista extends Component{
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
            <h1>{this.props.name}</h1>
            <img src={this.props.picture}/>
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
export default CardArtista;