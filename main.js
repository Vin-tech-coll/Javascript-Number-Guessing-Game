const minNum =1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum-minNum) +1);

let attempts =0;
let guess;
let running = true;

const guessInput = document.getElementById('guess-input');
const submitBtn = document.getElementById('submit-btn');
const resultsElement = document.getElementById('results');
const minNumber = document.getElementById('minNum');
const maxNumber = document.getElementById('maxNum');

minNumber.textContent = minNum;
maxNumber.textContent = maxNum;

submitBtn.addEventListener('click', function(){
    // Validate user input
    guess = Number(guessInput.value);

    if (isNaN(guess)) {
        resultsElement.textContent= 'Please enter a number!';
    }
    else if(guess < minNum || guess > maxNum){
        resultsElement.textContent = `Out of range! Please enter a number between ${minNum} and ${maxNum}`;
    }
    else{
        attempts++;
        if(guess < answer){
            resultsElement.textContent = "Too  low! Try Again";
        }
        else if(guess > answer){
            resultsElement.textContent = "Too high! Try again.";    
        }
        else{
            resultsElement.textContent = `Congradulation! The guess was ${answer} in ${attempts} tries`;
            running = false;
        }
        }
        guessInput.value ='';
});