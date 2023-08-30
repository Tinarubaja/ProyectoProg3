
let recupero_storage = localStorage.getItem('canciones_favoritas')
let array_recupero_storage = JSON.parse(recupero_storage)

array_recupero_storage = array_recupero_storage.sort()

let proxy = "https://api.allorigins.win/raw?url="
let endpoint = "https://api.deezer.com/track/"

let ul = document.querySelector('.listado_playlist')

for (let i = 0; i < array_recupero_storage.length; i++) {
    fetch(`${proxy}${endpoint}${array_recupero_storage[i]}`)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        
       
        ul.innerHTML += `
            <li class="contenedorplaylist">
                <a href="./detail-track.html?q=${data.id}">
                    <iframe title="deezer-widget" src="https://widget.deezer.com/widget/auto/track/${data.id}"
                        frameborder="0" allowtransparency="true"
                        allow="encrypted-media; clipboard-write">
                    </iframe>
                    <p>Ir al detalle de la canción</p>
                </a>
            </li>
        `

    })
    .catch(function(error) {console.log(error)})
}