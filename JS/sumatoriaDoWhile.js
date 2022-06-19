function sumatoriaDoWhile(){

   
    let sumatoria=0;
    let i=0;
    do{
       sumatoria=sumatoria+i;
       i++;
    }while(i<=100)

    const p= document.createElement("p"); 
    p.textContent="La sumatoria del 1-100 (Do-While) es: "+sumatoria;
    var capa = document.getElementById("tabla");
    capa.appendChild(p);
    
}