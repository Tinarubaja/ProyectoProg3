let queryString = location.search; //obtengo la qs
let qsToObject = new URLSearchParams(queryString); //Un objeto literal basado en la qs
let idAlbum = qsToObject.get('q'); //obtengo el id

 

let urlDetalleAlbum =`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${idAlbum}?`;

fetch(urlDetalleAlbum)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);

//-------------NOMBRE DEL ALBUM, ARTISTA, FECHA DE PUBLICACION Y FOTO--------------------------

        let name = document.querySelector('.titulosdetalleh3');
        let image = document.querySelector('img');
        let date = document.querySelector('.fecha');
        let nombreArtista = document.querySelector('.nombreArtista');

        //let genero = document.querySelector('.genero');
       // cantidadDeFans.innerText = data.nb_fan;
        name.innerText = data.title;
        image.src= data.cover_big;
        date.innerText = data.release_date;
        nombreArtista.innerHTML += `<a href="detail-artist.html?q=${data.artist.id}">${data.artist.name}</a>`;


//----------------------------GENERO-----------------------------------------
        let info = data.genres.data;

        //capturar el contenedor de lista
        let genero = document.querySelector(".genero");
        let contenido = "";

        //Los elementos están en un array y para obtenerlos hay recorrerlo.
        for(let i=0; i<info.length; i++){
            //construir un elemento de lista
            contenido += `<a href="detail-generos.html?q=${data.genre_id}">${info[i].name}</a>`
        }
        console.log(contenido);
        
        genero.innerHTML += contenido;



//-------------------------LISTA DE CANCIONES DEL ALBUM-----------------------------------------------------

        let infoCanciones = data.tracks.data;

        //capturar el contenedor de lista
        let cancioneslist = document.querySelector(".lista");
        let contenidoCanciones = "";

        //Los elementos están en un array y para obtenerlos hay recorrerlo.
        for(let i=0; i<infoCanciones.length; i++){
            //construir un elemento de lista
            contenidoCanciones += `<li class="listadecancionesalbum">
                                        <a href="detail-track.html?q=${infoCanciones[i].id}">
                                            <h4>${infoCanciones[i].title}</h4>
                                        </a>
                                   </li>`
        }
        console.log(contenidoCanciones);

        cancioneslist.innerHTML += contenidoCanciones;


//------------------------------------------------------------------------------

    })
    .catch(function(error){
        console.log(error)
    })




    