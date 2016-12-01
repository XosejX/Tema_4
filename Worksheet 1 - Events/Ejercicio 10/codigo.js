function moverImg () {
    var elemento = document.elementFromPoint(event.clientX, event.clientY);
    
    if (work) {
        var w = document.getElementById(elemento.id).offsetWidth;
        var h = document.getElementById(elemento.id).offsetHeight;
        
        //image[0].style.paddingTop = event.clientY - h / 2;
        //image[0].style.paddingLeft = event.clientX - w / 2; 
        
        elemento.style.paddingTop = event.clientY - h / 2;
        elemento.style.paddingLeft = event.clientX - w / 2;
    }
}

function coger() {
    if (work) {
        work = false;
    }
    else {
        work = true;
    }
}

//var image = document.getElementsByTagName ("div");
var work = false;





