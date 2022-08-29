
// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHigherBMI);

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

// // ****Challenge 3****

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//     console.log("Mark's BMI is higher than John's!")
// } else {
//     console.log("John's BMI is higher than Mark's!")
// }


// // *******Challege**
// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI.The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs.Example: "Mark's
// BMI(28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement




// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
// const massMark = 78;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//     console.log(`Marks BMI (${BMIMark}) is higher than John's ${BMIJohn}`)
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIJohn})`)

// };


/*const hasDriversLicense = true;  //A
const hasGoodVision = true;     //B


console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


/*
if (hasDriversLicense && hasGoodVision) {
    console.log('sarah able to drive');

} else {
    console.log('someone else should drive')
}
*************************************************
const isTired = true; //C
console.log(hasDriversLicense && hasGoodVision && isTired);


const isTired = true;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');

} else {
    console.log('Someone else should drive..');
}

******************************************
    CHALENGE 3!!!
    Coding Challenge #3
    There are two gymnastics teams, Dolphins and Koalas. They compete against each
    other 3 times. The winner with the highest average score wins a trophy!
    Your tasks:
    1. Calculate the average score for each team, using the test data below
    2. Compare the team's average scores to determine the winner of the competition,
    and print it to the console. Don't forget that there can be a draw, so test for that
    as well (draw means they have the same average score)
    3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
    team only wins if it has a higher score than the other team, and the same time a
    score of at least 100 points. Hint: Use a logical operator to test for minimum
    score, as well as multiple else-if blocks �
    4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
    both teams have the same score and both have a score greater or equal 100
    points. Otherwise, no team wins the trophy
    Test data:
    § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
    § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
    § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106*/

/*

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins wins trophy')
} else if (scoreKoalas > scoreDolphins) {
    console.log('Koala wins the trophy');

} else if (scoreDolphins === scoreKoalas) {

    console.log('Both win the trophy');
}


const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins wins')
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koala wins the trophy');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('both wins');
} else {
    console.log('no one wins the trophy');
}
* ****Chalenge 4****

Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant.In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20 %.
Your tasks:
1. Calculate the tip, depending on the bill value.Create a variable called 'tip' for
this.It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
    (bill + tip).Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20 % of a value, simply multiply it by 20 / 100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`the bill was ${bill} the tip was ${tip} the total was ${bill + tip}`);




const bill = 49;                            (true)       (false)
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The total bill was ${bill} the total tips ${tip} and total ${bill + tip}`);

*/


// Challenge  1

// // suns metai priligstai 4 zmogaus bet pirmi 2
// // metai * 10.5 kiek man metu pagal suns metus /
// //     1.pirmi suns metais 2 skaiciuojasi * 10.5.
// // 2.Likusieji metai * 4;
// // 3.Mano metai 37 - 2; 2 * 10.5
// // 4.Likusieji metai 35 * 4
// // // 5.Sudedam mano metai + likusieji metai = mano metai suns metuuose.
// // const myAge = 3;
// // let earlyYears = 2;
// // earlyYears *= 10.5;
// // let laterYears = myAge - 2;
// // laterYears *= 2;
// // let myAgeInDogsYears = earlyYears + laterYears
// // console.log(myAgeInDogsYears);
// // console.log(`Man yra ${myAge} , bet
// // pagal sunu metus man yra ${myAgeInDogsYears}
// // }`)


// 111111111111111111111111111111111111111111111111111111
// // The magic eight ball **************
// let userName = 'Tomas';
// userName ? console.log(`Hello ${userName}`) :
//     console.log('Hello');
// // if (userName === 'Tomas') {
// //     console.log('Hello Tomas');
// // } else {
// //     console.log('Hello');
// // };

// let userQuestion = 'What is my name?';
// console.log(`${userName} has asked ${userQuestion}`);
// let randomNumber = Math.floor(Math.random() * 8);
// console.log(randomNumber);
// let eightBall = '';

// switch (randomNumber) {
//     case 0:
//         eightBall = 'It is certain'
//         break;
//     case 1:
//         eightBall = 'It is decidedly so';
//         break;
// //     case 2:
// //         eightBall = 'Reply hazy try again';
// //     case 3:
// //         eightBall = 'Cannot predict now';
// //         break;
// //     case 4:
// //         eightBall = 'Do not count on it';
// //         break;
// //     case 5:
// //         eightBall = 'My sources say no';
// //         break;
// //     case 6:
// // //         eightBall = 'Outlook not so good';
// // //         break;
// // //     case 7:
// // //         eightBall = 'Signs point to yes';
// // //         break;
// // // }
// // // console.log(eightBall);
// // // 2222222222222222222222222222222222222222222222222
// // // *************RACE DAYYYYYYYY********
// // let raceNumber = Math.floor(Math.random() * 1000);
// // console.log(raceNumber)
// // let registeredEarly = true;
// // let runnerAge = 18;
// // if (registeredEarly === true && runnerAge > 18) {
// //     console.log(`Runner number ${raceNumber}`)
// //     raceNumber += 1000;

// //     console.log(raceNumber)
// // }


// // if (runnerAge > 18 && registeredEarly) {
// //     console.log(`The race start at 9:30,your race number is : ${raceNumber}`)
// // } else if (runnerAge > 18 && registeredEarly === false) {
// //     console.log(`You will race at 11:00 ,your race number is : ${raceNumber}`)
// // } else if (runnerAge < 18) {
// //     console.log(`You will race at 12:30,your race number is : ${raceNumber}`)
// // } else {
// //     console.log('The runners to see the registraition desk')
// // }


// let kiausiniai = Math.floor(Math.random() * 10);
// let baltiKiausiniai = 4;
// let rudiKiausiniai = 6;

// console.log(kiausiniai)
// if ()


// ************
// CODING CHALLENGE #2********
//  ***************************
/*

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 :
        bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]),
calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);*/


// CHALLENGE 3*****************************/
/*
const mark = {
    fullName: 'Mark miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi;
    }
};


const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;

    }
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName} is BMI  (${mark.bmi}) is
    higher than ${john.fullName} is BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName} is BMI  (${john.bmi}) is
    higher than ${mark.fullName} is BMI (${mark.bmi})`)
}

*/

// *******************
// Challeng #5
// *********************************************
/*const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 :
        bill * 0.2;
}
const bills = [
    22,
    295,
    176,
    440,
    37,
    105,
    10,
    1100,
    86,
    52
]
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);


// const saskaita = [
//     10,
//     20,
//     30
// ]
// const arbata = [];
// const isviso = [];

// for (let j = 0; j < saskaita.length; j++) {
//     const tip = calcTip(saskaita[j])
//     arbata.push(tip);
//     isviso.push(tip + saskaita[j]);
// }
// console.log(saskaita, arbata, isviso)

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        // console.log(sum);
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(tips));
console.log(calcAverage(totals));


*/

// const numbers = function () {
//     [
//         1, 2, 3, 4, 5, 6, 7, 8, 9, 10
//     ];
//     for (let i = 1; i < numbers.length; i++) {
//         return (numbers * numbers);
//     }

// }
// console.log(numbers)