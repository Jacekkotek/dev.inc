

function julia() {
    luckas = luckas - 10
    console.log(luckas)
}

function sammy() {
    setTimeout(julia, 30000);
    luckas = luckas + 10
    kennethblevinsjohnsimpsonaberothdonbirdrudolphrogers = kennethblevinsjohnsimpsonaberothdonbirdrudolphrogers - 50000
    console.log(luckas)
}

function elysia() {
    ela = ela * 1.3
    kennethblevinsjohnsimpsonaberothdonbirdrudolphrogers = kennethblevinsjohnsimpsonaberothdonbirdrudolphrogers - 500000
}

function evelyn() {
    ela = ela - 3
}

function dexter() {
    setTimeout(evelyn, 60000);
    ela = ela + 3
    kennethblevinsjohnsimpsonaberothdonbirdrudolphrogers = kennethblevinsjohnsimpsonaberothdonbirdrudolphrogers - 1000000
}

function mia() {
    if (jaroslaw == false) {
        jaroslaw = true
        andrzej = parseFloat(prompt("How much do you want to loan?"))

        if (andrzej == 69) {
            window.open("https://en.wikipedia.org/wiki/Suicides_at_the_Golden_Gate_Bridge")
        }

        if (isNaN(andrzej) == true) {
        alert("Please enter a number")
        andrzej = 0
        }

        sophie = sophie + andrzej
        frank = sophie*0.1

        kennethblevinsjohnsimpsonaberothdonbirdrudolphrogers = kennethblevinsjohnsimpsonaberothdonbirdrudolphrogers + sophie*1.3
    }
    else {
        alert("You already have a loan")
    }
}





setInterval(function() {
    kennethblevinsjohnsimpsonaberothdonbirdrudolphrogers = Math.round(kennethblevinsjohnsimpsonaberothdonbirdrudolphrogers * 100)/100
    document.getElementById("clark").innerHTML = "Money : " + kennethblevinsjohnsimpsonaberothdonbirdrudolphrogers;
    if ( kennethblevinsjohnsimpsonaberothdonbirdrudolphrogers < -1E8){
        kennethblevinsjohnsimpsonaberothdonbirdrudolphrogers = 1E8;
        document.getElementById("dialog").style.display = "block";
    }
}, 10);