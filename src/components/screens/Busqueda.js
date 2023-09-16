import React, {Component} from 'react';
//import Formulario from './Formulario';
//import CardAlbumBusqueda from "../CardAlbumBusqueda";
import CardCancionHome from '../Cards/CardCancionHome';
import CardAlbum from '../Cards/CardAlbum/CardAlbum';


class Busqueda extends Component{
    constructor(props){
        super(props);
        this.state = {
            valorinput: String(props.match.params.q),
            albums:[],
            canciones:[]
            
        };
        console.log(this.state.valorinput +"valor input");
        
    }
    componentDidMount(){
        console.log("En componentDidMount");
        //ALBUMS
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search/album?q=${this.state.valorinput}`)
        .then(response => response.json())
        .then( data => this.setState(
                this.state.albums= data.data,

        ))
        .catch(e => console.log(e))

         //CANCIONES
         fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search/track?q=${this.state.valorinput}`)
         .then(response => response.json())
         .then( data => this.setState(
                 this.state.canciones= data.data,
         ))
         .catch(e => console.log(e))
    }
    
    
    componentDidUpdate(){
        console.log(this.state.albums)
        console.log(this.state.canciones)
        
    }
   
    render(){
        console.log("Me monté");
        console.log(this.state);
        

        return(   
            
            <div>  
                <section class="artistasgeneral" id="album">
                    <h2 class="titulosindex">Albums</h2>
                    {this.state.albums.length === 0 ?
                        <h2>Cargando Albums...</h2>:
                     <div class="artistas">
                         {this.state.albums.map((album,idx) => <CardAlbum key={album + idx}title = {album.title} cover_big={album.cover_big} link={album.id} id ={album.id}  record_type= {album.record_type}/>)}
                     </div>
                    }
                </section>
                <section class="artistasgeneral" id="artist">
                        <h2 class="titulosindex">Canciones</h2>
                        {this.state.canciones.length === 0 ?
                            <h2>Cargando Canciones...</h2>:
                            <div class="artistas">
                                {this.state.canciones.map((cancion,idx) => <CardCancionHome key={cancion + idx}title = {cancion.title} id={cancion.id} duration={cancion.duration} rank={cancion.rank} picture_big={cancion.artist.picture_big}/>)}
                            </div>
                         }
                </section>
            </div>
        )
    }
    
}


export default Busqueda;