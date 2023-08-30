
let urlGeneros =`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre`;

fetch(urlGeneros)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);

        let info = data.data;

        let generos = document.querySelector(".albums");
        let contenido = "";

        for(let i=1; i<info.length; i++){
            //construir un elemento de lista

            contenido += `<div class="cardgenero">
                            <a href="detail-generos.html?q=${info[i].id}">
                                <img src="${info[i].picture_medium}" alt=""> 
                                <h4><b>${info[i].name}</b></h4>  
                            </a> 
                          </div>`
        }

        console.log(contenido);

        generos.innerHTML += contenido;

    })
    .catch(function(error){
        console.log(error)
    })
