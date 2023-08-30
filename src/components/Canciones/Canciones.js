import react, {Component} from "react";
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
        <section>
            <p>Nombre del Personaje: {this.state.elemento.name}</p>
            
        </section>
    )
}
}



export default Home;