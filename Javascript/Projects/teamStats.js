const team = {
    _players: [{
      firstName: 'Chris',
      lastName: 'Parsonson',
      age: 36
    },
    {
      firstName: 'Bob',
      lastName: 'Smith',
      age: 31
    },
    {
      firstName: 'Steve',
      lastName: 'Jones',
      age: 28
    }],
    _games: [{
      opponent: 'Portsmouth',
      teamPoints: 6,
      opponentPoints: 3
    },
    {
      opponent: 'Winchester',
      teamPoints: 3,
      opponentPoints: 5
    },
    {
      opponent: 'London',
      teamPoints: 7,
      opponentPoints: 2
    }],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer: function (newFirstName, newLastName, newAge) {
       player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      },
      this._players.push(player);
    },
    addGame: function (newOpponent, newTeamPoints, newOpponentPoints) {
      game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      },
      this._games.push(game);
    }
  };

  team.addPlayer('Bugs', 'Bunny', 76);
  team.addGame('Titans', 100, 98);
  console.log(team.players);
  console.log(team.games);
