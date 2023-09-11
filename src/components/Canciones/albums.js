import React, {Component} from 'react';

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
                     <section>
                        <h2>{this.state.albums.title}</h2>
                        <h2>{this.state.artista.name}</h2>
                        <p>Nombre genero:</p>
                        {this.state.genres.map((genero,i) =>(
                            <div key={genero + i}>
                                <ul><li>{genero.name}</li></ul>
                            </div>
                        ))}
                        <img src={this.state.albums.cover}></img>
                        <h2>{this.state.albums.release_date}</h2>
                        <p>Listado de canciones:</p>
                        {this.state.canciones.map((cancion, i) => (
                            <div key={cancion + i}>
                                <ul ><li >{cancion.title}</li></ul>
                            </div>
                        ))}
                        <button type="submit">Agregar a favoritos</button>
                       
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