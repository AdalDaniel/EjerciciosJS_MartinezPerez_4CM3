var total=0;
const arreglo=[];


function ordenarSelection(){
    arreglo[total] = parseInt(document.getElementById("numA1").value);
    const numA=arreglo.slice();
    var aux,min;
    total++;
	for(let i=0;i<numA.length;i++){
		min=i; //Guardamos la posicion I en aux
		//Creamos otro ciclo para buscar el elemento minimo
		for(let j=i+1;j<numA.length;j++){
			//Comparamos la posicion J y Aux del arreglo A
			if(numA[min]>numA[j]){	
				min=j; //Guardamos la posicion  J en aux, que sera la posicion el elemento minimo encontrado.
			}
		}
		// * Se realiza el intercambio de valores
		aux=numA[min];//Guardamos en una variable temporal el valor del arreglo A en la posicion aux (elemento minimo)
		numA[min]=numA[i];//Asignamos al elemenento de la posicion aux el elemento de la posicion i del arreglo A
		numA[i]=aux; //Asignamos a la posicion i del arreglo el elemento minimo guardado en temp
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