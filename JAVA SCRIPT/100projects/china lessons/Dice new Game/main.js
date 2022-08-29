let press = document.querySelector('.press');
let title = document.querySelector('.title');
let dice = document.querySelector('.dice');
let dice2 = document.querySelector('.dice2');
let playerText = document.querySelector('.player-text')



press.addEventListener('click', function () {

    let number = Math.floor(Math.random() * 6) + 1;
    let number1 = Math.floor(Math.random() * 6) + 1;


    dice.src = `images/dice-${number}.png`;
    dice2.src = `images/dice-${number1}.png`;
    if (number > number1) {
        title.textContent = 'MATAS WIN 😊'
        title.style.color = '#7FFF00'
    } else if (number < number1) {
        title.textContent = 'TOMAS WIN 😊'
        title.style.color = '#00FFFF'
    } else {
        title.textContent = 'Same ====🤢'
    }





})
// function makeSound() {
//     switch (key) {
//         case 'M':

//             break;

//         default:
//             break;
//     }
// }