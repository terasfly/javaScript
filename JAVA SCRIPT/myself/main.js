/*let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 10;
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    document.querySelector('.guessing-number').textContent = secretNumber;

    if (!guess) {
        document.querySelector('.message').textContent = 'NO NUMBER';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'YOOOOO WIN';
        document.querySelector('.message').style.fontSize = '200px';
        document.querySelector('.message').style.color = '#D02133';
        document.querySelector('body').style.backgroundColor = '#d4ef05';
        document.querySelector('.guessing-number').textContent = ':)';
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'Too low try again'
        document.querySelector('.message').style.backgroundColor = '#4c5b5c'
        document.querySelector('.message').style.borderRadius = '50px'
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'Too high try again'
    }

});
document.querySelector('.again').addEventListener('click', function () {

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').style.fontSize = '50px';
    document.querySelector('.message').style.color = '#D02133';
    document.querySelector('.message').textContent = 'Start quessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';





});

let name = prompt('Whats is your name?');
let firstCharakLetter = name.slice(0, 1);
let uperrFirstCharakLetter = firstCharakLetter.toUpperCase();
let restOfName = name.slice(1, name.length).toLowerCase();
let conect = uperrFirstCharakLetter + restOfName;
alert(`Helo, ${conect}`)


let name = prompt('whats your name?')
let firstCharakLetter = name.slice(0, 1);
let uperrFirstCharakLetter = firstCharakLetter.toUpperCase();
let restOfName = name.slice(1, name.length);
restOfName = restOfName.toLowerCase();
let conect = uperrFirstCharakLetter + restOfName;
alert(`Hello, ${conect}`);
let dogAge = prompt('how old your dog?');
let humanAge = ((dogAge - 2) * 4) + 21;
alert(humanAge)

*/