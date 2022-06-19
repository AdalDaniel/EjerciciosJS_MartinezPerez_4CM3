function numeroMayor(){
    var num1 = parseInt(document.getElementById("numA1").value);
    var num2 = parseInt(document.getElementById("numA2").value);
    var num3 = parseInt(document.getElementById("numA3").value);
    if(num1>num3 && num1>num2){
        texto2="El numero mayor es: "+num1;
    }else if(num2>num3 && num2>num3){
        texto2="El numero mayor es: "+num2;
    }else{
        texto2="El numero mayor es: "+num3;
    }
    
    var label2= document.createElement("p"); 
    label2.textContent=texto2;
    var capa2 = document.getElementById("tabla1");
    capa2.appendChild(label2);


}