
/*let js = 'amazing';
// if (js === 'amazing') alert('JavaScript is Fun');
console.log(12 + 5);

console.log("Jonas");
let firstName = "Jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let firstJob = "teacher";
let myCurrentJob = "programmer";

console.log("firstJob");
console.log("myCurrentJob");
*/
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof "Jonas");
// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// variables

// const birthYear = 1999;
// birthYear = 2000;
//   Math Operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = 'Jonas';
// const lastName = 'Schedtmann';
// console.log(firstName + ' ' + lastName);

// let x = 10 + 5;
// x += 10;    // x = x + 10  15+10
// x *= 4;
// x++;
// x--;
// x--;
// console.log(x);

// // Comparison operators


// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);
// const averagAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averagAge);

//  *Strings***
// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;
// const car = 'toyota';
// const brother = 'matas';
// const money = 1000;
// const salary = 800;

// const jonas = "I,m " + firstName + ', a ' +
//     (year - birthYear) + ' years old ' + job + '! ' + car + ' thanks '
//     + 'brother ' + (money - salary);
// console.log(jonas)

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job},! ${car}, thanks
// brother ${money - salary}`;
// console.log(jonasNew);

// console.log(`Just a regular stirng...
// hfakffk
// gfhthth
// gjkuiku
// `);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`);

// **Desizon

// const age = 13;
// const isOldEnough = age >= 18;

// if (age >= 18) {
//     console.log('Sarah can start driving license');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years ;)`);
// }

// if () {

// } else {

// }

// const birthYear = 2012;
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

// const birthYear = 2001;
// let adult;
// if (birthYear >= 2000) {
//     adult = 'man';
// } else {
//     adult = 'child';
// }
// console.log(adult);

// ******   20 ******
// // type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23));

// // type cooersion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' * '2');

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// const inputYears = 2 + 2 + '2';
// console.log(inputYears);


// // **** 21. True or False*****
// 5 false values; 0, '', undefined, null, Nan

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));

// const money = 5;
// if (money) {
// //     console.log("don't spend it all;");

// // } else {
// //     console.log('You should get a job!');
// // }
// // let height;
// // if (height) {
// //     console.log("Yay height is defined");

// // } else {
// //     console.log("Height is undefined");
// // }
// // let height = 123;
// // if (height) {
// //     console.log("Yay height is defined");

// // } else {
// //     console.log("Height is undefined");
// // }

// // ****** 22 **** (loose) and (script)
// const age = '18';
// // const age = 18;
// if (age === 18) console.log('you just became an adult (strict)');
// if (age == 18) console.log('you just became an adult (loose)');

// // === strict!! only same variable 18 and 18 cant be '18' and 18

