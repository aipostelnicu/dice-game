function changeText(){

let randomNumber1 = Math.floor(Math.random() * 6);

let randomNumber2 = Math.floor(Math.random() * 6);

let images = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png",
 "images/dice5.png", "images/dice6.png"];

//with the use of random number created before, I pick out a random dice image from the array
let img1 = images[randomNumber1]; 

img1 = document.getElementsByTagName("img")[0].setAttribute("src", img1);

let img2 = images[randomNumber2];
img1 = document.getElementsByTagName("img")[1].setAttribute("src", img2);


    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 wins!";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 wins!";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}



