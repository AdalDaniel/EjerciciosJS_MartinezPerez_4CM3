function sumatoriaFor(){

   
    let sumatoria=0;
    for(let i=1; i<=100 ; i++){
       sumatoria=sumatoria+i;
    }

    const p= document.createElement("p"); 
    p.textContent="La sumatoria del 1-100 (For) es: "+sumatoria;
    var capa = document.getElementById("tabla");
    capa.appendChild(p);
    
}