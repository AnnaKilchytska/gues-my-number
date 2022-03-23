'use strict';

// document.querySelector(".message").textContent;

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct number!"

let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

function displayMessage(message) {
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

// When there is no input

if (!guess) {
    // document.querySelector(".message").textContent = "📛 No number!"

    displayMessage("📛 No number!");


    // When the guess is too low
// } else if (guess < secretNumber) {

//     if (score > 1) {
//         document.querySelector(".message").textContent = "📉 Little too low!"
//         score--;
//         document.querySelector(".score").textContent = score;
//     } else {
//         document.querySelector(".message").textContent = "😵 You lost the game!"
//         document.querySelector(".score").textContent = 0;
//     }

//     // When the guess is too high
// } else if (guess > secretNumber) {
//     if (score > 1) {
//         document.querySelector(".message").textContent = "📈 Little too high!"
//         score--;
//         document.querySelector(".score").textContent = score;
//     } else {
//         document.querySelector(".message").textContent = "😵 You lost the game!"
//         document.querySelector(".score").textContent = 0;
//     }
    
    // using ternary operator

} else if (guess !== secretNumber) {
    if (score > 1) {
        // document.querySelector(".message").textContent = guess > secretNumber ? "📈 Little too high!" : "📉 Little too low!";
        displayMessage(guess > secretNumber ? "📈 Little too high!" : "📉 Little too low!");
        score--;
        document.querySelector(".score").textContent = score;
    } else {
        // document.querySelector(".message").textContent = "😵 You lost the game!"
        displayMessage("😵 You lost the game!");
        document.querySelector(".score").textContent = 0;
    }
// When the player wins!
} else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "🎉 Correct number!"
    displayMessage("🎉 Correct number!");

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").innerHTML = secretNumber;

    if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
    }


}

})

document.querySelector(".again").addEventListener("click", function() {
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".score").textContent = '20';
    score = 20;
    secretNumber = Math.floor(Math.random() * 20 + 1);
    // document.querySelector(".message").textContent = "Start guessing...";
    displayMessage("Start guessing...")
    document.querySelector(".guess").value = "";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";

})