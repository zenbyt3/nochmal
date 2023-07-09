function getColorDie() {
    const colors = {
      1: "Green",
      2: "Blue",
      3: "Pink",
      4: "Yellow",
      5: "Orange",
      6: "Joker"
    };

    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const colorDie = colors[randomNumber];
    
    console.log("Random Number:", randomNumber);
    console.log("Mapped Value:", colorDie);

    return colorDie;
}

function getNumberDie() {
    const numberDie = Math.floor(Math.random() * 6) + 1;
    
    console.log("Mapped Value:", numberDie);

    return (numberDie == 6) ? "Joker" : numberDie;
}

function rollDice() {
    for (let i = 0; i < 3; i++) {
        // map getColorDie to the first three divs
    }
    for (let i = 0; i < 3; i++) {
        // map getNumberDie to the last three divs
    }
}