import React, {Component} from "react";
import CardAlbum from "../CardAlbum";
import CardArtista from "./CardArtista";
class Home extends Component{
    constructor(){
        super();
        this.state = {
            albums:[],
            artista :[]

        }
    }

componentDidMount(){
    console.log("En componentDidMount");

    fetch("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10")
    .then(response => response.json())
    .then( data => this.setState(
        this.state.albums= data.data
    
    
    ))
    .catch(e => console.log(e))
}


componentDidUpdate(){
    console.log(this.state.albums)
}


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

            <section>
                <h2>Albumes mas populares</h2>
                {this.state.albums.map((album,idx) => <CardAlbum title = {album.title}/>)}
                <h2>Artistas del momento</h2>
                <button type='submit'>Ver Mas</button>
                
            </section>
            
       


            <section class="artistasgeneral" id="artist">
            <h2 class="titulosindex">Artist</h2>

            </section>
        </div>
       
    )
}
}



export default Home;