function verSwitch(){
    var nombre = document.getElementById("nombre").value;
    var texto="";
    switch(nombre){
        case 'Adal':
            texto="Bienvenido alumno Adal, usted esta en la lista"
            break;
        case 'Daniel':
            texto="Bienvenido autor Daniel, usted esta en la lista"
            break;
        case 'Jose':
            texto="Bienvenido profesor Jose, usted esta en la lista"
            break;
        case 'Asuncion':
            texto="Bienvenido profesor Asuncion, usted esta en la lista"
            break;
        default:
            texto="Lo sentimos, usted no se encuentra en la lista"
    }
    const p= document.createElement("p"); 
    p.textContent=texto;
    var capa = document.getElementById("tabla");
    capa.appendChild(p);

}