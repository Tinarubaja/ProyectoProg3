import React, {Component} from 'react';
import Footer from './Footer';
import CardAlbum from '../CardAlbum';
import Filtro from './Filtro';

class VerTodasAlbum extends Component{
    constructor(props){
        super(props)
        this.state={
            albums:[]
        }

    }
    componentDidMount(){
        let url = `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums&top?limit=10`
        console.log(url)
        fetch(url)
            .then(response => response.json())
            .then((data) => this.setState(
                {
                    albums:data.data
                 }
                    
            ))
            .catch(error => console.log('El error es' + error))
            console.log(this.state.albums)
    }
    FiltrarFormulario(textoAFiltrar){
        let formularioFiltrado = this.state.albums.filter(function(form){
            return form.title.includes(textoAFiltrar)
        })
        this.setState({
            albums: formularioFiltrado
        })
    }
    render(){
        return(
            <section>
            <Filtro/>

            <section class="albumsgeneral" id="album">
                    <h2>Albums</h2>
                     <div class="albums">
                        {this.state.albums.map((album,idx) => <CardAlbum key={album + idx}title = {album.title} cover={album.cover} link={album.id} id ={album.id}/>)}
                     
                    </div>               
                </section>
                </section>
            
        )
    }
}
export default VerTodasAlbum;