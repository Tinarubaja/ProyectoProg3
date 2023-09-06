import React, {Component} from 'react';
import Albums from './Canciones/Albums';

function CardAlbum(props){
    return(
        <div class= "cardalbum">
            <a>
                <img src={props.cover} alt ="foto"/>
                <div class="containeralbum">
                    <h2>{props.title}</h2>
                </div>
                <button type='submit'>agregar a favoritos</button>              
                <button type='submit'>Ver mas</button>              
                <p><button type='submit'>Ir a detalle</button></p>          

            </a>
        </div>
    )
}

export default CardAlbum;