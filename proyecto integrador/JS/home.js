let urlcanciones="https://api.deezer.com/track/3135556"
let section=document.querySelector(".cancioneslist")
fetch(urlcanciones)
.then(function(response) {
  return response.json()
})
.then(function(data){
    let result=data.contributors;
    let canciones=""
    for (let i = 0; i < result.length; i++){
        canciones+=`<h2>CANCIONES</h2>
        <ul>
            <article>
                <li>

                </li>
            </article>
            <article>
                <li>

                </li>
            </article>
            <article>
                <li>

                </li>
            </article>
            <article>
                <li>

                </li>
            </article>
            <article>
                <li>

                </li>
            </article>
            <article>
                <li>

                </li>
            </article>
        </ul>`
 section.innerHTML=canciones;})
.catch(function(error) {
  console.log("Error: " + error);
})
