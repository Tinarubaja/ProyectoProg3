import React, { Component } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import CardAlbum from "../../Cards/CardAlbum/CardAlbum";
import CardCancionHome from "../../Cards/CardCancionHome";
import "./Favoritos.css";


class Favoritos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listadoCanciones: [],
            listadoAlbums: [],
        }
    }

    componentDidMount() {
        let favoritos = JSON.parse(localStorage.getItem("favoritos"))

        if (favoritos == null) {
            favoritos = []
        }

        let listadoCanciones = favoritos.filter(fav => fav.duracion !== null)
        let listadoAlbums = favoritos.filter(fav => fav.duracion === null)

        this.setState({
            listadoCanciones: listadoCanciones,
            listadoAlbums: listadoAlbums
        })

        console.log(listadoCanciones)
        console.log(listadoAlbums)
    }

    render() {
        return (
            <>
                
                <main>
                    <h1>Canciones favoritas</h1>
                    {
                        this.state.listadoCanciones.map((cancion, i) =>
                        <CardCancionHome
                        key={i} 
                        title = {cancion.title} 
                        link={cancion.id}
                         id= {cancion.id} 
                         duration={cancion.duration}
                          rank={cancion.rank}
                        // id={cancion.id} 
                        // titulo={cancion.titulo} 
                        // foto_album={cancion.foto_album} 
                        // nombre_artista={cancion.nombre_artista} 
                        // titulo_album={cancion.titulo_album} 
                        // duracion={cancion.duracion} 
                        // ranking={cancion.ranking} 
                        />
                        )
                    }
                    <h1>Albumes favoritos</h1>
                    {
                        this.state.listadoAlbums.map((album, i) =>
                        <CardAlbum
                        key={i} 
                        title = {album.title} 
                        cover_big={album.cover_big} 
                        link={album.id} 
                        id ={album.id}
                        duration={album.duration}
                        position={album.position}
                        record_type= {album.record_type}
                        // id={album.id} 
                        // titulo={album.titulo} 
                        // foto_album={album.foto_album} 
                        // nombre_artista={album.nombre_artista} 
                        // titulo_album={album.titulo_album} 
                        // duracion={album.duracion} 
                        // ranking={album.ranking} 
                        />
                        )

                    }
                </main>
                
            </>
        )
    }
}

export default Favoritos;