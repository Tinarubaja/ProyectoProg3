import React, {Component} from 'react';
import "./DetalleAlbum.css"
class Album extends Component{
    constructor(props){
        super(props)
        this.state={
           id: Number(props.match.params.id),
           canciones: [],
           artista:[],
           albums:[],
           genres:[],
           textoBoton: "Agregar a favoritos",

        }
        console.log(this.state.id)
    }

    componentDidMount(){
        let arrayFavoritosAlbums = []
        let recuperoStorageAlbums = localStorage.getItem('favoritos');
        
        if(recuperoStorageAlbums !== null){
            arrayFavoritosAlbums = JSON.parse(recuperoStorageAlbums);

           if(arrayFavoritosAlbums.includes(this.state.id)){
             this.setState({
                 textoBoton: 'Quitar de favoritos'
             })
           }    
        }

       
        let url = `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${this.state.id}`
        fetch(url)
            .then(response => response.json())
            .then((data) => this.setState(
                {
                    albums:data,
                    artista:data.artist,
                    canciones:data.tracks.data,
                    genres:data.genres.data
                 }
                    
            ))
            .catch(error => console.log( error))
    }
    agregarAFavoritosAlbum(id){
        
        // Agregar un id dentro de array y colocar ese array en localStorage
        let arrayFavoritosAlbums = []
        let recuperoStorageAlbums = localStorage.getItem('favoritosAlbums');
        
        if(recuperoStorageAlbums !== null){
            arrayFavoritosAlbums = JSON.parse(recuperoStorageAlbums);   
        }
           
        if(arrayFavoritosAlbums.includes(id)){
            //Si el id está en el array queremos sacar el id.
            arrayFavoritosAlbums = arrayFavoritosAlbums.filter( unId => unId !== id);

            this.setState({
                textoBoton: "Agregar a Favoritos"
            })
        } else {
            arrayFavoritosAlbums.push(id);
            this.setState({
                textoBoton: "Quitar de favoritos"
            })
        }

        //Subirlo a local storage stringifeado
        let arrayFavoritosAlbumsAString = JSON.stringify(arrayFavoritosAlbums)
        localStorage.setItem('favoritosAlbums', arrayFavoritosAlbumsAString)

        console.log(localStorage)
    }

    






    render(){
        return(
            <React.Fragment >           
                {this.state.canciones.length === 0 ?
                    <h2> CARGANDO...</h2>:

                     <section class="detallesmargen">
                        <article class="albumscontenedor">
                            <img class="fotoalbum" src={this.state.albums.cover_big}></img>
                            <div class="descrpcionalbum">
                                <h1 class="tituloAlbum">{this.state.albums.title}</h1>
                                <h2>{this.state.artista.name}</h2>
                                <h3> Genero:</h3>
                                {this.state.genres.map((genero,i) =>(
                                    <div key={genero + i}>
                                        <p>{genero.name}</p>
                                    </div>
                                ))}
                                <h3> Fecha de lanzamiento:</h3>
                                <p>{this.state.albums.release_date}</p>

                                <h3>Listado de canciones:</h3>
                                {this.state.canciones.map((cancion, i) => (
                                <div key={cancion + i}>
                                    <ul><li class="listaContenido" >{cancion.title}</li></ul>
                                </div>
                                ))}
                            {/* <button type="submit">Agregar a favoritos</button> */}
                            { <button class="botonFavs" onClick={()=>this.agregarAFavoritosAlbum(this.state.id)}>{this.state.textoBoton}</button> }
                        
                            </div>
                        </article>
                    </section>
                
                }
           </React.Fragment>

        )
    }

}

export default Album;