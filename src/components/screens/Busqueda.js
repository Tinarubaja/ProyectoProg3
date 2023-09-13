import React, {Component} from 'react';
//import Formulario from './Formulario';
import CardAlbum from "../Cards/CardAlbum";
import CardCancionHome from '../Cards/CardCancionHome';


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
        console.log(this.canciones+"probando")
        
    }
   
    render(){
        console.log("Me monté");
        console.log(this.state);
        

        return(   
            
            <div>  
                <section class="albumsgeneral" id="album">
                    <h2 class="titulosindex">Albums</h2>
                     <div class="albums">
                     {this.state.albums.map((album,idx) => <CardAlbum key={album + idx}title = {album.title} cover={album.cover} id={album.id}/>)}
                     </div>
                </section>
                <section>
                    <h2>CANCIONES</h2>
                    {this.state.canciones.map((cancion,idx) => <CardCancionHome key={cancion + idx}title = {cancion.title} id={cancion.id} />)}
                </section>
            </div>
        )
    }
    
}


export default Busqueda;