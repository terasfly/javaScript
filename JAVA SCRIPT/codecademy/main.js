const random = Math.floor(Math.random() * 3);
console.log(random)
const name = 'Nala';

const getRandomEvent = () => {
    if (random === 0) {
        return 'Marathon';
    } else if (random === 1) {
        return 'Triatlon'
    } else if (random === 2) {
        return 'Penathlon';
    }

};
// The scope of  'days' is too tight
const getTrainingDays = event => {
    let days;
    if (event === 'Marathon') {
        days = 50;
    } else if (event === 'Triathlon') {
        days = 100;
    } else if (event === 'Pentahtlon') {
        days = 200;
    }
    return days;
};
// The scope of 'name' is to tight
const logEvent = (name, event) => {
    // const name = 'Nala';
    console.log(`${name} event is : ${event}`)
};

const logTime = (name, days) => {
    // const name = 'Nala';
    console.log(`${name} time to train is : ${days} days`);
};

const event = getRandomEvent();
const days = getTrainingDays(event);

logEvent(name, event);
logTime(name, days);