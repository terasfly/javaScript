// //

// ***************Rock Paper or Scissors**************************************


// const getUserChoice = userInput => {
//     userInput = userInput.toLowerCase();
//     if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
//         return userInput

//     } else {
//         console.log('error message')
//     }

// };
// const getComputerChoice = () => {
//     const randomNumber = Math.floor(Math.random() * 3);
//     switch (randomNumber) {

//         case 0:
//             return 'paper';

//         case 1:
//             return 'rock';

//         case 2:
//             return 'scissors';
//     }
// };
// // console.log(getComputerChoice());
// // console.log(getComputerChoice());
// // console.log(getComputerChoice());



// const determineWinner = (userChoice, computerChoice) => {
//     if (userChoice === computerChoice) {
//         return 'this game is a tie';
//     } if (userChoice === 'rock') {
//         if (computerChoice === 'paper') {
//             return 'Sorry computer won!'
//         } else {
//             return 'yes you won'
//         }
//     }


//     if (userChoice === 'paper') {
//         if (computerChoice === 'scissors') {
//             return 'Sorry, computer won';
//         } else {
//             return 'you won';
//         }
//     }
//     if (userChoice === 'scissors') {
//         if (computerChoice === 'rock') {
//             return 'sorry , computer won'
//         } else {
//             return 'You won'
//         }
//     }
//     if (userChoice === 'bomb') {
//         return 'you win';
//     }
// };
// console.log(determineWinner('rock', 'scissors'))


// const playGame = () => {
//     const userChoice = getUserChoice('');
//     const computerChoice = getComputerChoice();


//     console.log(`You threm: ${userChoice}`);
//     console.log(`the computer threw: ${computerChoice}`)

//     console.log(determineWinner(userChoice, computerChoice));

// };
// playGame()