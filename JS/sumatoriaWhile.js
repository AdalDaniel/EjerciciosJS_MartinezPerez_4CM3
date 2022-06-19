function sumatoriaWhile(){

   
    let sumatoria=0;
    let i=0;
    while(i<=100){
       sumatoria=sumatoria+i;
       i++;
    }

    const p= document.createElement("p"); 
    p.textContent="La sumatoria del 1-100 (While) es: "+sumatoria;
    var capa = document.getElementById("tabla");
    capa.appendChild(p);
    
}