var total=0;
const arreglo=[];

function mediaAritmetica(){
    arreglo[total] = parseInt(document.getElementById("numA1").value);
    total++;
    var sumatoria=0;
    for(let i=0; i<arreglo.length ; i++){
        sumatoria=sumatoria+arreglo[i];
    }
    var texto="La media aritmetica es: "+ sumatoria/arreglo.length;
    
    //Imprimimos el arreglo 1
    var label1= document.createElement("p"); 
    var texto1="";
    for(let i=0; i<arreglo.length ; i++){
        texto1=texto1+arreglo[i]+" , ";
    }
    label1.textContent=texto1;
    var capa = document.getElementById("tabla1");
    capa.appendChild(label1);

    //Imprimimos el arreglo 2
    var label2= document.createElement("p"); 
    label2.textContent=texto;
    var capa2 = document.getElementById("tabla2");
    capa2.appendChild(label2);


}