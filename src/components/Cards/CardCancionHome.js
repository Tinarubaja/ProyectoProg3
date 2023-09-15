import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./CardCancion.css"
import Album from './CardAlbum/CardAlbum';
class CardCancionHome extends Component{
    constructor(props){
        super(props);
        this.state={
            boton:false,
            favoritos:[],
            textoBoton:"Agregar a favoritos"
        }
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
    agregarYSacarDeFavs (id){
        let arrayFavoritos = [];
        let recuperoStorage = localStorage.getItem('CancionFav')
        if (recuperoStorage !== null) {
            arrayFavoritos = arrayFavoritos.filter(unId => unId != id);
            this.setState({
                textoBoton: "Agregar a favoritos"
            })
        }else{
            arrayFavoritos.push(id);
            this.setState({
                textoBoton: "Quitar de favoritos"
            })
        }
        let arrayFavoritosAString = JSON.stringify(arrayFavoritos)
        localStorage.setItem('CancionFav' , arrayFavoritosAString)
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
        <button class="botonVermasMenosCancion" onClick={()=> this.agregarYSacarDeFavs(this.props.id)} type="button">{this.state.textoBoton}</button>
    


    
          
        </section>
        )
    }

}
export default CardCancionHome;