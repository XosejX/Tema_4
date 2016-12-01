function moverImg () {
    if (work) {
        var w = document.getElementById('imag1').offsetWidth;
        var h = document.getElementById('imag1').offsetHeight;
        
        image[0].style.paddingTop = event.clientY - h / 2;
        image[0].style.paddingLeft = event.clientX - w / 2;        
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

var image = document.getElementsByTagName ("div");
var work = false;