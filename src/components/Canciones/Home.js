import React, {Component} from "react";
import CardAlbum from "../CardAlbum";
class Home extends Component{
    constructor(){
        super();
        this.state = {
            albums:[]

        }
    }

componentDidMount(){
    console.log("En componentDidMount");

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums")
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
                {this.state.albums.map((album,idx) => <CardAlbum title = {album.title}/>) }
                <p>Nombre del Personaje: {this.state.albums.title}</p>
            </section>
            
       


            <section class="artistasgeneral" id="artist">
            <h2 class="titulosindex">Artist</h2>

            </section>
        </div>
       
    )
}
}



export default Home;