import React, {Component} from "react";
import {Link} from 'react-router-dom';
class Header extends Component{
    constructor(){
        super();
        this.state = {
        }
    }
    

render(){
    console.log("Me monté");
    console.log(this.state)
    return(
        <React.Fragment>
    <header class="navbar">
        <div class="logo">
            <a href="index.html"><h2 class="logotexto">R-A-T</h2></a>
        </div>

        <input type="checkbox" id="toggler"></input>
        <label for="toggler"><i class="fa-solid fa-bars "></i></label>
        
        <div class="menu">
            <ul class="list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Artist">Artist</Link></li>
            <li><Link to="/Generos">Generos</Link></li>
            <li><Link to="/Playlist">Playlist</Link></li>
            <li><Link to="/Songs">Songs</Link></li>
            <li><Link to="/VerTodas">Ver Todas</Link></li>

            <li>
                <form method="get" action="search-results.html">
                    <input class="busqueda" type="search" name ="q" placeholder="Buscar"></input>
                    <button><i class="fa-solid fe-search"></i></button> 
                </form>
            </li>

            </ul>
        </div>
    </header>
    </React.Fragment>
    )
 }
}
export default Header