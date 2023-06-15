let formularios = document.querySelector('.buscador')
        formularios.addEventListener('focus', function () {
       
        })
        let loader = document.getElementById("loader");

        function mostrarLoader() {
          loader.style.display = "block";
        }
        
        function ocultarLoader() {
          loader.style.display = "none";
        }











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
