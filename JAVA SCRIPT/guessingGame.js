/*let maximum = parseInt(prompt('Enter the maximum number'));
while (!maximum) {
    maximum = parseInt(prompt('Enter valid number'));
}



const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

let guess = parseInt(prompt('enter you first guess'));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;


    if (guess > targetNum) {
        guess = prompt('Its too high');
    } else {
        guess = prompt('Its to low');
    }
}



if (guess === 'q') {
    console.log('quit')
} else {
    console.log('congrats')
}
console.log(`You got it! It took for you ${attempts} guesses`)







let didziausiasSkaicius = parseInt(prompt('Irasyk didziausia skaiciu'));

while (!didziausiasSkaicius) {
    didziausiasSkaicius = parseInt(prompt('Irasyk tinkama skaiciu '));
}



const sugeneruotasSkaicius = Math.floor(Math.random() * 10) + 1;
console.log(sugeneruotasSkaicius)



let spejamasSkaicius = parseInt(prompt('Irasyk spejama skaiciu '));
let attempts = 1;
while (parseInt(spejamasSkaicius) !== sugeneruotasSkaicius) {
    if (spejamasSkaicius === 'q') break;
    attempts++;


    if (spejamasSkaicius > sugeneruotasSkaicius) {
        spejamasSkaicius = prompt('Per didelis skaicius,bandyk dar karta')
    } else
        spejamasSkaicius = prompt('Per zemas skaicius,bandyk dar karta')
}

if (spejamasSkaicius === 'q') {
    console.log('iseiti')
} else {
    console.log('sveikinimai')
}
console.log(`tau reikejo ${attempts} bandymu`)
*/
    // ****************
    // SIMPLE APP ***********
