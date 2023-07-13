function getColorDie() {
    const colors = {
      1: "Grün",
      2: "Blau",
      3: "Rosa",
      4: "Gelb",
      5: "Orange",
      6: "Joker"
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
    const diceArray = Array.from(document.querySelectorAll('.dice'));

    let i = 0;
    for (i; i < 3; i++) {
        // map getColorDie to the first three divs
        diceArray[0].innerHTML = getColorDie();
        diceArray[1].innerHTML = getColorDie();
        diceArray[2].innerHTML = getColorDie();
    }
    for (i; i < 6; i++) {
        // map getNumberDie to the last three divs
        diceArray[3].innerHTML = getNumberDie();
        diceArray[4].innerHTML = getNumberDie();
        diceArray[5].innerHTML = getNumberDie();
    }
}