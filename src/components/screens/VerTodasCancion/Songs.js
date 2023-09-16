import React, {Component} from 'react';
import Footer from "../../Footer/Footer";
import CardCancionHome from '../../Cards/CardCancionHome';
import Filtro from '../../Formulario/Filtro';
import "./VerTodasCancion.css"

class Songs extends Component{
    constructor(){
        super()
        this.state={
            canciones:[],
            cancionesFiltradas: []
            
        }

    }
    componentDidMount(){
        let url = `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10`
        console.log(url)
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState(
                {
                    canciones:data.data
                 }
                    
            ))
            .catch(error => console.log(error))
            console.log(this.state.canciones)
    }
    
    FiltrarFormulario= (textoAFiltrar)=>{console.log(textoAFiltrar)
        let formularioFiltrado = this.state.canciones.filter(function(unaCancion){
            return unaCancion.title.toLowerCase().includes(textoAFiltrar.toLowerCase())

         
        })
        this.setState({
            cancionesFiltradas: formularioFiltrado,
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
                    <h2 className='titulosindex'>Canciones</h2>
                    <Filtro filtrar={this.FiltrarFormulario}></Filtro>
                </section>
                {this.state.canciones.length === 0 ?
                    <h2 className='cargando'> CARGANDO...</h2>:
                    
                    <section class="artistas" id="album">
                        {(this.state.cancionesFiltradas.length === 0? this.state.canciones : this.state.cancionesFiltradas).map(function(unaCancion){
                            return <CardCancionHome title = {unaCancion.title}  id= {unaCancion.id} duration={unaCancion.duration} rank={unaCancion.rank} picture_big={unaCancion.artist.picture_big}/>
                            })
                        }
                    </section> 
                }
            </section>  
        )
    }
    
}
<Footer/>
//export default Songs;
















export default Songs