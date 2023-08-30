let queryString = location.search; //obtengo la qs
let qsToObject = new URLSearchParams(queryString); //Un objeto literal basado en la qs
let idArtista = qsToObject.get('q'); //obtengo el id

 
let urlDetalleArtista =`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${idArtista}?`;

fetch(urlDetalleArtista)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        let name = document.querySelector('.titulosdetalleh3');
        let image = document.querySelector('img');
        let cantidadDeFans = document.querySelector('.fans');

        cantidadDeFans.innerHTML = `<p>Fans ${data.nb_fan}</p>`
        name.innerHTML = data.name;
        image.src= data.picture_big;

    })
    .catch(function(error){
        console.log(error)
    })

    let urlDetalleArtistaAlbum =`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${idArtista}/albums`;
    
fetch(urlDetalleArtistaAlbum)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let info = data.data;

        let albumList = document.querySelector('.olDeArtistaDetalle');
        let contenido = "";

        for(let i=0; i<5; i++){
            //construir un elemento de lista

            contenido += ` <li class="top5">
                                <a href="detail-album.html?q=${info[i].id}"><h4>${info[i].title}</h4></a>
                            </li>` 
        }

        console.log(contenido);

        albumList.innerHTML += contenido;

    })
    .catch(function(error){
        console.log(error);
    })