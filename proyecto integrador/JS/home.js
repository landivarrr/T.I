var buscador=document.getElementById("buscador").value;
if (buscador.trim()===""){
    alert("El buscador esta vacio, porfavor ingrese una busqueda");
}else if (buscador.lenght<3){
    alert("Debe tener almenos 3 caracteres.");
}else{
    busquedacompleta(buscador);
}