// const favourite = prompt("What's your favourite number?");
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite == 23) {
//     console.log('Cool! 23 is an amazing number!')
// } else if (favourite === 7) {
//     console.log('7 is also a cool number')
// } else {
//     console.log('number is not 23 or 7')
// }
//  ***my first game :)
/*
const favourite = Number(prompt('Guess the number?'));
console.log(favourite);

if (favourite === 1) {
    console.log('Wrong answer')
} else if (favourite === 6) {
    console.log('!!!!!!!!!Yes aswer correct you win Tesla PLANE!!!!!!!!!')

}
else {
    console.log('Wrong answer')
}
// ***** Boolean Logic********************************************************************
*/

// ****The swith statement****
/*const day = 'monday';

switch (day) {
    case 'monday':
        console.log('plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'Friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy');
        break;
    default:
        console.log('Not a valid day');

}


if (day === 'monday') {
    console.log('plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {

} else if (day === 'wednesday' || day === 'thursday') {

} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {

} else {
    console.log('not a valid day');
}

// ***** conditional Operator***************************************************************************8

const age = 14;
age >= 18 ? console.log('I like to drink wine') :
    console.log('I like to drink water');



const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);


let drink2;
if (age >= 18) {
    drink2 = 'wine';

} else {
    drink2 = 'water';
}
console.log(drink2);
*/
// const age = 23;
// age >= 18 ? console.log('I like to drink wine') :
//     console.log('I like to drink water');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//     drink2 = 'wine';

// } else {
//     drink2 = 'water';
// }
// console.log(drink2);

// const age1 = 15;
// console.log(`I like to drink fresh ${age1 >= 18 ? 'wine' : 'water'}`);

// **************************************
// ********************************
//  Array
// //  *****************

// let students = [];
// let colors = ['red', 'orange', 'blue'];
// let lottoNums = [19, 22, 34, 15];
// // let stuff = [true, 58, 'cat', null ];
// let days = ['monday', 'Tuesday', 'Wednesday'];

// console.log(days);
// console.log(days.length);

// // ****************
// //                Arrays date out

// //                ************************
// console.log(days[2]);
// let colors = ['bluk', 'green', 'black'];
// colors[2] = 'blue';
// colors[0] = 'red';
// colors[3] = 'purple';
// console.log(colors);


// 88************************
//                    IF else**************
// //                    *******************
// let ratting = 3;
// if (ratting === 3) {
//     console.log("yoy are winner");
// }

// let random = Math.random();
// if (random < 0.5) {
//     console.log('math works');
//     console.log(random);
// }
// if (random >= 0.5) {
//     console.log('math dont works');
//     console.log(random);
// }


// // const dayOfWeek = 'Friday';
// // if (dayOfWeek === 'Monday') {
// //     console.log("I HATE MONDAYS!")
// // } else if (dayOfWeek === 'Saturday') {
// //     console.log("I Love Saturdays")
// // } else if (dayOfWeek === 'Sunday') {
// //     console.log("I sleep")
// // } else if (dayOfWeek === 'Friday') {
// //     console.log("I Love fishing")
// // }

// // const age = 8989;
// // // if (age <= 5) {
// // //     console.log("Free")
// // // }
// // if (age < 10) {
// //     console.log(`you are a child need pay $10 `)
// // }
// // else if (age < 65) {
// //     console.log("You are adult you pay $20")

// //     // if (age > 65) {
// //     //     console.log("Free")
// // } else {
// //     console.log("free")
// // }

// // ***********************
// // ****************   ELSE************
// // const dayOfWeek = '3';
// // if (dayOfWeek === 'Monday') {
// //     console.log("I HATE MONDAYS!")
// // } else if (dayOfWeek === 'Saturday') {
// //     console.log("I Love Saturdays")
// // } else if (dayOfWeek === 'Sunday') {
// //     console.log("I sleep")
// // } else if (dayOfWeek === 'Friday') {
// //     console.log("I Love fishing")
// // } else {
// //     console.log("meh")
// // }
// // *******************************
// // **************************
// //      ARARAY METHODS        ARRAY METHODS
// //                    *****************
// // Push - add to the end.
// //     Pop - remove from end.
// //         Shift - remove from Start.
// //             Unshift - add to start.

// let colors = ['blue', 'green', 'black', 'red'];
// console.log(colors.pop());
// colors[0] = 'purple';
// console.log(colors);

// let movieLine = ['tom', 'nancy'];
// movieLine[2] = 'tomas';
// movieLine.push('Laura');
// console.log(movieLine);


// let cat = 'blue';

// console.log(cat.toUpperCase());

// let barbell = []
// barbell.push(45)
// barbell.push(25)
// barbell.push(435)
// barbell.push(495)
// barbell.push(95)
// console.log(barbell);
// barbell.pop();
// barbell.pop();
// barbell.pop();
// console.log(barbell);
// //         Shift - remove from Start.
// //             Unshift - add to start.

// barbell.shift([])
// barbell.shift([])
// console.log(barbell);
// barbell.unshift('laura');
// barbell.unshift('kestas');
// barbell.unshift('petras');
// barbell.unshift('matas');
// console.log(barbell);
// barbell.unshift('kestas', 'babo', 'Egle');
// console.log(barbell)
// barbell.lengths;
// console.log(barbell);



// // *******************************
// // //            MORE METHODS
// // //            *****************************
// // concat-merge arrays all array add same line
// // includes-look for value
// // indexOf - just like String.indexOf
// // join - creates a string from an array
// // reverse - reverse an array
// // slice - copies a portio an array
// // splice - removes/ replace elements
// // sort- sorts an array

// // let cats = ['blue', 'kitty'];
// // let dogs = ['rusty', 'wyatt'];
// // let combo = cats.concat(dogs);
// // console.log(combo);
// // // [
// // //     "blue",
// // //     "kitty",
// // //     "rusty",
// // //     "wyatt"
// // // ]

// // let cat1 = ('Blue', 'White');
// // let cat2 = cat1.includes('blue');
// // console.log(cat2);
// // //  true or false  using .includes()
// // let cat3 = ('blue');
// // let cat4 = cat3.indexOf('e');
// // console.log(cat4);
// // // .indexOf(tells corect letters place)

// // let comboParty = ['kitty', 'rusty', 'blue'];
// // let flex = comboParty.indexOf('blue');
// // console.log(flex);
// // comboParty.reverse();
// // console.log(comboParty);

// // *************SLICE****************
// let colors = ['black', 'green', 'red', 'blue', 'purple'];
// let coolColors = colors.slice(2, 4);
// console.log(coolColors);

// // *********************SPLICE***************

// let colors1 = ['black', 'green', 'red', 'blue', 'purple'];
// let colors2 = colors1.splice(2, 2);
// console.log(colors2);
// console.log(colors1);

// // ********** Insert something .splice (number, nothing delete,'what insert')
// colors1.splice(1, 0, 'red-green');

// console.log(colors1);
// colors1.splice(3, 0, 'red', 'orange', 'yellow');
// console.log(colors1);


// // **************SORT***********
// let scores = [18, -12, 4, 222, 555, 8, -23, 56];
// console.log(scores.sort());

// // **********lygybe*****
// let number = [22, 32, 53];
// let number1 = number;
// console.log(number1);
// console.log(number === number1);
// // when change 1 or 2 variable change like same.
// // 8*******************Arrays and Const*********

// const nums = [1, 2, 3];
// // array always better can change inside numbers/


// // ***************Nested Arrays**********
// // Pakeist arrays
// // 1.suskaicioti 0, 1, 2, ir jai nested tas pats
// // rasoma prie variable
// // gameBoard[3] [3] = o;
// const gameBoard = [['x', 'o', 'x'], ['o', 'null', 'x'],
// ['null', 'o', 'x']];
// console.log(gameBoard);
// console.log(gameBoard[1]);
// console.log(gameBoard[1][2]);

// const airplaneSeats = [
//     ['Ruth', 'Anthony', 'Stevie'],
//     ['Amelia', 'Pedro', 'Maya'],
//     ['Xavier', 'Ananya', 'Luis'],
//     ['Luke', null, 'Deniz'],
//     ['Rin', 'Sakura', 'Francisco']
// ];
// airplaneSeats[3][1] = 'Hugo';
// console.log(airplaneSeats);
// airplaneSeats[0][1] = 'matas';
// console.log(airplaneSeats);


// // ******************
// // ********************
// //       OBJECTS***************
// //     //   **********************

// const person = {
//     firsName: 'Tomas',
//     lastName: 'Surininas'
// };
// console.log(person);

// const kitchenSink = {
//     favNum: 888888,
//     isFunny: true,
//     colors: ['red', 'orange']
// }
// console.log(kitchenSink);
// kitchenSink["favNum"];
// console.log(kitchenSink);

// person.firsName;
// console.log(person);


// const years = {
//     1999: 'good',
//     2020: 'notgood'
// }
// years[1999];
// console.log(years[1999]);

// const restaurant = {
//     name: 'Ichiran Ramen',
//     address: 'Johnson Ave',
//     city: 'Brooklyn',
//     state: 'NY',
//     zipcode: '11206',
// }
// const fullAddress = restaurant[fullAddress];
// console.log(restaurant[fullAddress]);

// const midterms = {
//     tomas: 12,
//     petras: 20
// }

// const backpack = {
//     name: "tomas",
//     laura: 'girl',
//     matas: 'chiken',
//     bruno: 'cat',
//     dezuteBlizgiu {
//         mepsas: raudonas,

//     }


// };
// let


// **************************
// **************ARRAYS******************

/*let seima = ['Matas', 'Laura', 'Tomas'];
seima[3] = 'egle';
console.log(seima)

seima.push('petras');
console.log(seima);
seima.shift()
console.log(seima)
seima.unshift('bruno');
console.log(seima)
let kambarys = ['kede', 'stalas', 'lova', 'katinas', 'zaislai'];
kambarys.slice(2, 4);
console.log(kambarys);

const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']

];
airplaneSeats[3][1] = 'Hugo';
console.log(airplaneSeats)

const person = {
    firstName: 'Tomas',
    lastName: 'Surininas'
}
console.log(person)
const midterms = {
    tomas: 22,
    perta: 23
}
midterms.tomas = 56
console.log(midterms)
const comments = [
    { username: 'tomas' },
    { name: 'ddfjgfjgf' }
]
console.log(comments[1])

// console.log(1)
// console.log()
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)

// for (let i = 1; i <= 6; i++) {
//     console.log('da bu dee da ')
//     console.log(i);

// for (let i = 1; i <= 20; i += 2) {
//     console.log(i)
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i)
// }
// for (let i = 2; i <= 78; i *= 5) {
//     console.log(i)
// }
// for (let i = 10; i <= 78; i += 3) {
//     console.log(i)
// }
const animals = [
    "zirafra",
    "rabbit",
    "dog",
    "cat"
];
for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i])
}

for (let i = 0; i < 6; i++) {
    console.log("Da ba dee da ba daa".toUpperCase(), i);
}

let people = ["eoma", "Scooby", "Velma", "Daphne", "Shaggy", "Fred", "eoma", "Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!
for (let i = 1; i < people.length; i++) {
    console.log(i, people[i]);
}
let name = "tomas";
for (let i = 1; i < 7; i++) {
    console.log("tomas")
}
for (let pound = 1; pound <= 9; pound * 3) {
    console.log(`apskaiciouti kiek turui ${pound}`);
*/
document.querySelector('')