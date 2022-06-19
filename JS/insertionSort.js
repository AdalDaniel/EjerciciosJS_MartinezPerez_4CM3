var total=0;
const arreglo=[];
function ordenarInsertion(){
    arreglo[total] = parseInt(document.getElementById("numA1").value);
    const numA=arreglo.slice();
    var temp;
    total++;
        for (let i=0; i<=(numA.length-1); i++){
            j = i; 
            temp = numA[i]; //guardamos el valor de A[i] por si se tiene que intercambiar
            
            /*
             este ciclo while ira recorriendo los elementos hacia atrás
             desde j hasta j=0 o hasta que temp sea mayor a A[j-1] 
            */
            while (j>0 && temp<numA[j-1]){
                numA[j] = numA[j-1];
                j--;
            }
    
            //pone al elemento que se ha estado moviendo donde le corresponde
            numA[j] = temp;
            
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
    var texto2="";
    for(let i=0; i<numA.length ; i++){
        texto2=texto2+numA[i]+" , ";
    }
    label2.textContent=texto2;
    var capa2 = document.getElementById("tabla2");
    capa2.appendChild(label2);


}