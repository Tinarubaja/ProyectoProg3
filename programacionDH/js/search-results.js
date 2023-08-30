
let query = location.search
let objetoQuery = new URLSearchParams(query)
let busqueda = objetoQuery.get('q')

let proxy = 'https://cors-anywhere.herokuapp.com/'
let endpoint = 'https://api.deezer.com/search?q='

fetch(`${proxy}${endpoint}${busqueda}`)
    .then(function(response) {return response.json()})
    .then(function(data) {
        

        let titulo = document.querySelector(".titulosdetalles")
        let ul = document.querySelector(".lista-resultado-busqueda")

        if (data.data.length > 0 && data.data.length < 5) {
            for (let i = 0; i < data.data.length; i++) {

                titulo.innerText = "Resultados para esta busqueda"
                ul.innerHTML += `<li>
                    <a href="detail-album.html?q=${data.data[i].album.id}"><img src="${data.data[i].album.cover_medium}" alt=""/></a>
                    <a href="detail-track.html?q=${data.data[i].id}"><p>${data.data[i].title_short}</p></a>
                    <a href="detail-artist.html?q=${data.data[i].artist.id}"><p>${data.data[i].artist.name}</p></a>
                </li`
            }
        } else if (data.data.length > 5) {
            for (let i = 0; i < 5; i++) {
                titulo.innerText = "Resultados para esta busqueda"
                ul.innerHTML += `<li>
                    <a href="detail-album.html?q=${data.data[i].album.id}"><img src="${data.data[i].album.cover_medium}" alt=""/></a>
                    <a href="detail-track.html?q=${data.data[i].id}"><p>${data.data[i].title_short}</p></a>
                    <a href="detail-artist.html?q=${data.data[i].artist.id}"><p>${data.data[i].artist.name}</p></a>
                </li`
            }
        } else {
            titulo.innerText = "No hay resultados para esta busqueda"
        }

    })
    .catch(function(error) {console.log(error)})
