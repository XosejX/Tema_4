function cambioCss () {
    var bod = document.getElementById ("bd");
    bod.style.borderLeft = "60px solid skyblue";
    bod.style.fontFamily = "arial";
    bod.style.fontSize = "15";
    bod.style.backgroundColor = "azure";
    
    var enl = document.getElementsByTagName ("a");
    for (var i=0; i<enl.length; i++) {
        enl[i].style.textDecoration = "none";
        enl[i].style.color = "blue";
        enl[i].style.fontWeight = "blod";
    }
    
    var principal = document.querySelector (".principal");
    principal.style.backgroundColor = "lightgoldenrodyellow";
    principal.style.height = "100%";
    principal.style.borderTop = "5px solid lightgoldenrodyellow";
    principal.style.paddingRight = "40px";
    principal.style.paddingLeft = "10px";
    
    var nav = document.querySelector (".nav");
    nav.style.backgroundColor = "powderblue";
    nav.style.marginTop = "5px";
    nav.style.padding = "3px";
    nav.style.boxShadow = "1px 2px 1px #000000";
    
    var footer = document.getElementById ("footer");
    footer.style.backgroundColor = "yellow";
    footer.style.marginTop = "5px";
    footer.style.border = "1px solid black";
    footer.style.padding = "5px";

    var oculto = document.getElementById ("oculto");
    oculto.style.visibility = "visible";
}

function minimalista () {
    location.reload();
}