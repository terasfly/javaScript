// const resetCount = document.querySelector('.reset');
// const add = document.querySelector('.add');
// const subtract = document.querySelector('.subtract');

// add.addEventListener('click', () => {
//     count.innerHTML++;

// });

subtract.addEventListener('click', () => {
    count.innerHTML--;
});

resetCount.addEventListener('click', () => {
    document.querySelector('.count').textContent = 0;
});
const count = document.querySelector('.count');
const buttons = document.querySelector('.buttons');


addEventListener('click', (e) => {
    if (e.target.classList.contains('add')) {
        count.innerHTML++;
        setColor();
    } if (e.target.classList.contains('subtract')) {
        count.innerHTML--;
        setColor();
    } if (e.target.classList.contains('reset')) {
        count.textContent = 0;

        count.innerHTML = randomNumber;

        setColor();
    }
});
setColor = () => {
    if (count.innerHTML > 0) {
        count.style.color = 'yellow';
    } else if (count.innerHTML < 0) {
        count.style.color = 'red';
    } else {
        count.style.color = '#fff';
    }
}
const generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    count.innerHTML = randomNumber;
}

*******************************

