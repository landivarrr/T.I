let qs= location.search
let qso=new URLSearchParams(qs)
let idalbum=qso.get('id')
let url= `https://api.allorigins.win/raw?url=https://api.deezer.com/album/${idalbum}`;
let section = document.querySelector('.detallestodo')
fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        
        let detaalbum = ""
          detaalbum += `<a href="./detail-album.html">
                <article class='cajahija'>
                <h2>${data.title}</h2>
                <img src="${data.artist.picture}" alt="">
                <p class="nombrecancion">${data.release_date}</p>
                <p class="nombrecancion">${data.artist.name}</p>
                <p class="nombrecancion">${data.genres.data}</p>
                
                 </article></a>`
                 
        section.innerHTML = detaalbum;
      })
      .catch(function (error) {
        console.log("Error: " + error);
      })
