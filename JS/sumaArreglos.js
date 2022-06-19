function calcularSuma(){
    var numA1=[3];
    for(let i=0; i<3 ; i++){
        numA1[i] = parseInt(document.getElementById("numA"+(i+1)).value);
    }
    var numB1=[3];
    for(let i=0; i<3 ; i++){
        numB1[i] = parseInt(document.getElementById("numB"+(i+1)).value);
    }
    var total=[3];
    for(let i=0; i<3 ; i++){
        total[i]=numA1[i]+numB1[i];
    }
    alert("La suma de las posiciones 1,2,3 son "+total[0]+","+total[1]+","+total[2]+" respectivamente");
    
    
}