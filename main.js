let randomNumber = Math.floor(Math.random() * 100)+ 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
guessField.focus();

function checkGuess() {
    var userGuess = Number(guessField.value); //玩家猜的數
    if (guessCount === 1){
        guesses.textContent = 'Previous Guesses: ';
    }
    guesses.textContent += userGuess + ' '; 

    if (userGuess == randomNumber) {
        lastResult.textContent = 'You got the answer!!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = ''
    }else if (guessCount == 10) {
        lastResult.textContent = 'Game Over!';
        setGameOver();
    }else{
        lastResult.textContent = 'You got wrong answer!!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess > randomNumber){
            lowOrHi.textContent = 'Last guess too high!';
        }else if(userGuess < randomNumber){
            lowOrHi.textContent = 'Last guess too low!';
        }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();    
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
    var resetParas = document.querySelectorAll('.resultParas p');
    for (i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
}