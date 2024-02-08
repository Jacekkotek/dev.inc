

function patrick() {
    if (peter == false) {
        document.getElementById("peter").innerHTML = jonas;
        peter = true;
        p1 = 0;
        document.getElementById("josephine").style.display = "block";
    }

    else if (paul == false) {
        document.getElementById("paul").innerHTML = jonas;
        paul = true;
        p2 = 0;
        document.getElementById("eve").style.display = "block";
    }

    else if (penelope == false) {
        document.getElementById("penelope").innerHTML = jonas;
        penelope = true;
        p3 = 0;
        document.getElementById("viviana").style.display = "block";
    }

    else {
        alert("You cannot have more than 3 projects")
    }
}

function spongebob() {
    peter = false
    document.getElementById("josephine").style.display = "none";
    allison = 0
    p1 = 0;
    pr1 = 0;
}

function spongebob_v2() {
    paul = false
    document.getElementById("eve").style.display = "none";
    sunny = 0
    p2 = 0;
    pr2 = 0
}


function spongebob_v3() {
    penelope = false
    document.getElementById("viviana").style.display = "none";
    emery = 0
    p3 = 0;
    pr3 = 0
}


function oscar() {
    if (allison < donald) {
        allison++
        document.getElementById("jacek").innerHTML = "Number of developers: " + allison;
    }    
}

function oscar_v2() {
    if (sunny < donald) {
        sunny++
        document.getElementById("stalin").innerHTML = "Number of developers: " + sunny;  
    }
}

function oscar_v3() {
    if (emery < donald) {
        emery++
        document.getElementById("iosif").innerHTML = "Number of developers: " + emery;  
    }
}

function hadam() {
    if (allison > 0) {
        allison--
        document.getElementById("jacek").innerHTML = "Number of developers: " + allison;  
    }
}

function hussein() {
    if (sunny > 0) {
        sunny--
        document.getElementById("stalin").innerHTML = "Number of developers: " + sunny;  
    }
}

function epstiel() {
    if (emery > 0) {
        emery--
        document.getElementById("iosif").innerHTML = "Number of developers: " + emery;  
    }
}