// src/app.js
const adviceButton = document.getElementById('dice-button');
const adviceText = document.getElementById('advice-text');
const adviceId = document.getElementById('advice-id');


const fetchAdvice = async () => {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        adviceText.textContent = data.slip.advice;
        adviceId.textContent = `Advice #${data.slip.id}`;
    } catch (error) {
        adviceText.textContent = 'Failed to fetch advice. Please try again.';
        adviceId.textContent = '';
    }
};

adviceButton.addEventListener('click', fetchAdvice);


fetchAdvice();
