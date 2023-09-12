import React, {Component} from 'react';
import Footer from './Footer';
import CardAlbum from '../CardAlbum';
import Filtro from './Filtro';

class VerTodasAlbum extends Component{
    constructor(props){
        super(props)
        this.state={
            albums:[],
            filtro:""
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
    //preventDefault(event){
        //event.preventDefault()
    //}
    FiltrarFormulario(textoAFiltrar){
        let formularioFiltrado = this.state.albums.filter(function(form){
            return form.title.includes(textoAFiltrar)

         
        })
        this.setState({
            albums: formularioFiltrado
            // filtro:textoAFiltrar.target.value
        })
    }
    render(){
        return(
            <section>
            <Filtro/>
            

            <section class="albumsgeneral" id="album">
                    <h2>Albums</h2>
                     <div class="albums">
                        {this.state.albums.map(function(form){return <CardAlbum key={form.id}title = {form.title} cover={form.cover} link={form.id} id ={form.id}/>})}
                     
                    </div>               
                </section>
                </section>
            
        )
    }
}
export default VerTodasAlbum;