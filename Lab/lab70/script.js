'use strict';

let randomNumber, score = 20, highScore = 0, guess = 5;
let isWin = false;
const messageElement = document.querySelector('.message');

function startGame() {
    randomNumber = Math.trunc(Math.random() * 20 + 1);
}   

function guessNumber() {
    const inputGuess = Number(document.querySelector('.guess').value);    

    if (inputGuess < 1 || inputGuess > 20) {
        alert("Please enter a number between 1 and 20");
    } else {
        if (inputGuess !== randomNumber) {         
            if (inputGuess < randomNumber) {
                messageElement.textContent = " 😣 Too low";
            } else {
                messageElement.textContent = " 😣 Too high";
            }           
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            messageElement.textContent = "👏 Correct number";
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').textContent = randomNumber;
            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
            isWin = true;
        }
    }
}

function gameManager() {
    if (score <= 0) {
        alert("YOU LOSE THE GAME!");
    }
}

startGame();
document.querySelector('.check').addEventListener('click', function () {
    if (!isWin) {
        guessNumber();
    } else {
        alert("PLEASE CLICK AGAIN");
    }
    gameManager();
});
