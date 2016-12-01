function comprobarForm () {
    var bool1 = cUser ();
    var bool2 = cPass ();
    var bool3 = cName ();
    var bool4 = cAddress ();
    var bool5 = cCountry ();
    var bool6 = cZip ();
    var bool7 = cEmail ();
    var bool8 = cSex ();
    var bool9 = cLanguage ();
    var bool10 = cAbout ();
    
    if (bool1 && bool2 && bool3 && bool4 && bool5 && bool6 && bool7 && bool8 && bool9 && bool10) {
        document.getElementById ("end").innerHTML = "COMPLETADO";
        document.getElementById ("error").innerHTML = null;
    }
    else {
        document.getElementById ("error").innerHTML = "Red fields must be corrected";
    }
}

function cUser () {
    var user = document.getElementById("user").value;
    var re = /^([a-zA-Z0-9_-]){5,12}$/;
    
    if (re.test (user)) {
        document.getElementById ("sUser").innerHTML = null;
        return true;
    }
    else {
        document.getElementById ("sUser").innerHTML = "[A-Z], [a-z], -_, length[5-7] ONLY";
    }
}

function cPass () {
    var pass = document.getElementById("pass").value;
    var re = /^([a-zA-Z0-9_-]){7,12}$/;
    
    if (re.test (pass)) {
        document.getElementById ("sPass").innerHTML = null;
        return true;
    }
    else {
        document.getElementById ("sPass").innerHTML = "[A-Z], [a-z], -_, length[7-12] ONLY";
    }
}

function cName () {
    var name = document.getElementById("name").value;
    var re = /^([a-zA-Z ]+)$/;
    
    if (re.test (name) && name[0] != " ") {
        document.getElementById ("sName").innerHTML = null
        return true;
    }
    else {
        document.getElementById ("sName").innerHTML = "ALPHABETES ONLY";
    }
}

function cAddress () {
    var address = document.getElementById ("address").value;
    return true;
}

function cCountry () {
    var country = document.getElementById ("country").value;
    if (country != "Default") {
        document.getElementById ("sCountry").innerHTML = null;
        return true;
    }
    else {
        document.getElementById ("sCountry").innerHTML = "MUST BE SELECTED";
    }
}

function cZip () {
    var zip = document.getElementById ("zip").value;
    var re = /^([0-9]+)$/;
    
    if (re.test (zip)) {
        document.getElementById ("sZip").innerHTML = null;
        return true;
    }
    else {
        document.getElementById ("sZip").innerHTML = "NUMBER ONLY";
    }
}

function cEmail () {
    var email = document.getElementById ("email").value;
    var re = /^([A-Za-z]+[@][a-z]+[.][a-z]{2,3})$/;
    
    if (re.test (email)) {
        document.getElementById ("sEmail").innerHTML = null
        return true;
    }
    else {
        document.getElementById ("sEmail").innerHTML = "EMAIL FORMAT (name@domain.subdomain)";
    }
}

function cSex () {
    var r1 = document.getElementById ("radio1").checked;
    var r2 = document.getElementById ("radio2").checked;
    
    if (r1 || r2) {
        document.getElementById ("sSex").innerHTML = null;
        return true;
    }
    else {
        document.getElementById ("sSex").innerHTML = "MUST BE SELECTED";
    }
}

function cLanguage () {
    var b1 = document.getElementById ("box1").checked;
    var b2 = document.getElementById ("box2").checked;
    
    if (b1 || b2) {
        document.getElementById ("sLang").innerHTML = null;
        return true;
    }
    else {
        document.getElementById ("sLang").innerHTML = "MUST BE SELECTED";
    }
}

function cAbout () {
    var about = document.getElementById ("about").value;
    return true;
}





