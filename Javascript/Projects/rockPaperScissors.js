const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' | userInput === 'scissors' | userInput === 'paper' | userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error: Input Is Invalid.');
    }
  };

  const getComputerChoice = () => {
    randomInt = Math.floor(Math.random() * 3);
    switch (randomInt) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
  };

  // Logic to determine winner
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'tie';
    }

    if (userChoice === 'bomb') { // Cheat code
      return 'User wins.'
    }

    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer wins.';
      } else {
        return 'User wins.';
      }
    } else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer wins.';
      } else {
        return 'User wins.';
      }
    } else { // assume 'scissors'
      if (computerChoice === 'rock') {
        return 'Computer wins.';
      } else {
        return 'User wins.';
      }
    }
  }

  function playGame() {
    userChoice = getUserChoice('Bomb');
    computerChoice = getComputerChoice();
    console.log(`User: ${userChoice}, Computer: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  }

  playGame();
