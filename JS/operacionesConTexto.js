function operacionesTexto(){
    var nombre = document.getElementById("texto").value;
    var texto1="Longitud del texto: "+nombre.length;
    var texto2="Texto en mayusculas: "+nombre.toUpperCase();
    var texto3="Texto en minuscular: "+nombre.toLowerCase();
    const p1= document.createElement("p"); 
    p1.textContent=texto1;
    const p2= document.createElement("p"); 
    p2.textContent=texto2;
    const p3= document.createElement("p"); 
    p3.textContent=texto3;
    var capa = document.getElementById("tabla");
    capa.appendChild(p1);
    capa.appendChild(p2);
    capa.appendChild(p3);

}
