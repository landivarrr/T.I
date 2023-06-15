let qs = location.search
let qso = new URLSearchParams(qs)
let idgeneros = qso.get('id')
let endpoint = `https://api.allorigins.win/raw?url=https://api.deezer.com/chart/${idgeneros}`
let endpoint2 = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${idgeneros}`

fetch(endpoint)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        for (let i = 0; i < 10; i++) {
            document.querySelector('.detallesgeneros').innerHTML += `
            <article class='cajadetalle'>
            <img src="${data.artists.data[i].picture_small}" alt="${data.artists.data[i].name}">
            <p>
            ${data.artists.data[i].name}
            </p></article> </a>`
        }

    })
    .catch(function (error) {
        console.log(error);
    });

fetch(endpoint2)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        document.querySelector('.detallesgeneros').innerHTML = `<article class='cajadetalle'>
    <h2>Genero: ${data.name}</h2>
    <img src="${data.picture_medium}" alt="${data.name}">
</article>`
    })
    .catch(function (error) {
        console.log(error);
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
    