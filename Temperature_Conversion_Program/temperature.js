
const convertBtn = document.getElementById('convert-btn');
const tempInput = document.getElementById('temp-input');
const fahrenheit = document.getElementById('toFahrenheit');
const celsius = document.getElementById('toCelsius');
const result = document.getElementById('result');

let temp;

convertBtn.onclick = () => {
    if (fahrenheit.checked) {
        temp = Number(tempInput.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "F";
    }
    else if (celsius.checked) {
        temp = Number(tempInput.value);
        temp = (5 / 9) * (temp - 32);
        result.textContent = temp.toFixed(1) + "C";
    }
    else {
        result.textContent = "Select a unit to convert";
    }
}

