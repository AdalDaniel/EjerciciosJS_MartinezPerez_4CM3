function calcularMultiplicacion(){
    numero1 = parseInt(document.getElementById("numero1").value);
    numero2 = parseInt(document.getElementById("numero2").value);
    total=0;
    for(let i=0; i<numero2 ; i++){
        total=total+numero1;
    }
    var capa = document.getElementById("tabla");
    const label= document.createElement("p"); 
    label.textContent="La multiplicacion de "+numero1+"*"+numero2+" mediante sumas es: "+total;
    capa.appendChild(label);
}