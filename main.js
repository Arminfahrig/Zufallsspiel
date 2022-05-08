let zufallzahl1
let winstreak = 0
let startwert = 50

function höher(){
    zufallzahl1 = Math.round(Math.random()*100)
    if(zufallzahl1 > startwert) {
        document.getElementById("tf1").innerHTML = "Super, das war korrekt!"
        console.log("Richtig.")
        winstreak = winstreak + 1

        document.getElementById("tf2").innerHTML = "Du hast " + winstreak + " mal richtig geraten"
    } else {
        document.getElementById("tf1").innerHTML = "Schade! Du musst bei 0 anfangen :("
        winstreak = 0
        document.getElementById("tf2").innerHTML =  ""

    }
    startwert = Math.round(Math.random()*100)
}

function tiefer(){
    zufallzahl1 = Math.round(Math.random()*100)
    if(zufallzahl1 < startwert) {
        document.getElementById("tf1").innerHTML = "Super, das war korrekt!"
        console.log("Richtig.")
        winstreak = winstreak + 1
        document.getElementById("tf2").innerHTML = "Du hast " + winstreak + " mal richtig geraten"
    } else {
        document.getElementById("tf1").innerHTML = "Schade! Du musst bei 0 anfangen :("
        winstreak = 0
        document.getElementById("tf2").innerHTML = ""
    }
    startwert = Math.round(Math.random()*100)
}
