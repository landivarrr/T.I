let qs = location.search
let qso = new URLSearchParams(qs)
let idartistas = qso.get('id')
let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${idartistas}/albums`;
let section = document.querySelector('.detallestodo')
fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        let detaartista = ""
        for (let i = 0; i < 5; i++) {
            document.querySelector(".detallestodo").innerHTML +=
                detaartista += `<a href="./detail-album.html?id=${data.data[i].id}"
                <article class='cajahija'>
                <h2>${data.data[i].title}</h2>
                <img src="${data.data[i].cover_medium}" alt="">
                <p class="nombrecancion">${data.data[i].release_date}</p>
                
                 </article></a>`
        }
        section.innerHTML = detaartista;
    })
    .catch(function (error) {
        console.log("Error: " + error);
    })

let form = document.querySelector('.formu');
let buscador = document.querySelector('.buscador');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (buscador.value == "") {
        alert('No puedes enviar el form vacio');
    } else if (buscador.value.length < 3) {
        alert('Debes escribir 3 caracteres');
    } else {
        this.submit();
    }
})
let formulario = document.querySelector('.buscador')
formulario.addEventListener('focus', function () {

})


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