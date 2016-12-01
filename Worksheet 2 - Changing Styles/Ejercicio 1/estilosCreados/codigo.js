function cambioCss (css) {
    var linkAnterior = document.getElementsByTagName("link").item(0); 
    var linkNuevo = document.createElement("link");
    
    linkNuevo.setAttribute("rel", "stylesheet");
    linkNuevo.setAttribute("type", "text/css");
    linkNuevo.setAttribute("href", css);
    
    document.getElementsByTagName("head").item(0).replaceChild(linkNuevo, linkAnterior);
}