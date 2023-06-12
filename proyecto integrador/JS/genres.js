let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/genre"
let sectiongenre = document.querySelector(".genreslist")
fetch(url)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data);
    let generos = document.querySelector('.genreslist')
    let result = data.data;
    for (let i = 1; i < 6; i++) {
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

