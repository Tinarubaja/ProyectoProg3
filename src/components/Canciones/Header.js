import React, {Component} from "react";
import {Link} from 'react-router-dom';
import Formulario from "./Formulario";
class Header extends Component{
    constructor(){
        super();
        this.state = {
        };
    }

render(){
    console.log("Me monté");
    console.log(this.state)
    return(
        <React.Fragment>
    <header class="navbar">
        <div class="logo">
            <Link to="/"><h2 class="logotexto">RAT</h2></Link>
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
                <Formulario></Formulario>
            </li>

            </ul>
        </div>
    </header>
    </React.Fragment>
    )
 }
}
export default Header