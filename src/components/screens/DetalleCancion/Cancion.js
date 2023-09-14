import React, {Component} from 'react';
import CardCancionHome from '../../Cards/CardCancionHome';
import "./DetalleCancion.css"

class Cancion extends Component{
    constructor(props){
        super(props)
        this.state={
           id: Number(props.match.params.id),
           canciones: [],
           artista:[],
           album:[]
        }
        console.log(this.state.id)
    }

    componentDidMount(){
        // let canciones1 = []
        let url = `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${this.state.id}`
        fetch(url)
            .then(response => response.json())
            .then((data) => this.setState(
                {
                    canciones:data,
                    artista:data.artist,
                    album:data.album
                 }
                    
            ))
            .catch(error => console.log('El error es' + error))
            console.log(this.state.canciones)
    }
    

    render(){
        return(
            <React.Fragment >           
                {this.state.canciones.length === 0 ?
                    <h2> CARGANDO...</h2>:
                    <section class="detallesmargen">
                        <section class="cancioncontenedor">
                            <div class="fotoCancion"><img src={this.state.album.cover_medium}></img></div>
                            <div class="descrpcioCancion">
                                <h2 class="tituloCancion">{this.state.canciones.title}</h2>
                                <h3>{this.state.artista.name}</h3>
                                <h3>{this.state.album.title}</h3>
                                <audio controls class="musica">
                                    <source src={this.state.canciones.preview}></source>
                                </audio>

                                <button  class="botonFavs" type='submit'>Agregar a favoritos</button>
                            </div>
                        </section>
                    </section>
                }
           </React.Fragment>

        )
    }

}


// function Artist(){
//     return(
//         <div>
//             <h2>hola soy el componente</h2>
//         </div>
//     )
// }








export default Cancion;