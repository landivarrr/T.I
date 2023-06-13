let qs= location.search
let qso=new URLSearchParams(qs)
let idartistas=qso.get('id')
let url=`https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${idartistas}`;
let section = document.querySelector('.detallestodo')
fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        let detallesartistas = ""
          detallesartistas += `<a href="./detail-album.html">
                <article class='cajahija'>
                <img src="${data.picture}" alt="">
                <p class="nombrecancion">${data.name}</p>
                 </article></a>`
    })
    
