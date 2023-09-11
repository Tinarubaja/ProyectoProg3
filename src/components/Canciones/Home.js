import React, {Component} from "react";
import CardAlbum from "../CardAlbum";

import {Link} from 'react-router-dom';
import CardCancionHome from "../CardCancionHome";
class Home extends Component{
    constructor(){
        super();
        this.state = {
            albums:[],
            canciones :[],
           // boton : false
        }
    }

componentDidMount(){
    console.log("En componentDidMount");

    fetch("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums&top?limit=5")
    .then(response => response.json())
    .then( data => this.setState(
        this.state.albums= data.data
        //this.state.artista= data.artist
    ))
    .catch(e => console.log(e))

    fetch("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=5")
    .then(response => response.json())
    .then( data => this.setState(
        this.state.canciones= data.data,
        console.log(data)
    ))
    .catch(e => console.log(e))
}
busqueda(){
    fetch(`https://api.deezer.com/chart/artist&top?=${this.state.valor}`)
    .then(response => response.json())
    .then(data => this.setState(
        {
            busqueda:data.results,
        }
    ))
    .catch(error => console.log(error))
}
evitarSubmit(event){
    event.preventDefault();
}
controlarCambios(event){
    this.setState({valor:event.target.value},
        ()=> this.busqueda()
        )
}
render(){
    return(
        <form onSubmit={(event)=> this.evitarSubmit(event)}>
            <label>Buscador</label>
            <input type='text' onChange={(event)=> this.controlarCambios(event)} value={this.state.valor}/>
        </form>
    )
}

componentDidUpdate(){
    console.log(this.state.albums)
    console.log(this.state.canciones)
}
//verMas(){
  //  this.setState({ boton:true})
//}
//verMenos(){
//    this.setState({ boton:false})
   
//}

render(){
    console.log("Me monté");
    console.log(this.state)
    return(
        <div>
            <section class="tituloprincipalyfoto">
            <div class="tituloprincipal">
                <h1>Let's explore the world of <span class="music">Music!</span></h1>
            </div>
            </section>


        
                <section class="albumsgeneral" id="album">
                    <h2 class="titulosindex">Albums</h2>

                     <div class="albums">
                        {this.state.albums.map((album,idx) => <CardAlbum key={album + idx}title = {album.title} cover={album.cover}/>)}
                        
                        {this.state.albums.map((album,idx) => <CardAlbum key={album + idx}title = {album.title} cover={album.album.cover}/>)}
                     
                    </div>               
                </section>

                <section class="artistasgeneral" id="artist">
                    <h2 class="titulosindex">Canciones</h2>
                    <div class="artistas">
                    {this.state.canciones.map((cancion,idx) => <CardCancionHome key={cancion + idx}title = {cancion.title} link={cancion.id} id= {cancion.id} /> )}
                    </div>
                </section>

        </div>
       
    )
}
}


<Footer/>
export default Home;