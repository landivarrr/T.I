let url="https://api.allorigins.win/raw?url=https://api.deezer.com/chart"
let sectiontrack = document.querySelector(".cancioneslist")
fetch(url)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data)
    let result = data.tracks.data;
    let canciones = ""
    for (let i = 0; i < 5; i++) {
      canciones += `<a href="./detail-cancion.html?id=${result[i].id}">
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

  let sectionalbumes = document.querySelector(".albumeslist")

  fetch(url)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      let result = data.albums.data;
      let albumes = ""
      for (let i = 0; i < 5; i++) {
        albumes += `<a href="./detail-album.html?id=${result[i].id}">
              <article class='cajahija'>
              <h2>${result[i].artist.name}</h2>
              <img src="${result[i].cover}" alt="">
              <p class="nombrecancion">${result[i].title}</p>
          </article></a>`}
      sectionalbumes.innerHTML = albumes;
    })
    .catch(function (error) {
      console.log("Error: " + error);
    })

  let sectionartistas = document.querySelector(".artistaslist")
  fetch(url)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      let result = data.artists.data;
      let artistas = ""
      for (let i = 0; i < 5; i++) {
        artistas += `<a href="./detail-artist.html?id=${result[i].id}">
              <article class='cajahija'>
              <h2>${result[i].name}</h2>
              <img src="${result[i].picture}" alt="">
                    </article></a>`}
      sectionartistas.innerHTML = artistas;
    })
    .catch(function (error) {
      console.log("Error: " + error);
    })