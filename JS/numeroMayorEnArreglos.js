var total=0;
const arreglo=[];

function numeroMayor(){
    arreglo[total] = parseInt(document.getElementById("numA1").value);
    var mayor;
    total++;
    var texto="";
    if(arreglo.length==1){
        texto="El numero mayor es: "+arreglo[0];
    }else{
        var mayor=arreglo[0];
        for(let i=0; i<arreglo.length ; i++){
            if(arreglo[i]>mayor){
                mayor=arreglo[i];
            }
        }
        texto="El numero mayor es: "+mayor;
    }
    
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