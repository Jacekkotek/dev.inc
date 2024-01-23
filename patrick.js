

let peter = false
let paul = false
let penelope = false

let allison = 0
let sunny = 0
let emery = 0

let p1 = 0
let p2 = 0
let p3 = 0


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
}

function spongebob_v2() {
    paul = false
    document.getElementById("eve").style.display = "none";
    sunny = 0
}


function spongebob_v3() {
    penelope = false
    document.getElementById("viviana").style.display = "none";
    emery = 0
}


function oscar() {
    allison++
    document.getElementById("jacek").innerHTML = "Number of developers: " + allison;    
}

function oscar_v2() {
    sunny++
    document.getElementById("stalin").innerHTML = "Number of developers: " + sunny;  
}

function oscar_v3() {
    emery++
    document.getElementById("iosif").innerHTML = "Number of developers: " + emery;  
}

function hadam() {
    allison--
    document.getElementById("jacek").innerHTML = "Number of developers: " + allison;  
}

function hussein() {
    sunny--
    document.getElementById("stalin").innerHTML = "Number of developers: " + sunny;  
}

function epstiel() {
    emery--
    document.getElementById("iosif").innerHTML = "Number of developers: " + emery; 
}