
const guessBtn = document.getElementById('guess-btn');
const guessInput = document.getElementById('guess-input');
const guessResponse = document.getElementById('guess-response');

const minNum = 1;
const maxNum = 50;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let playAgain = true;

while (playAgain) {
    guess = guessInput.value;
    guess = Number(guess);
    
    if (isNaN(guess)){
        guessResponse.textContent = `Please enter a valid number between ${minNum} - ${maxNum}`;
    }
    else if (guess < minNum || guess > maxNum){
        guessResponse.textContent = `Please enter a valid number between ${minNum} - ${maxNum}`;
    }
    else {
        attempts++;
        if (guess < answer) {
            guessResponse.textContent = `${guess} is lower than my number`;
        }
        else if (guess > answer) {
            guessResponse.textContent = `${guess} is greater than my number`;
        }
        else {
            guessResponse.textContent = `CONGRATULATIONS ${guess} is the answer`;
            playAgain = false;
        }
    }
}