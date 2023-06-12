let qs= location.search

let url=`https://api.allorigins.win/raw?url=https://api.deezer.com/track${id}`
fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
        document.querySelector('.cancionde').innerHTML += `
        <h1>${data.title}</h1>
        <div class="canciondeta">
        <img src="${data.album.cover_medium}" alt="${data.title}">
        </div>
    </a></article>`
    ;
       })
    .catch(function(error){
        console.log(error);
    })


  
  
  
