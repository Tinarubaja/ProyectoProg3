import React, {Component} from "react";
class Home extends Component{
    constructor(){
        super();
        this.state = {
            elemento:{}
        }
    }

componentDidMount(){
    console.log("En componentDidMount");

    fetch("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/genre/3")
    .then(response => response.json())
    .then( data => this.setState({
        elemento: data
    }))
    .catch(e => console.log(e))
}


componentDidUpdate(){
    console.log("En componentDidUpdate");
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
                <p>Nombre del Personaje: {this.state.elemento.name}</p>
            </section>
        </div>
       
    )
}
}



export default Home;