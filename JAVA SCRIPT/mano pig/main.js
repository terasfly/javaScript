const roll = document.querySelector(' .btn--roll');
const diceEL = document.querySelector('.dice');

roll.addEventListener('click', function () {

    const dice = Math.trunc(Math.random() * 9) + 1;
    console.log(dice);
    diceEL.src = `dice-${dice}.png`;
});