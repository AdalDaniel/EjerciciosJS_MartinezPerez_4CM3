function paresFor(){
    const pares= document.createElement("p"); 
    const impares= document.createElement("p"); 
    var textopares="";
    var textoimpares="";
    for(let i=1; i<=100; i++){
       if(i%2==0){
        textopares=textopares+i+", ";
       }else{
        textoimpares=textoimpares+i+", ";
       }
    }

    pares.textContent="Los pares del 1-100 (For) son: "+textopares;
    impares.textContent="Los impares del 1-100 (For) son: "+textoimpares;
    var capa = document.getElementById("tabla");
    capa.appendChild(pares);
    capa.appendChild(impares);
    
}