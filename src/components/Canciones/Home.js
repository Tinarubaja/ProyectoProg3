import React, {Component} from "react";
import CardAlbum from "../CardAlbum";
import CardArtista from "../CardArtista";
class Home extends Component{
    constructor(){
        super();
        this.state = {
            albums:[],
            artista :[],
           // boton : false
        }
    }

componentDidMount(){
    console.log("En componentDidMount");

    fetch("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=5")
    .then(response => response.json())
    .then( data => this.setState(
        this.state.albums= data.data
        //this.state.artista= data.artist
    ))
    .catch(e => console.log(e))

    fetch("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/artists&top?limit=5")
    .then(response => response.json())
    .then( data => this.setState(
        this.state.artista= data.data,
        console.log(data)
    ))
    .catch(e => console.log(e))
}


componentDidUpdate(){
    console.log(this.state.albums)
    console.log(this.state.artista)
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
                        {this.state.albums.map((album,idx) => <CardAlbum key={album + idx}title = {album.title} cover={album.album.cover}/>)}
                        
                    </div>               
                </section>

                <section class="artistasgeneral" id="artist">
                    <h2 class="titulosindex">Artist</h2>

                    <div class="artistas">
                    
                    {this.state.artista.map((artista,idx) => <CardArtista key={artista + idx}name = {artista.name} picture={artista.picture}/>)}


                    </div>
                </section>

        </div>
       
    )
}
}



export default Home;