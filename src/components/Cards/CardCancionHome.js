import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./CardCancion.css"
class CardCancionHome extends Component{
    constructor(props){
        super(props);
        this.state={
            boton:false,
            textoBoton: "Agregar a favoritos",
            favoritos: []
        }
    }

    agregarAFavoritos(id){
        // Agregar un id dentro de array y colocar ese array en localStorage
        let arrayFavoritos = []
        let recuperoStorage = localStorage.getItem('favoritos');
        
        if(recuperoStorage !== null){
           arrayFavoritos = JSON.parse(recuperoStorage);   
        }
           
        if(arrayFavoritos.includes(id)){
            //Si el id está en el array queremos sacar el id.
            arrayFavoritos = arrayFavoritos.filter( unId => unId !== id);

            this.setState({
                textoBoton: "Agregar a Favoritos"
            })


        } else {
            arrayFavoritos.push(id);
            this.setState({
                textoBoton: "Quitar de favoritos"
            })
        }

        //Subirlo a local storage stringifeado
        let arrayFavoritosAString = JSON.stringify(arrayFavoritos)
        localStorage.setItem('favoritos', arrayFavoritosAString)

        console.log(localStorage)
    }

    verMas(){
        this.setState({boton:true})

    }
    verMenos(){
        this.setState({boton:false})
    }

    componentDidMount(){
        let arrayFavoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            arrayFavoritos = JSON.parse(recuperoStorage) 
            if (arrayFavoritos.includes(this.props.id)){
                this.setState({
                    textoBoton: "Quitar de favorritos"
                })
            }
        }

    }

    render(){
        return(

        <section class="card">
            <Link to={`/Cancion/${this.props.id}`}>
                <h4>{this.props.title}</h4>
            </Link>
            <button  class="botonVermasMenosCancion" onClick={()=>this.agregarAFavoritos(this.props.id)}  type="button">{ this.state.textoBoton }</button>
            
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