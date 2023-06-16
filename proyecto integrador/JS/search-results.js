let queryString = location.search
let queryStringObj = new URLSearchParams (queryString)
let idserch = queryStringObj.get("buscar")
console.log(idserch)

let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=" + idserch
fetch(url)
.then(function(response){
    return response.json()
})
.then(function (data) {
    console.log(data);
    document.querySelector(".buscador").innerHTML += 
    `<h1> TÉRMINO BUSCADO : "${idserch}" </h1>
<h1>
    RESULTADOS QUE COINCIDEN:
</h1>` 

if (data.data.length === 0) {
    document.querySelector(".detallestodo").innerHTML = "No se encuentran coincidencias";
  } else {
    for (let index = 0; index < 5; index++) {
    document.querySelector(`.detallestodo`).innerHTML += `<a href="./detallecancion.html?id=${data.data[index].id}">
    <h2 class="nombrecancionsearch">Nombre Canción: ${data.data[index].title}</h2>
    <img class="imgcancionsearch" src=${data.data[index].album.cover} alt=""/>
    <h3 class="nombreartistasearch">Nombre Artista: ${data.data[index].artist.name}</h3>
    <h4 class="nombrealbumsearch">Nombre Álbum: ${data.data[index].album.title}</h4>
    </a>`;
    }
  }
})
.catch(function(error){
    console.log(error)});