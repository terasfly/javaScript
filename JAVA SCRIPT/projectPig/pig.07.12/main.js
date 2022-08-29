'use strict'
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceE1 = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceE1.classList.add('hidden')

// rolling dice functionality

btnRoll.addEventListener('click', function () {
    // 1.Generating a random dice diceRoll
    const dice = Math.floor(Math.random() * 6) + 1
    // 2.display dice/
    diceE1.classList.remove('hidden')
    diceE1.scr = `pig.07.12/images/dice-${dice}.png`


})