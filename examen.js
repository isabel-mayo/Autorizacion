
var nombres = ["guess","usuario","invitado"];

function verificar(){

    var nombreEncontrado = false;
    var nombreIntroducidos= document.getElementById("usuario").value;
    
     for(i=0; i<nombres.length; i++){
        if(nombres[i] == nombreIntroducidos){
            nombreEncontrado = true;
        }
    }
    
    if(nombreEncontrado){
        document.getElementById("mensaje").value = "Usuario autorizado ";
    }
 else{
        document.getElementById("mensaje").value = "Usuario no autorizado.";
    
    } 
    
    }

function salir(){
    window.close();
}


