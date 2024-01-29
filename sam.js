

function julia() {
    luckas = luckas - 10
    console.log(luckas)
}

function sammy() {
    setTimeout(julia, 30000);
    luckas = luckas + 10
    money = money - 50000
    console.log(luckas)
}

function elysia() {
    ela = ela * 1.3
    money = money - 500000
}

function evelyn() {
    ela = ela - 3
}

function dexter() {
    setTimeout(evelyn, 60000);
    ela = ela + 3
    money = money - 1000000
}