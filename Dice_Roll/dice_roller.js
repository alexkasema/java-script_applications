
const diceBtn = document.getElementById('dice-btn');
const diceInput = document.getElementById('dice-input');
const diceResult = document.getElementById('dice-result');
const diceImages = document.getElementById('dice-images');



diceBtn.onclick = () => {
    const values = [];
    const images = [];

    for (let i = 0; i < diceInput.value; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="./app_images/${value}.png" alt="Dice ${value}">`)
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');

}