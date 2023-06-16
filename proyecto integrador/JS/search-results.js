let qs = location.search
let qsobj = new URLSearchParams(qs);
let buscador = qsobj.get('buscador')
let titulo = document.querySelector('.letter')
titulo.innerHTML = `TITULOS RELACIONADOS CON TU BUSQUEDA "${buscador}"`
let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=" + buscador
let section_searchresults = document.querySelector('#centrar2_searchresults')
fetch(urlUser)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(result)
    

    if (data.data.length === 0) {
        let contenido = ''
        for (let i = 0; i < 5; i++) {
            contenido += `<article class="cajahija"><a href="./detail-cancion.html?id=${data.data[index].id} class="letter">
                        <img class="imagen" src='${data.data[i].album.cover}'></a>
                        <h3 class="letter">${data.data[i].title}</h3>
                        <p class="letter">${data.data[i].artist.name}</p>
                        </article>`   
        }
    section_searchresults.innerHTML = contenido
    } else {
        titulo.innerHTML = `NO EXISTEN RESULTADOS CON "${buscador}"`
 
    }

  
    return data;
})
.catch(function(error) {
    return error;
});