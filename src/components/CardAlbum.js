import React, {Component} from 'react';
import Albums from './Canciones/Albums';

function CardAlbum(props){
    return(
        <div>
            <h2>{props.title}</h2>
        </div>
    )
}

export default CardAlbum;