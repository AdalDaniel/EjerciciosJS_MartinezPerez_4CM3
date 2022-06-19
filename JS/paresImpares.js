function parImpar(){
    var numero = parseInt(document.getElementById("numero").value);
    var texto="";
   if(numero%2==0){
        texto="El numero "+numero+" es PAR";
   }else{
    texto="El numero "+numero+" es IMPAR";
   }
    const p= document.createElement("p"); 
    p.textContent=texto;
    var capa = document.getElementById("tabla");
    capa.appendChild(p);

}