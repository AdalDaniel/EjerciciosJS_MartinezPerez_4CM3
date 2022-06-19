function paresDoWhile(){

   
    let sumatoria=0;
    let i=1;
    const pares= document.createElement("p"); 
    const impares= document.createElement("p"); 
    var textopares="";
    var textoimpares="";
    do{
       if(i%2==0){
        textopares=textopares+i+", ";
       }else{
        textoimpares=textoimpares+i+", ";
       }
       i++;
    }while(i<=100)

    pares.textContent="Los pares del 1-100 (Do-While) son: "+textopares;
    impares.textContent="Los impares del 1-100 (Do-While) son: "+textoimpares;
    var capa = document.getElementById("tabla");
    capa.appendChild(pares);
    capa.appendChild(impares);
    
}