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
          detacancion += `
                <article class='cajahija'>
                <h2>${data.title}</h2>
                <img src="${data.album.cover}" alt="">
                <p class="nombrecancion">${data.release_date}</p>
                <p class="nombrecancion">${data.artist.name}</p>
                 </article>`
        section.innerHTML = detacancion;
      })
      .catch(function (error) {
        console.log("Error: " + error);
      })


      let form=document.querySelector('.formu');
      let buscador=document.querySelector('.buscador');
      
      let favoritos = [];
      let recuperoStorage = localStorage.getItem('favoritos');
      
      if (recuperoStorage != null) {
          favoritos = JSON.parse(recuperoStorage);
      }
      
      let fav = document.querySelector('.fav');
      
      
      if (favoritos.includes(id)) {
          fav.innerText = 'Sacar de mi Playlist'
      }
      
      fav.addEventListener('click', function () {
          if (favoritos.includes(id)) {
              let indice = favoritos.indexOf(id)
              favoritos.splice(indice, 1);
          } else {
              favoritos.push(id);
              fav.innerText = 'Sacar de mi playlist'
          }
      
          let favoritosToString = JSON.stringify(favoritos);
          localStorage.setItem('favoritos', favoritosToString)
      })
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
      
        


  
  
  
