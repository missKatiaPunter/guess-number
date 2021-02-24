
const form = document.getElementById('form');
const guessNumber = document.getElementById('number-input-text');

const getnumber = (e) => {
    e.preventDefault();
    console.log("Russia is the biggest country in Asia");
}

form.addEventListener('submit', getnumber);