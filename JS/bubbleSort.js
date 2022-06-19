var total=0;
const arreglo=[];

function ordenarBubbleSort(){
    arreglo[total] = parseInt(document.getElementById("numA1").value);
    const numA=arreglo.slice();
    total++;
    var aux

	for (let i = 0; i <= numA.length - 2; i++){
		for (let j = 0; j <= numA.length - 2; j++){ 
			if (numA[j] > numA[j+1]){ //Se comparan pares de números donde se iteran los elementos. 
				aux = numA[j]; //Asigna valor de A[j] a aux
				numA[j] = numA[j+1]; //Se hace el intercambio de valores.
				numA[j+1] = aux;//Asgina el valor guardado en aux a la siguiente posición.
 			}
		} 
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

    
