
let recuperoStorage = localStorage.getItem('cancionesfavoritas');
let playlist = JSON.parse(recuperoStorage)
let section = document.querySelector('#cancionesfav');
let cancionplaylist = '';

 
if (playlist == null || playlist.length == 0) {
    section.innerHTML ='<p>No hay canciones en tu playlist</p>'
} else {

    for (let index = 0; index < playlist.length; index++) {

        let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${playlist[index]}`;

        fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);

            cancionplaylist += `<article>
                                        <h2>Nombre de la canción: ${data.title}</h2>
                                        <img src=${data.album.cover_medium} alt=""> </article>`;

            section.innerHTML += cancionplaylist;
            
        })
        .catch(function(error) {
            console.log(error);
        });
        
    }
}