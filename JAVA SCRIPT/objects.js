/*const jonasArray = [
    'jonas',
    'tomas',
    2037 - 1991,
    'teacher',
    ['micheal', 'steven', 'peter']
];
const jonas = {
    firstName: 'Jonas',
    lastName: 'tomas',
    speedName: 'perta',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['micheal', 'steven', 'peter']
}
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['speed' + nameKey]);

console.log(jonas.job)


const interestedIn = prompt('What do you know to know about Jonas? Choose between firstName, lastname, age, job and friends');
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request!Choose between firstName, lastname, age, job and friends')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasdddgg';
console.log(jonas);

//Challenge
//'Jonas has 3 friends , and his best friend is called Micheal"
console.log(`${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`)
*/

// ********************
// OBJECT METHOD*****
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'tomas',
//     speedName: 'perta',
//     birthyear: 1991,
//     job: 'teacher',
//     hasDrivingLicence: true,
//     friends: ['micheal', 'steven', 'peter'],

    // calcAge: function (birthyear) {
    //     return 2037 - birthyear;
    // }
/*s

calcAge: function () {
    // console.log(this);
    this.age = 2037 - this.birthyear;
    return this.age;
},

getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDrivingLicence
        ? 'a' : 'no'} drivers license.`
}
// getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge} and he has ${this.hasDrivingLicence ? 'a' : 'no'} driver licence`
// }     PATS KARTOJAU

};
console.log(jonas.calcAge(jonas.age));
console.log(jonas.calcAge(jonas.age));
console.log(jonas.calcAge(jonas.age));
console.log(jonas.calcAge(jonas.age));
console.log(jonas.calcAge(jonas.age));
// console.log(jonas['calcAge'](1991));

// CHALLENGE
//"Jonas is a 46-year old teacher and he has a/no drivers lisence."

console.log(jonas.getSummary());*/