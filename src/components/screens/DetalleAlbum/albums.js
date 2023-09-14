import React, {Component} from 'react';
import "./DetalleAlbum.css"
class Album extends Component{
    constructor(props){
        super(props)
        this.state={
           id: Number(props.match.params.id),
           canciones: [],
           artista:[],
           album:[],
           genres:[]
        }
        console.log(this.state.id)
    }

    componentDidMount(){
        // let canciones1 = []
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
            .catch(error => console.log('El error es' + error))
            console.log(this.state.albums)
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
                            { <button class="botonFavs" onClick={()=>this.anadirFav(this.props.albums.id)}>añadir a Favoritos</button> }
                        
                            </div>
                        </article>
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








export default Album;