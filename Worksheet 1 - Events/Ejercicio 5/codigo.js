function coloreaCeldas () {    
    var casilla = document.elementFromPoint(event.clientX, event.clientY);
    
    if (casilla == "[object HTMLTableCellElement]" && event.shiftKey) {
        casilla.style.backgroundColor="blue";
    }
    else if (casilla == "[object HTMLTableCellElement]" && event.ctrlKey) {
        casilla.style.backgroundColor="red";
    }
    else if (casilla == "[object HTMLTableCellElement]" && event.altKey) {
        casilla.style.backgroundColor=null;
    }
}
