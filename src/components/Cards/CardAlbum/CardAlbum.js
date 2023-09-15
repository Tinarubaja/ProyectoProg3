import React, {Component} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import "./CardAlbum.css"
class CardAlbum extends Component{
    constructor(props){
        super(props); 
        this.state={
            boton:false,
            favoritosAlbum:[],
            textoBoton: "Agregar a favoritos"
        }
    }
    verMas(){
        this.setState({boton:true})

    }
    verMenos(){
        this.setState({boton:false})
    }

    componentDidMount(){
        let arrayFavoritosAlbum = []
        let recuperoStorageAlbums = localStorage.getItem('favoritosAlbums');
        
        if(recuperoStorageAlbums !== null){
            arrayFavoritosAlbum = JSON.parse(recuperoStorageAlbums);

           if(arrayFavoritosAlbum.includes(this.props.id)){
             this.setState({
                 textoBoton: 'Quitar de favoritos'
             })
           }    
        }

    }
    agregarAFavoritosAlbums(id){
        // Agregar un id dentro de array y colocar ese array en localStorage
        let arrayFavoritosAlbum = []
        let recuperoStorageAlbums = localStorage.getItem('favoritosAlbums');
        
        if(recuperoStorageAlbums !== null){
            arrayFavoritosAlbum = JSON.parse(recuperoStorageAlbums);   
        }
           
        if(arrayFavoritosAlbum.includes(id)){
            //Si el id está en el array queremos sacar el id.
            arrayFavoritosAlbum = arrayFavoritosAlbum.filter( unId => unId !== id);

            this.setState({
                textoBoton: "Agregar a Favoritos"
            })


        } else {
            arrayFavoritosAlbum.push(id);
            this.setState({
                textoBoton: "Quitar de favoritos"
            })
        }

        //Subirlo a local storage stringifeado
        let arrayFavoritosAlbumsAString = JSON.stringify(arrayFavoritosAlbum)
        localStorage.setItem('favoritosAlbums', arrayFavoritosAlbumsAString)

        console.log(localStorage)
    }


    render(){
        return(
                <section class="card">
                    <Link to={`/Albums/${this.props.id}`}>
                        <img src={this.props.cover_big}/>
                        <h4>{this.props.title}</h4>
                    </Link>
                    <button  class="botonFavsAlbum" onClick={()=>this.agregarAFavoritosAlbums(this.props.id)}  type="button">{ this.state.textoBoton }</button>

                    {this.state.boton !== false?
                        <div class="container">
                            <button class="botonVermasMenos" onClick={()=>this.verMenos()}>Ver menos</button>
                            <p>Descripcion:</p>
                    {
                        this.props.duration !== null ?
                        <>
                            
                            <p> Record type: {this.props.record_type}</p>
                            <p>Position: {this.props.position}</p>
                        </> :
                            <p>Explicit lyrics: {this.props.explicit_lyrics}</p>
                                }
                            
                        </div>
                        :
                        <button  class="botonVermasMenos" onClick= {()=> this.verMas()}> Ver mas</button>
                    }
                </section>
        )
    }

}
export default CardAlbum;



        


    