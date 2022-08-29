/* function rant(message) {
//     console.log(`as esu ${message}`)
// }
// rant('labas'.toUpperCase())



// function matas(person) {
//     console.log(`as esu vardu ${person}`)
// }
// matas('tomas')

function rand(message) {
    console.log(`As buvau miske vakar ${message.toUpperCase()},bet nepabegau `)
}
rand('baisu buvo')

function greet(firstName, lastName) {
    console.log(`Hey there ,${firstName} ${lastName[0]}`)
}
greet('Clooney', 'George');
greet()



//FUNCTIONS WITH MULTIPLY ARGUMENTS**********************

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}!`)
    console.log(`Hey there, ${firstName} ${lastName[2]}!`)
}
greet('matas', 'Surininas')

function isSnakeEyes(1,1) {
    if (isSnakeEyes === 1, 1) {
        console.log('snake eyes')
    } else if (isSnakeEyes !== 1, 1)
        console.log('not snake eyes')
}

isSnakeEyes(3, 5)

function add(x, y) {
    return x + y;
}

const sum = add(10, 16);
console.log(sum)


function mult(x, y) {
    return x * y;
}
const suma = mult(56, 3)
console.log(suma)

function skaiciai(x, y) {
    let suma = (x * y);
    return suma
    
}
skaiciai(5, 6);
skaiciai(7, 8);
skaiciai(3, 6);
function isShortWeather(temperature) {
    if (temperature >= 75) {
        return true
    } else {
        return false
    }
    
}
isShortWeather(80)
isShortWeather(48)
isShortWeather(75)



let array = [3, 5, 7]
function lastElement(array) {
    return array[2]

}
let arrays = [1]
function lastElement(array) {
    return array[0]

}
let arrr = []
function lastElement(array) {
    return array[]

}
console.log(arrr)

// DEFINE YOUR FUNCTION BELOW:
function lastElement(last) {
    let lastelement = last[last.length - 1];
    if (last.length === 0) {
        return null;
    }

    return lastelement;


}
lastElement([3, 5, 7]);
lastElement([1]);
lastElement([]);  




function capitalization(word) {
    let sum = (`${word[0].toUpperCase()}${word.slice(1)}`);
    return sum;
}
capitalization('medis')
console.log(sum)

function sumArray(x, y) {
    let sum = ''
    for (let i = 0; i < 4; i++)
    return x + y;
}
sumArray(3, 4)
console.log(x + y)

function add(x, y,) {
    let sum = x * y;
    return x + y;
}
console.log(sum)
function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
    
}

console.log(sumArray([1, 2, 3]))
console.log(sumArray([2, 2, 2, 2]))
console.log(sumArray([50, 50, 1]))

function krepsyje(obuoliai) {
    let sum = 0;
    for (let count = 0; count < obuoliai.length; count++) {
        
        sum += obuoliai[count]
    }
    
    // return sum
    console.log(sum)
}
krepsyje([3, 5, 6, 10])


const days = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
};

// create function
function returnDay(num) {
    return num < 1 || num > 7 ? null : days[num];
}
returnDay(2)
let bottle = 1.5;

function getMilk(money) {
    console.log('leaveHouse')
    console.log('moveRight')
    console.log('moveLeft')
    let numberOfBottles = Math.floor(money / bottle);
    console.log(`buy ${numberOfBottles} bottles sof milk `)
    console.log('leaveHouse')
    console.log('leaveHouse')
}
getMilk(22);

let daysInYear = 365;
let weeksInYear = 52;
let monthInYear = 12;


function lifeInWeeks(age) {
    let daysUntil90 = daysInYear * 90;
    let weeksUntil90 = weeksInYear * 90;
    let monthUntil90 = monthInYear * 90;


    let myAge = age * daysInYear;
    let myAge1 = age * weeksInYear;
    let myAge2 = age * monthInYear;
    console.log(`for me left ${daysUntil90 - myAge} days,${weeksUntil90 - myAge1}
    weeks and ${monthUntil90 - myAge2} month until 90 years`)
}

lifeInWeeks(12)


function lifeInWeeks1(age) {
    let yearRemaining = 90 - age;
    let daysRemaining = yearRemaining * 365;
    let weeksRemaining = yearRemaining * 52;
    let monthRemaining1 = yearRemaining * 12;
    console.log(`You left ${daysRemaining},${weeksRemaining}, and ${monthRemaining1}`)
}

lifeInWeeks1(12);



function bmiCalculator(weigth, height) {:zero:
    let bmi = weigth / (height * height) //Math.pow(height, 2)
    return Math.round(bmi)

}
let bmi = bmiCalculator(65, 1.8)
console.log(bmi)





let name1 = prompt('Whats is your name?')
let name2 = prompt('what is your name?')

let loveNumber = Math.trunc(Math.random() * 100) + 1;

if (loveNumber > 70) {
    alert(`You love each other so much you have ${loveNumber}%`)

} if (loveNumber > 30 && loveNumber < 70) {
    alert(`You in bad situation ${loveNumber}%`)


    
} else {
    alert('You just friends')
}

alert(`${name1} ${loveNumber}% ❤ ${name2}`)
console.log(loveNumber)

function add(num1, num2) {
    return num1 + num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function calc(num1, num2, operator) {
    return operator(num1, num2, add)


}
console.log('operator')




    */
function sum(a, b) {
    return a + b;
}
let sum2 = (a, b) => a + b;

function isPositive(number) {
    return number >= 0
}

const isPositive = number => number >= 0;

function randomNumber() {
    return Math.random
}

let randomNumber2 = () => Math.random

document.addEventListener('click', function () {
    console.log('Click')
})
document.addEventListener('click', () => {
    console.log('Click')
})
// *************** OR *************
document.addEventListener('click', () => console.log('Click'))










