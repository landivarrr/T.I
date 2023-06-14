let qs= location.search
let qso=new URLSearchParams(qs)
let idcanciones=qso.get('id')
let url=`https://api.allorigins.win/raw?url=https://api.deezer.com/track/${idcanciones}`;
let section = document.querySelector('.detallestodo')
fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        let detacancion = ""
          detacancion += `<a href="./detail-cancion.html">
                <article class='cajahija'>
                <h2>${data.title}</h2>
                <img src="${data.album.cover}" alt="">
                <p class="nombrecancion">${data.release_date}</p>
                <p class="nombrecancion">${data.artist.name}</p>
                 </article></a>`
        section.innerHTML = detacancion;
      })
      .catch(function (error) {
        console.log("Error: " + error);
      })
        


  
  
  
