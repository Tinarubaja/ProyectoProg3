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
           album:[],
           textoBoton: "Agregar a favoritos",
        }
        console.log(this.state.id)
    }
//-vamos a conseguir el id
//-hacer un coso para guardarlo
//-lo metemos en el local Storage
//-preguntamos si esta o No
//-lo llamamos favoritos albunes
//-hacemos el boton
    componentDidMount(){
        let arrayFavoritosCanciones = []
        let recuperoStorageCanciones = localStorage.getItem('favoritos');
        
        if(recuperoStorageCanciones !== null){
            arrayFavoritosCanciones = JSON.parse(recuperoStorageCanciones);

           if(arrayFavoritosCanciones.includes(this.state.id)){
             this.setState({
                 textoBoton: 'Quitar de favoritos'
             })
           }    
        }


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
    agregarAFavoritosCancion(id){
        
        // Agregar un id dentro de array y colocar ese array en localStorage
        let arrayFavoritosCanciones = []
        let recuperoStorageCanciones = localStorage.getItem('favoritos');
        
        if(recuperoStorageCanciones !== null){
            arrayFavoritosCanciones = JSON.parse(recuperoStorageCanciones);   
        }
           
        if(arrayFavoritosCanciones.includes(id)){
            //Si el id está en el array queremos sacar el id.
            arrayFavoritosCanciones = arrayFavoritosCanciones.filter( unId => unId !== id);

            this.setState({
                textoBoton: "Agregar a Favoritos"
            })
        } else {
            arrayFavoritosCanciones.push(id);
            this.setState({
                textoBoton: "Quitar de favoritos"
            })
        }

        //Subirlo a local storage stringifeado
        let arrayFavoritosCancionAString = JSON.stringify(arrayFavoritosCanciones)
        localStorage.setItem('favoritos', arrayFavoritosCancionAString)

        console.log(localStorage)
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

                                
                                <button  class="botonFavs" onClick={()=>this.agregarAFavoritosCancion(this.state.id)}  type="button">{ this.state.textoBoton }</button>

                            </div>
                        </section>
                    </section>
                }
           </React.Fragment>

        )
    }

}


export default Cancion;