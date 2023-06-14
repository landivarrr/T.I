let qs= location.search
let qso=new URLSearchParams(qs)
let idartistas=qso.get('id')
let url=`https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${idartistas}/albums`;
let section = document.querySelector('.detallestodo')
fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)})