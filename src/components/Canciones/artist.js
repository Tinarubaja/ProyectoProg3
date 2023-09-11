import React, {Component} from 'react';
import CardArtista from "../CardArtista";
import Header from './Header';
import Footer from './Footer';

class Artist extends Component{
    constructor(props){
        super(props)
        this.state={
           id: Number(props.match.params.id),
           canciones: []
        }
        console.log(this.state.id)
    }

    componentDidMount(){
        // let canciones1 = []
        let url = `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/artist/${this.state.id}`
        fetch(url)
            .then(response => response.json())
            .then((data) => this.setState(
                {
                    canciones:data
                    
                 }
                    
            ))
            .catch(error => console.log('El error es' + error))
            console.log(this.state.canciones)
    }
    

    render(){
        return(
            <React.Fragment >
                <Header/>
                {this.state.canciones === 0?
                <h3>Cargando..</h3>:(<section>
           {/* {this.state.canciones.map((detalleC, idx) => <CardArtista key={detalleC + idx} datosDetalle={detalleC} />)} */}
           
            
                
                     <section>
                        <img src={this.state.canciones.picture} />
                        <h2>{this.state.canciones.name}</h2>
                        {/* {/* <p>Nombre del disco: {this.state.album.title}</p>
                        <p>Listado de canciones:</p>
                        {this.state.album.tracks.data.map((cancion, i) => (
                            <div key={cancion + i}>
                                <ul ><li >{cancion.title}</li></ul>
                            </div> */}

                        
                        {/*  Agregar a favoritos*/}
                    </section>
                    </section>)}
                

            
        
    


           </React.Fragment>

        )
    }

}


// function Artist(){
//     return(
//         <div>
//             <h2>hola soy el componente</h2>
//         </div>
//     )
// }






<Footer/>

export default Artist