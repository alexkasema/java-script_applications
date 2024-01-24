
const rollButton = document.getElementById('btn-roll');
const label1 = document.getElementById('label-1');
const label2 = document.getElementById('label-2');

const min = 1;
const max = 6;
let randomNum1;
let randomNum2;

rollButton.onclick = () => {
    randomNum1 = Math.floor(Math.random() * max) + min;
    span1 = randomNum1;
    label1.textContent = `Roll for Die 1 is: ${span1}`;

    randomNum2 = Math.floor(Math.random() * max) + min;
    span2 = randomNum2;
    label2.textContent = `Roll for Die 2 is: ${span2}`;
}