let qs= location.search
let qse=new URLSearchParams(qs)
let idcanciones=qse.get('id')
let url="https://api.allorigins.win/raw?url=https://api.deezer.com/track/" + idcanciones;
fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)})
        


  
  
  
