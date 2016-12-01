function crearCanvas() {
    document.write ("<table border='0' cellspacing='1' cellpadding='3'>");
    
    for (i=0; i<100; i++) {
        document.write ("<tr>");
        for (ii=0; ii<100; ii++) {
            document.write ("<td></td>");
        }
        document.write ("</tr>");
    }
}

function coloreaCeldas () {    
    var casilla = document.elementFromPoint(event.clientX, event.clientY);
    
    if (casilla == "[object HTMLTableCellElement]" && event.shiftKey) {
        casilla.style.backgroundColor="blue";
    }
    else if (casilla == "[object HTMLTableCellElement]" && event.ctrlKey) {
        casilla.style.backgroundColor="red";
    }
}

crearCanvas ();