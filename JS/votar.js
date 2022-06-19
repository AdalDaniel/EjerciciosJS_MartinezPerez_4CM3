function verificarEdad(){
    edad= parseInt(document.getElementById("edad").value);
    if(edad >= 18){
        alert("Puedes votar");
    }else{
        alert("NO puedes votar");
    }
    
}