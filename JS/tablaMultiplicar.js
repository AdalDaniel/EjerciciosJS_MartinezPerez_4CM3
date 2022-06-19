function calcularTabla(){
    numero = parseInt(document.getElementById("numero").value);
    let tabla=[10];
    const div=[10];
    
    const br=document.createElement("br");;
    for(let i=0; i<10 ; i++){
        div[i]= document.createElement("label"); 
        tabla[i]=numero*(i+1);
        div[i].textContent=tabla[i]+" , ";
    }

    var capa = document.getElementById("tabla");
    const label= document.createElement("p"); 
    label.textContent="La tabla de "+numero+" es:   ";
    capa.appendChild(label);
    for(let i=0; i<10; i++){
        capa.appendChild(div[i]);
    }
    capa.appendChild(br);
        
    
}