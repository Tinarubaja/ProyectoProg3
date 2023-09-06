import React, {Component} from 'react';
import Albums from './Canciones/Albums';

function CardAlbum(props){
    return(
        <div>
            <h2>{props.title}</h2>
            <img src={props.cover} alt ="foto"/>
        </div>
    )
}

export default CardAlbum;