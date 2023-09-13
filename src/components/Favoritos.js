import React, {Component} from 'react';
import CardAlbum from './CardAlbum';


class Favoritos extends Component{
    constructor(){
        super();
        this.state = {
            albums:[],
            textoBoton:"agregar a favoritos"
        }
    }
    agregarAFavoritos(id){
        // agregar un id adentro de array y colocar ese array en localstorage
        let arrayFavoritos=[]
        arrayFavoritos.push(id)
        // subirlo local storage stringifiado
        let arrayFavoritosAString = JSON.stringify(arrayFavoritos)
        localStorage.setItem('favoritos', arrayFavoritos)

        this.setState({
            textoBoton:'quitar de favoritos'
        })

    }

    componentDidMount(){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            favoritos = JSON.parse(recuperoStorage) 
            let albumOk = [];

            favoritos.forEach(unIdFavorito => { //aca busco el id 
                let url = `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${unIdFavorito}`
                fetch(url)
                    .then(response => response.json())
                    
                    .then((data) => this.setState(
                        {
                            albums: AlbumOk.push(data) }
                            
                    ))
                    .catch(error => console.log('El error es' + error))
                  
            }) 
            
        }
}

borrar(id){
    //Tiene que agegar un id dentro de un Array y guardarlo en localstorage.
    // Si el id ya existe ofrecer al usuario la posibilidad de quitar el id del array de favoritos.
    let favoritos = [];
    let recuperoStorage = localStorage.getItem('favoritos')

    if(recuperoStorage !== null){
        let favoritosToArray = JSON.parse(recuperoStorage);
        favoritos = favoritosToArray
    }

    //Preguntemos si el id ya está en el array.
    if(favoritos.includes(id)){ 
        favoritos = favoritos.filter(unId => unId !== id);
        this.setState({
        albums: this.state.albums.filter(unAlbum => unAlbum.id !== id) 
        })
    }


    let favoritosToString = JSON.stringify(favoritos);
    localStorage.setItem('favoritos', favoritosToString);

    console.log(localStorage); // aca veo que me trae el storage

}

    
        render(){
            return(
                <React.Fragment>
                    <h2 >Mis albums favoritos</h2>
                     <section >
                     {this.state.albums.map((unAlbum, idx) => <CardAlbum key={unAlbum + idx} datosPeli={unAlbum} borrar={(AlbumFiltro)=> this.borrar(AlbumFiltro)} />)} 
                     </section>
                </React.Fragment>
            )
        }
    
            

    }


export default Favoritos;