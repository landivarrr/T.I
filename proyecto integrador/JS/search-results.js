let qs = location.search
let qsOL = new URLSearchParams(qs)
let valor = qsOL.get("buscar")
console.log(valor);
let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=${valor}`;
fetch(url)
    .then(function (response) {
        return response.json()
    })

    .then(function (data) {
        console.log(data);
        document.querySelector(".results").innerHTML +=
            `<h1>RESULTADOS DE BÚSQUEDA PARA: "${valor}"</h1>`

        if (data.data.length === 0) {
            document.querySelector(".resultscanciones").innerHTML = "No se encuentran coincidencias";
            document.querySelector(".resultsartista").innerHTML = "No se encuentran coincidencias";
            document.querySelector(".resultsalbum").innerHTML = "No se encuentran coincidencias";
        } else {
            for (let index = 0; index < 5; index++) {
                document.querySelector(`.resultscanciones`).innerHTML += `<a href="./detallecancion.html?id=${data.data[index].id}">
                <h3 > ${data.data[index].title}</h3>
                <img  src=${data.data[index].album.cover_medium} alt=""/>
                
                </a>`;
                document.querySelector(`.resultsartista`).innerHTML += `<a href="./detallecantante.html?id=${data.data[index].id}">
                <h3 > ${data.data[index].artist.name}</h3>
                <img  src=${data.data[index].artist.picture_medium} alt=""/>
                
                </a>`;

                document.querySelector(`.resultsalbum`).innerHTML += `<a href="./detallealbum.html?id=${data.data[index].id}">
                <h3 > ${data.data[index].album.title}</h3>
                <img  src=${data.data[index].album.cover_medium} alt=""/>

                </a>`;
            }
        }   
    })
    .catch(function (error) {
        console.log(error);
    });

    let botonOscuro = document.querySelector(".botonOscuro")
let body = document.querySelector("body")

botonOscuro.addEventListener('click', function (e) {
    if (botonOscuro.innerText == "Modo Claro") {
        body.style.background = 'white';
        this.innerText = 'Modo Oscuro';
    } else {
        body.style.background = '#000000e2';
        this.innerText = 'Modo Claro';
    }
})
