
const minNum = 1;
const maxNum = 50;

const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let playAgain = true;

while (playAgain) {

    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);
    
    if (isNaN(guess)) {
        window.alert(`Please enter a number between ${minNum} and ${maxNum}`);
    }
    else if (guess < minNum || guess > maxNum) {
        window.alert(`Number out or range please Guess a number between ${minNum} and ${maxNum}`);
    }
    else {
        attempts++;
        if (guess < answer) {
            window.alert(`Your guess: ${guess} is lower than the number`);
        }
        else if (guess > answer) {
            window.alert(`Your guess: ${guess} is greater than the number`);
        }
        else {
            window.alert(`Congratulations ${guess} is the answer. It took you ${attempts} attempts  to guess the number.`);
            playAgain = false;
        }
    }

    
}