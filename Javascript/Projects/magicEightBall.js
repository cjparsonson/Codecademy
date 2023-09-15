// Greet user
let userName = 'Chris';
userName ? console.log(`Hello, ${userName}!`)
: console.log('Hello!');

// Set question
let userQuestion = 'Will it rain on Monday?';
userName ? console.log(`${userName} has asked: ${userQuestion}.`)
: console.log(`You have asked: ${userQuestion}.`);

// Generate random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

// Switch to assign answer to eightBall
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break

  case 1:
    eightBall = 'It is decidedly so';
    break

  case 2:
    eightBall = 'Reply hazy try again';
    break

  case 3:
    eightBall = 'Cannot predict now';
    break

  case 4:
    eightBall = 'Do not count on it';
    break

  case 5:
    eightBall = 'My sources say no';
    break

  case 6:
    eightBall = 'Outlook not so good';
    break

  case 7:
    eightBall = 'Signs point to yes';
    break

  default:
    eightBall = 'One simply cannot say';
    break
}

console.log(`The Magic Eight Ball says: ${eightBall}.`);
