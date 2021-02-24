
const form = document.getElementById('form');
const guessNumber = document.getElementById('number-input-text');
const outputAnswer = document.getElementById('output-answer');

const getNumber = (e) => {
    e.preventDefault();
    if(guessNumber.value==='1917'){
        outputAnswer.innerHTML="Yaaaas!!!";
    } else {
        outputAnswer.innerHTML="Naaaah";
    };
}

form.addEventListener('submit', getNumber);