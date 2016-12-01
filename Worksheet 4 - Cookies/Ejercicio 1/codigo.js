function crearCookie(nombreC,valorC) {
    var fecha = new Date();
    fecha.setMinutes (fecha.getMinutes() + 5);
    
    //Si no se pasa la fecha a GMTString, no funciona la caducidad
    document.cookie = nombreC + "=" + valorC + ";expires=" + fecha.toGMTString();
}

function obtenerCookie(nombreC) {
    var nombre = nombreC + "=";
    var listaC = document.cookie.split(';');
    for (var i=0; i<listaC.length; i++) {
        var ckie = listaC[i];
        
        if (ckie[0] == ' ') {
            //Si la cookie tiene un espacio al principio, se lo quita
            ckie = ckie.substring(1);
        }
        
        if (ckie.indexOf(nombre) == 0) {
            //Si la posición del nombre de la cookie es 0, 
            //regresa el valor de la cookie
            return ckie.substring(nombre.length, ckie.length);
            
        }
    }
    return "";
}

function comprobarCookie(nombreCookie, nc2, nc3, nc4) {
    var valorCookie = obtenerCookie(nombreCookie);
    var vc2 = obtenerCookie(nc2);
    var vc3 = obtenerCookie(nc3);
    var vc4 = obtenerCookie(nc4);
    
    if (valorCookie != "") {
        alert("Hola de nuevo " + valorCookie + "!");
    }
    else {
       valorCookie = prompt ("Introduce tu nombre.");
        
       if (valorCookie != "" && valorCookie != null) {
           crearCookie (nombreCookie, valorCookie);
           alert ("Bienvenido " + valorCookie + "!");
       }
    }
    
    var bod = document.getElementById("cuerpo");
    bod.style.backgroundColor = vc2;
    bod.style.color = vc3;
    bod.style.fontSize = vc4;
}

function borrarCookie (nombreCookie) {
    document.cookie = nombreCookie + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    
    document.getElementById("par").innerHTML = "Sesion cerrada.";
    
    //document.getElementById("par").innerHTML = document.cookie;
}

function cambioFondo () {
    var bgc = prompt ("Introduce color en ingles.");
    var body = document.getElementById("cuerpo");
    body.style.backgroundColor = bgc;
    crearCookie ("bgcolor", bgc);
}

function cambioTextoColor () {
    var tc = prompt ("Introduce color para la letra.");
    var body = document.getElementById("cuerpo");
    body.style.color = tc;
    crearCookie ("tcolor", tc);
}

function cambioTextoTamanio () {
    var ts = prompt ("Introduce tamanio de letra.");
    var body = document.getElementById("cuerpo");
    body.style.fontSize = ts;
    crearCookie ("tsize", ts);
}


window.onload = function () {
    comprobarCookie('uN', 'bgcolor', 'tcolor', 'tsize'); 
}

