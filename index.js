var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDice1 = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDice1;
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource)

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDice2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDice2;
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomDice1 > randomDice2){
document.querySelector("h1").innerHTML = "Player 1 Wins 🚩🚩🚩"
document.querySelector("h1").style.fontSize = "100px";
}else if (randomDice1 < randomDice2){
document.querySelector("h1").innerHTML = "Player 2 Wins 🚩🚩🚩"
document.querySelector("h1").style.fontSize = "100px";
}else{
    document.querySelector("h1").innerHTML = "Draw!!!"
}