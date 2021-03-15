'use strict';

// Selecting elements
const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const scoreHolder = document.querySelector('.score');
const players = document.querySelectorAll('.player');
const dice = document.querySelector('.dice');
const newGameButton = document.querySelector('.btn--new');
const questionButton = document.querySelector('.btn--question');
const closeModalButton = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// Event handler functions
let currentScore = 0;
let score = [0, 0];

// winner 
const winner = function() {
    for(let i = 0; i < score.length; i++) {
        if(score[i] >= 100) {
            return i
        }
    }
}

const rollingDice = function(event) {
    const randomDiceNumber = Math.floor(Math.random() * 6) + 1;
    if(randomDiceNumber !== 1) {
        currentScore += randomDiceNumber;

        dice.style.display = 'block'
        dice.src = `dice-${randomDiceNumber}.png`


        for (let i = 0; i < players.length; i++) {
            if (players[i].classList.contains('player--active')) {
                document.getElementById(`current--${i}`).textContent = currentScore;
            }
        }
    }
    else{
        dice.style.display = 'none';
        for (let i = 0; i < players.length; i++) {
            if (players[i].classList.contains('player--active')) {
                players[i].classList.remove('player--active');
                currentScore = 0;
                document.getElementById(`current--${i}`).textContent = currentScore;
            }
            else {
                players[i].classList.add('player--active');
            }
        }
        
    }
}

const holdingDice = function(event) {
    dice.style.display = 'none';

    for(let i = 0; i < players.length; i++) {
        if (players[i].classList.contains('player--active')) {
            players[i].classList.remove('player--active');
            score[i] += currentScore;
            // declaring the winner
            if(winner() != undefined) {
                players[winner()].classList.add('player--winner')
                event.target.removeEventListener('click', holdingDice);
                rollButton.removeEventListener('click', rollingDice);
            }

            document.getElementById(`score--${i}`).textContent = score[i];
            currentScore = 0;
            document.getElementById(`current--${i}`).textContent = currentScore;
        }
        else {
            players[i].classList.add('player--active');
        }
    }
}


const resettingGame = function() {
    currentScore = 0;
    score = [0, 0];
    dice.style.display = 'none';

    for(let i = 0; i < players.length; i++) {
        document.getElementById(`score--${i}`).textContent = score[i];
        document.getElementById(`current--${i}`).textContent = currentScore;
        if(players[i].classList.contains('player--winner')) {
            players[i].classList.remove('player--winner')
        }

        if(i == 0) {
            players[i].classList.add('player--active');
        }
        else{
            players[i].classList.remove('player--active');
        }
    }
}

const gameInstruction = function(event) {
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.instructions').style.display = 'block';
}

const closingModal = function(event) {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.instructions').style.display = 'none';
}

const closingModalWithKey = function(event) {
    if(event.key == 'Escape') {
        document.querySelector('.overlay').style.display = 'none';
        document.querySelector('.instructions').style.display = 'none';
    }

}

const closingModalClickOverlay = function(event) {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.instructions').style.display = 'none';
}

// Adding event listeners
rollButton.addEventListener('click', rollingDice);
holdButton.addEventListener('click', holdingDice);
newGameButton.addEventListener('click', resettingGame);
questionButton.addEventListener('click', gameInstruction);
closeModalButton.addEventListener('click', closingModal);
overlay.addEventListener('click', closingModalClickOverlay);
document.addEventListener('keydown', closingModalWithKey);
