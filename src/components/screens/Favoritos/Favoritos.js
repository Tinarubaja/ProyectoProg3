import React, {Component} from 'react';
import CardCancionHome from "../../Cards/CardCancionHome";
import CardAlbum from "../../Cards/CardAlbum/CardAlbum";
import "./Favoritos.css"


class Favoritos extends Component{
    constructor(){
         super();
         this.state = {
             favoritos:[],
             favoritosAlbums:[],
            hayFavoritosCancion:"Hay canciones",
            hayFavoritosAlbums:"Hay albums"
        }
    }

    componentDidMount(){
        //--------------------------Canciones---------------------------
        let arrayFavoritos=[]
        let recuperoStorage = localStorage.getItem('favoritos');
        arrayFavoritos = JSON.parse(recuperoStorage);   
        console.log(arrayFavoritos.length +"canciones")

        let favoritoslista=[]
        if((arrayFavoritos.length === 0)||(arrayFavoritos ===null)){
            this.state.hayFavoritosCancion="no hay favs canciones" 
        }else{
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
                });
                console.log("entro a buscar cancion")  

        }
        
        //--------------------------ALBUMS---------------------------
        let arrayFavoritosAlbums=[]
        let recuperoStorageAlbums = localStorage.getItem('favoritosAlbums');
        arrayFavoritosAlbums = JSON.parse(recuperoStorageAlbums);   
        console.log(arrayFavoritosAlbums.length +"albums") 

        let favoritoslistaAlbums=[]
        if((arrayFavoritosAlbums === null) ||( arrayFavoritosAlbums.length ===0) ){
            this.state.hayFavoritosAlbums="no hay favs Albums"
        }else{
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
                });
                console.log("entro a buscar album")  
        }


        console.log(this.state.hayFavoritosCancion)  
        console.log(this.state.hayFavoritosAlbums)  
    }
    componentDidUpdate(){
        console.log(this.state.favoritos)
        console.log(this.state.favoritosAlbums)
        
    }
        render(){
            console.log(this.state.favoritos)
            console.log(this.state.favoritosAlbums)

             return(
                <React.Fragment>
                    {(this.state.favoritos.length === 0 ) && (this.state.favoritosAlbums.length === 0 ) ?
                        <section>
                            <h3> CARGANDO...</h3>
                            <h3>Aun no hay favs</h3>
                        </section>:
                        
                        <section className="favscontenedor" >
                            <h2 className='titulosindex' >Mis favs</h2>

                            <h2 className='titulofavs'>Canciones</h2> 
                            {this.state.hayFavoritosCancion ==="no hay favs canciones"?
                                <h3> Aun no tienes canciones favoritas</h3>:
                                
                                <section className='artistas'>
                                        {this.state.favoritos.map((cancion,idx) => <CardCancionHome key={cancion + idx}title = {cancion.title} link={cancion.id} id= {cancion.id} duration={cancion.duration} rank={cancion.rank} /> )}
                                </section>
                            }

                            <h2 className='titulofavs'>Albums</h2> 
                            {this.state.hayFavoritosAlbums ==="no hay favs Albums"?
                                <h3> Aun no tienes canciones favoritas</h3>:

                                <section className='artistas'>
                                        {this.state.favoritosAlbums.map((album,idx) => <CardAlbum key={album + idx}title = {album.title} cover_big={album.cover_big} link={album.id} id ={album.id} duration={album.duration} position={album.position} record_type= {album.record_type}/>)}
                                </section>

                            }

                        </section>
                    }

                </React.Fragment>
            )
         }
    
            

    }


export default Favoritos;