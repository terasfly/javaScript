const getSleepHours = day => {
    day.toLowerCase()
    switch (day) {
        case 'monday':
            return 8;
        case 'tuesday':
            return 6;
        case 'wednesday':
            return 4;
        case 'thursday':
            return 9;
        case 'friday':
            return 10;
        case 'saturday':
            return 16;
        case 'sunday':
            return 2;
    }
}


const getActualSleepHours = () => getSleepHours
    ('monday') + getSleepHours('tuesday') + getSleepHours('wednesday')
    + getSleepHours('thursday') + getSleepHours('friday')
    + getSleepHours('saturday') + getSleepHours('sunday');


const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
};

const calculateSleepDebt = () => {
    const actualSleepOurs = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();


    if (actualSleepOurs === idealSleepHours) {
        console.log(`You got perfect amount of ${actualSleepOurs} sleep`);
    } else if (actualSleepOurs > idealSleepHours) {
        console.log(`Your slept ${actualSleepOurs - idealSleepHours} more hours.You got sleep than needed.`);
    } else {
        console.log(`You slept ${idealSleepHours - actualSleepOurs} hours.You should get some rest.`);
    }
};

calculateSleepDebt();

// console.log(calculateSleepDebt)
// console.log(getIdealSleepHours());

/*
function mieguPerSavaite = (diena) => {
    apskaiciujam kiek kokiom dienom miegu per savaiete
}
function kiekIsvisoMiegojau = () => mieguPerSavaite + + +
    sudedam viska matau kiek val per sav miegojau

function idealusMiegas = () => {
    let idealumiegoti = 7;
    return idealumiegoti * 7 dienu;
}
*/
