const green = ("./images/green.png");
const yellow = ("./images/yellow.png");
const blue = ("./images/blue.png");
const pink = ("./images/pink.png");
const orange = ("./images/orange.png");
const joker = ("./images/joker.png");

function getColorDie() {
    const colors = {
      1: yellow,
      2: blue,
      3: green,
      4: pink,
      5: orange,
      6: joker
    };

    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const colorDie = colors[randomNumber];
    
    return colorDie;
}

function getNumberDie() {
    const numberDie = Math.floor(Math.random() * 6) + 1;

    return (numberDie == 6) ? "Joker" : numberDie;
}

function rollDice() {
    // map getColorDie to the first three divs
    document.getElementById("d1").src = getColorDie();
    document.getElementById("d2").src = getColorDie();
    document.getElementById("d3").src = getColorDie();

    // map getNumberDie to the last three divs
    document.getElementById("d4").innerHTML = getNumberDie();
    document.getElementById("d5").innerHTML = getNumberDie();
    document.getElementById("d6").innerHTML = getNumberDie();
}   