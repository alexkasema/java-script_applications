
const label_counter = document.getElementById('label-counter');
const decrease = document.getElementById('decrease-btn');
const reset = document.getElementById('reset-btn');
const increase = document.getElementById('increase-btn');

let counter = 0;

decrease.onclick = () => {
    counter--;
    label_counter.textContent = counter;
}

reset.onclick = () => {
    counter = 0;
    label_counter.textContent = counter;
}

increase.onclick = () => {
    counter++;
    label_counter.textContent = counter;
}