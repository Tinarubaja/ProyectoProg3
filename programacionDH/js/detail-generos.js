let queryString = location.search; //obtengo la qs
let qsToObject = new URLSearchParams(queryString); //Un objeto literal basado en la qs
let idGenerosDetail = qsToObject.get('q'); //obtengo el id

 
let urlGenerosDetail =`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${idGenerosDetail}?`;

fetch(urlGenerosDetail)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        let name = document.querySelector('.titulosdetalleh3');
        let image = document.querySelector('img');

       // cantidadDeFans.innerText = data.nb_fan;
        name.innerText = data.name;
        image.src= data.picture_medium;

    })
    .catch(function(error){
        console.log(error)
    })

//----------------------------------------------------------------------
//----------------------------------------------------------------------
let urlArtistasGeneros =`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${idGenerosDetail}/artists`;

fetch(urlArtistasGeneros)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);

        let info = data.data;

        let artistasGeneros = document.querySelector('.listagenerosartistas');
        let contenido = "";

        for(let i=1; i<info.length; i++){
            //construir un elemento de lista

            contenido += `<div class="generosdetallelista"> 
                            <a href="detail-artist.html?q=${info[i].id}">
                                <img  class="imgartistaspop" src="${info[i].picture}" alt="">
                            </a>
                            <p><a href="detail-artist.html?q=${info[i].id}">${info[i].name}</a></p>
                          </div>`
        }

        console.log(contenido);

        artistasGeneros.innerHTML += contenido;

    })
    .catch(function(error){
        console.log(error)
    })
