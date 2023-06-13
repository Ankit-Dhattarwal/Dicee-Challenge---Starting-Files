
var randomNumbers = Math.floor(Math.random() * 6 )+ 1;

var randomDiceImage = "dice" + randomNumbers + ".png";

var randomImageSource = "images/" + randomDiceImage;

var images1 = document.querySelectorAll("img")[0];

images1.setAttribute("src", randomImageSource);


var randomNumbers2 = Math.floor(Math.random() * 6 ) + 1;

var randomDiceImage2 = "dice" + randomNumbers2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var images2 = document.querySelectorAll("img")[1];

images2.setAttribute("src", randomImageSource2);


if(randomNumbers > randomNumbers2){
    document.querySelector("h1").innerHTML = "Player 1 Wins 🚩";
}
else if (randomNumbers < randomNumbers2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}
