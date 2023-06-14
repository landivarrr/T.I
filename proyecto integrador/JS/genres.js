let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/genre"
fetch(url)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data);
    let generos = document.querySelector('.genreslist')
    let result = data.data;
    for (let i = 1; i < 11; i++) {
      generos.innerHTML += `<a href="./detail-genres.html?id=${result[i].id}">
        <article class='cajahija'>
        <h2 class="nombregenero">${result[i].name}</h2> 
        <img class="imagenesgeneros" src="${result[i].picture}" alt="${result[i].name}">
        </article></a>`
        }
  })
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
  
