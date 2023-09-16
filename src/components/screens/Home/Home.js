import React, {Component} from "react";
import Footer from "../../Footer/Footer";
import "./Home.css"
import {Link} from 'react-router-dom';
import CardCancionHome from "../../Cards/CardCancionHome";
import CardAlbum from "../../Cards/CardAlbum/CardAlbum";

class Home extends Component{
    constructor(){
        super();
        this.state = {
            albums:[],
            canciones :[]
        }
    }

componentDidMount(){
    console.log("En componentDidMount");

    fetch("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums&top?limit=5")
    .then(response => response.json())
    .then( data => this.setState(
        this.state.albums= data.data,
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


componentDidUpdate(){
    console.log(this.state.albums)
    console.log(this.state.canciones)


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
                    <section class="artistasgeneral" id="artist">
                        <Link to="/VerTodas"><h2 class="titulosindex">Albums</h2></Link>
                        <Link to="/VerTodas"><h2>Ver todos</h2></Link>
                        
                        <div class="artistas">
                            {this.state.albums.map((album,idx) => <CardAlbum key={album + idx}title = {album.title} cover_big={album.cover_big} link={album.id} id ={album.id} duration={album.duration} position={album.position} record_type= {album.record_type}/>)}
                        </div>               
                    </section>

                    <section class="artistasgeneral" id="artist">
                    <Link to="/Songs"><h2 class="titulosindex">Canciones</h2></Link>
                    <Link to="/Songs"><h2>Ver todas</h2></Link>
                        <div class="artistas">
                            {this.state.canciones.map((cancion,idx) => <CardCancionHome key={cancion + idx}title = {cancion.title} link={cancion.id}
                             id= {cancion.id} duration={cancion.duration} rank={cancion.rank} picture_big={cancion.artist.picture_big}/> )}
                        </div>
                    </section>

            </div>
        
        )
    }
}


<Footer/>
export default Home;