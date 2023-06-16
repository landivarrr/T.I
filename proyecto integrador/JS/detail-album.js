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
          detaalbum += `
                <article class='cajahija'>
                <h2>${data.title}</h2>
                <img src="${data.artist.picture}" alt="">
                <p class="nombrecancion">${data.release_date}</p>
                <a href="./detail-artist.html?id=${data.artist.id}"
                <p class="nombrecancion">${data.artist.name}</p></a
                <p>${data.genres.data[0].name}</p>
                </article>`
                 
        section.innerHTML = detaalbum;
      })
      .catch(function (error) {
        console.log("Error: " + error);
      })

      fetch(url)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
          console.log(data)
          let detaalbum = ""
          
          for (let i = 0; i < 5; i++){document.querySelector(".cancionesdisco").innerHTML
            `<a href="./detail-track.html?id=${data.tracks.data[i].id}">
            <article class="cajahija">
                <img src="${data.cover_medium}" alt="${data.tracks.data[i].title_short}">
                <h3>${data.tracks.data[i].title_short}</h3>
            </article>`
            
        }})
        .catch(function (error) {
          console.log("Error: " + error);
        })




      
      let form=document.querySelector('.formu');
      let buscador=document.querySelector('.buscador');
      
      form.addEventListener('submit', function(event) {
          event.preventDefault();
      
          if (buscador.value == "") {
              alert('No puedes enviar el form vacio');
          } else if(buscador.value.length < 3){
              alert('Debes escribir 3 caracteres');
          } else {
              this.submit();
          }
      })
      let formulario = document.querySelector('.buscador')
              formulario.addEventListener('focus', function () {
             
              })
      