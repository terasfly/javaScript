/*let guestList = ['Tomas', 'Matas', 'Egle', 'Laura', 'Bruno'];
let guestName = prompt('What is your name?');
guestList.includes(guestName);
if (guestList.includes(guestName)) {      //includes() check its true or false
    alert('Welcome!')
} else {
    alert('Sorry maybe next time')
}

let output = [1, 2, 3,];
output.push(4, 5)
console.log(output)

let output = [];
let count = 1;
function game() {
    if (count % 3 === 0 && count % 5 === 0) {
        output.push('FizzBuzz')
    } else if (count % 3 === 0) {
        output.push('Fizz')
    } else if (count % 5 === 0) {
        output.push('Buzz')
    } else {
        output.push(count)
    }
    count++;
    console.log(output)
}



*/

function whosPlaying(names) {

    let numberOfPeople = names.length;
    let randomPersonPosition = Math.floor(Math.random() * numberOfPeople);

    let randomPerson = names[randomPersonPosition];

    alert(`${randomPerson} is going to buy lunch today!`)

}

whosPlaying(['Angela', 'Ben', 'Jenny', 'Michael', 'Cloe']);
whosPlaying(['tomas', 'matas', 'eele', 'Mich', 'Cl']);
console.log(randomPerson)


/*
let output = []
function game() {
    for (let count = 1; count <= 100; i++) {
        if (count % 3 === 0 && count % 5 === 0) {
            output.push('FizzBuzz')
        } else if (count % 3 === 0) {
            output.push('Fizz')
        } else if (count % 5 === 0) {
            output.push('Buzz')
        } else {
            output.push(count)
        }
    }
}
console.log(game[count])
*/

let name1 = [1, 2, 3, 4];
function vardas() {
    for (let i = 1; i < 4; i++) {
        console.log(name1[i])
    }
}