import React, {Component} from 'react';

function CardArtista(props){
    return(
        <div class= "cardalbum">
            <a>
                <img src={props.picture} alt ="foto"/>
                <div class="containeralbum">
                    <h2>{props.name}</h2>
                </div>
                <button type='submit'>agregar a favoritos</button>              
                <button type='submit'>Ver mas</button>              
                <p><button type='submit'>Ir a detalle</button></p>     

            </a>
        </div>
    )
}

export default CardArtista;