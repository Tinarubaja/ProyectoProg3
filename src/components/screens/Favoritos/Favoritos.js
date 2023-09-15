import React, {Component} from 'react';
import CardCancionHome from "../../Cards/CardCancionHome";
import CardAlbum from "../../Cards/CardAlbum/CardAlbum";
import "./Favoritos.css"


class Favoritos extends Component{
    constructor(){
         super();
         this.state = {
             favoritos:[],
             favoritosAlbums:[]
        }
    }
    componentDidMount(){
        //--------------------------Canciones---------------------------
        let arrayFavoritos=[]
        let recuperoStorage = localStorage.getItem('favoritos');
        arrayFavoritos = JSON.parse(recuperoStorage);   

        let favoritoslista=[]
        arrayFavoritos.forEach(id => {
        let url = `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${id}`
            fetch(url)
                .then(response => response.json())
                .then(arrayFavoritos => {
                    favoritoslista.push(arrayFavoritos)
                    this.setState({favoritos:favoritoslista})
                    console.log(this.state.favoritos)
                })
                .catch(error => console.log( error))
                console.log(this.state.albums)
        });
        //--------------------------ALBUMS---------------------------
        let arrayFavoritosAlbums=[]
        let recuperoStorageAlbums = localStorage.getItem('favoritosAlbums');
        arrayFavoritosAlbums = JSON.parse(recuperoStorageAlbums);   

        let favoritoslistaAlbums=[]
        arrayFavoritosAlbums.forEach(id => {
        let url = `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${id}`
            fetch(url)
                .then(response => response.json())
                .then(arrayFavoritosAlbums => {
                    favoritoslistaAlbums.push(arrayFavoritosAlbums)
                    this.setState({favoritosAlbums:favoritoslistaAlbums})
                    console.log(this.state.favoritosAlbums)
                })
                .catch(error => console.log( error))
                console.log(this.state.albums)
        });

    }
    componentDidUpdate(){
        console.log(this.state.albums)
    }
        render(){
             return(
                <React.Fragment>
                    <h2 >Mis favs</h2>
                      <section >
                       <h2>canciones</h2> 
                      {this.state.favoritos.map((cancion,idx) => <CardCancionHome key={cancion + idx}title = {cancion.title} link={cancion.id} id= {cancion.id} duration={cancion.duration} rank={cancion.rank} /> )}
                      <h2>Albums</h2> 
                      {this.state.favoritosAlbums.map((album,idx) => <CardAlbum key={album + idx}title = {album.title} cover_big={album.cover_big} link={album.id} id ={album.id} duration={album.duration} position={album.position} record_type= {album.record_type}/>)}
                     </section>
                </React.Fragment>
            )
         }
    
            

    }


export default Favoritos;