let url="https://api.allorigins.win/raw?url=https://api.deezer.com/album/302127"
fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function(data){
        console.log(data)})