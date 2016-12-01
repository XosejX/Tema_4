function editSize (tam) { 
    var element = document.getElementById('bod');
    var css = window.getComputedStyle(element);
    var fs = css.getPropertyValue('font-size');
    
    if (tam < 2) {
        element.style.fontSize = parseInt(fs.substr(0, fs.length - 2)) + tam;
    }
    else {
        element.style.fontSize = tam;
    }
}

function editAlign () {
    var element = document.getElementById('bod');
    var css = window.getComputedStyle(element);
    var ta = css.getPropertyValue('text-align');
    
    if (ta == "left") {
        element.style.textAlign = "justify";
    }
    else {
        element.style.textAlign = "left";
    }
}
