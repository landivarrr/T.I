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
            document.querySelector('.detallestodo').innerHTML += `
            <article class='cajadetalle'>
            <a href="./detail-artist.html?id=${data.artists.data[i].id}>
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
        document.querySelector('.contenedordgenero').innerHTML = `<article class='cajadetalle'>
    <h2>Genero: ${data.name}</h2>
    <img src="${data.picture_medium}" alt="${data.name}" class="imggeneroelegido">
</article>`
    })
    .catch(function (error) {
        console.log(error);
    })