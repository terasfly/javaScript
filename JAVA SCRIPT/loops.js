
/*// for (let i = 1; i <= 6; i++) {
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
// const animals = [
//     "zirafra",
//     "rabbit",
//     "dog",
//     "cat"
// ];
// for (let i = 0; i < animals.length; i++) {
//     console.log(i, animals[i])
// }

// for (let i = 0; i < 6; i++) {
//     console.log("Da ba dee da ba daa".toUpperCase(), i);
// }

// let people = ["eoma", "Scooby", "Velma", "Daphne", "Shaggy", "Fred", "eoma", "Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!
// for (let i = 1; i < people.length; i++) {
//     console.log(i, people[i]);
// }
// let name = "tomas";
// for (let i = 1; i < 7; i++) {
//     console.log("tomas")
// }
// for (let pound = 1; pound <= 9; pound * 3) {
//     console.log(`apskaiciouti kiek turui ${pound}`);
// }

let vardai = [
    ['Tomas', 'Egle', 'Matas', 'Laura', 'Bruno'],
    ['omas', 'gle', 'Matas', 'Laura', 'Bruno'],
    ['mas', 'le', 'Matas', 'Laura', 'Bruno'],
]

// for (i = 0; i < vardai.length; i++)
//     console.log(vardai[i])

for (let vard of vardai) {
    for (let students of vard) {
        console.log(vard)
    }
}*/




//  NESTED   LOOPS
// /
/*
for (let i = 1; i <= 10; i++) {
    console.log(`i is :${i}`)
    for (let j = 1; j < 4; j++) {
        console.log(`    j is :${j}`)
    }
}
const seatingChart = [
    ['Matas', 'Tomas', 'Laura'],
    ['Egle', 'Nijole', 'Erikas'],
    ['Petras', 'Audrius', 'Mantas']
]
for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`      ROW #${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}





const classroom = [
    ['Matas', 'Tomas', 'Laura'],
    ['Egle', 'Nijole', 'Erikas'],
    ['Petras', 'Audrius', 'Mantas']
]
for (let i = 0; i < classroom.length; i++) {
    const row = classroom[i];
    console.log(`   ROW #${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }

}


for (let i = 1; i < 10; i++) {
    console.log(`i is ${i}`)
    for (let raw = 1; raw < 5; raw++) {
        console.log(`    is ${raw}`)
    }
}

const classrooms = [
    ['Matas', 'Tomas', 'Laura'],
    ['Egle', 'Nijole', 'Erikas'],
    ['Petras', 'Audrius', 'Mantas']
]
for (let i = 0; i < classrooms.length; i++) {
    const row = classrooms[i];
    console.log(`    Row #${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}


// *************WHILE LOOPS*************
let count = 0
while (count < 10) {
    count++;
    console.log(count)
}



const secret = 'babyhippo';
let guess = prompt("enter the secret code...");
while (guess !== secret) {
    guess = prompt("enter secret code...");
}
console.log("YOu got secret")





// *************BREAK KEYWORD**********

let input = prompt('Hey, say something!')
while (true) {
    input = prompt(input);
    if (input.toLowerCase() === 'stop copying me') {
        break;
    }
}
console.log('ok you win')

for (let i = 0; i < 1000; i++) {
    console.log(i);
    if (i === 100)
        break;

}
/*

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// for (let num of numbers) {
//     while (num < 100) {
//         num = ++;
//     }
//     console.log(`skaiciai ${num}`)
// }
********************
    ITERATING OBJECTS
    ***********************/
/*
const testScores = {
 tomas: 29,
 matas: 34,
 egle: 12,
 Laura: 67,
}
for (let person in testScores) {
 console.log(`${person} scored ${testScores[person]}`);
}

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
 total += score;

}
console.log(total / scores.length)
*/

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`lifting weight repetition ${rep}`)
// }

/*
const types = [];

const jonas = [
    'Jonas',
    'tomas',
    'perta',
    'teacher',
    ['micheal', 'steven', 'peter'],
    'matas'
]
for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);

    // types[i] = typeof jonas[i];
    //  SAME
    types.push(typeof jonas[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i) {
    ages.push(2037 - years[i]);
}
console.log(ages);

const tomas = [
    'Jonas',
    'tomas',
    12,
    'perta',
    'teacher',
    ['micheal', 'steven', 'peter'],
    'matas'
]
for (let i = 0; i < tomas.length; i++) {
    if (typeof tomas[i] === 'number')
}
console.log(tomas[i], typeof tomas[i])
*/

// ***************
// LOOP IN LOOPS
// ************
/*
const jonas = [
    'laura',
    'surininaite',
    2037 - 1993,
    'teacher',
    ['matas', 'kestas', 'dainius'],
    true
];
for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i])
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------Starting exercise ${exercise}
    `);
    for (let rep = 1; rep <= 3; rep++) {
        console.log(`${exercise} liftting weights repetition ${rep}`);

    }
}*/

// ************
// WHILE Loop
// *********************
/*
let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: lifting weights repetition ${rep}`);
    rep++;
}
// */
// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);
// while (dice !== 6) {
//     console.log(`YOu rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) {
//         console.log('Loop is finish')
//     }
// }
// let count = 100;
// function loops() {
//     for (let i = 1; i <= 2; i++)
//         console.log(i);

// }
/*
let years = [1999, 2004, 2008, 2009];
let ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i])
}
console.log(ages)


function fibonacciGenerator(n) {
    let output = [];
    if (n === 1) {
        output = [0]
    } else if (n === 2) {
        output = [0, 1]
    } else {
        output = [0, 1, 1, 2]
        for (let i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);

        }

    }
    return output;
}

output = fibonacciGenerator(2)
console.log(output)


function skaiciai(a) {
    let output1 = [];
    if (a === 1) {
        output1 = [2, 3]
    } else if (a === 2) {
        output1 = [4, 5, 6]
    } else {
        output1 = [100]
    }
    return output1
}
output1 = skaiciai(2)
console.log(output1)

function isSnakeEyes(a) {
    if (a === [1, 1]) {
        console.log('Snake Eyes!');
    } else {
        console.log('Not Snake Eyes');
    }
    isSnakeEyes(3);
    */


let vardai = ['matas', 'kestas', 'lasss']
for (let i = 0; i <= vardai.length - 1; i++) {
    console.log(i, vardai[i]
    )
}