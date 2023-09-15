import React, {Component} from 'react';
import Footer from "../../Footer/Footer";
import CardAlbum from "../../Cards/CardAlbum/CardAlbum";
import Filtro from '../../Formulario/Filtro';
import "./VerTodasAlbum.css"

class VerTodasAlbum extends Component{
    constructor(){
        super()
        this.state={
            albums:[],
            albumsFiltrados: []
            
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
    FiltrarFormulario= (textoAFiltrar)=>{console.log(textoAFiltrar)
        let formularioFiltrado = this.state.albums.filter(function(unAlbum){
            return unAlbum.title.toLowerCase().includes(textoAFiltrar.toLowerCase())

         
        })
        this.setState({
            albumsFiltrados: formularioFiltrado,
            // filtro:textoAFiltrar.target.value
            

        })
        console.log(this.setState)
    }
    render(){
        console.log("Me monté render");
        console.log(this.state)
        
        return(
            <section>
                <section className='tituloyfiltro'>
                <h2 class='titulosindex'>Albums</h2>
                <Filtro classname='filtro' filtrar={this.FiltrarFormulario}></Filtro>
                </section>
                

                <section class="artistas" id="album">

                        {(this.state.albumsFiltrados.length === 0? this.state.albums : this.state.albumsFiltrados).map(function(unAlbum){
                            return <CardAlbum key={unAlbum.id} title = {unAlbum.title} id={unAlbum.id} cover_big = {unAlbum.cover_big} duration={unAlbum.duration} position={unAlbum.position} record_type= {unAlbum.record_type}/>
                            })
                        }
                 </section>  


            </section>
 
        )
    }
    
}
<Footer/>
export default VerTodasAlbum;