let url="https://api.allorigins.win/raw?url=https://api.deezer.com/genre"
let sectiongenre= document.querySelector(".genreslist")
fetch(url)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data)
    let result = data.tracks.data;
    let canciones = ""
    for (let i = 0; i < 5; i++) {
      canciones += `<a href="./detail-genres.html">
            <article class='cajahija'>
            <h2>${result[i].artist.name}</h2>
            <img src="${result[i].album.cover}" alt="">
            <p class="nombrecancion">${result[i].title}</p>
            </article></a>`
      }
    sectiontrack.innerHTML = canciones;
  })
  .catch(function (error) {
    console.log("Error: " + error);
    
  })