import React, {Component} from 'react';
//import Footer from './Footer';
import CardAlbum from '../CardAlbum';
import Filtro from './Filtro';

class VerTodasAlbum extends Component{
    constructor(){
        super()
        this.state={
            albums:[]
            
        }

    }
    componentDidMount(){
        let url = `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums&top?limit=10`
        console.log(url)
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState(
                {
                    albums:data.data
                 }
                    
            ))
            .catch(error => console.log('El error es' + error))
            console.log(this.state.albums)
    }
    //preventDefault(event){
        //event.preventDefault()
    //}
    FiltrarFormulario= (textoAFiltrar)=>{
        let formularioFiltrado = this.state.albums.filter(function(unAlbum){
            return unAlbum.title.includes(textoAFiltrar)

         
        })
        this.setState({
            albums: formularioFiltrado,
            // filtro:textoAFiltrar.target.value
            

        })
        console.log(this.setState)
    }
    render(){
        console.log("Me monté render");
        console.log(this.state)
        
        return(
            <section class="albumsgeneral" id="album">
                <Filtro filtrar={this.FiltrarFormulario}></Filtro>
                    <h2>Albums</h2>
                        {this.state.albums.map(function(unAlbum){
                            return <CardAlbum key={unAlbum.id} title = {unAlbum.title} id={unAlbum.id}/>
                            })
                        }
            </section>   
        )
    }
}
export default VerTodasAlbum;