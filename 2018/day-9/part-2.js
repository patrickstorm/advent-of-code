class Player {
  constructor(id) {
    this.id = id;
    this.score = 0;
  }

  addPoints(points) {
    this.score = this.score + points;
  }
}

class Game {
  constructor(numPlayers, lastMarble) {
    this.gameActive = false;
    this.players = Array(numPlayers)
      .fill()
      .map((a, index) => new Player(index));
    this.currentPlayer = this.players[0];
    this.gameArray = ['0x'];
    this.round = 0;
    this.highestMarble = 0;
    this.lastMarble = lastMarble;
  }

  startGame() {
    this.gameActive = true;
    // this.logRound();
    while (this.round < this.lastMarble) {
      this.round++;
      this.tick();
    }
  }

  getActiveIndex() {
    return this.gameArray.findIndex((num) => typeof num === 'string');
  }

  addMarble() {
    const oldCurrentIndex = this.getActiveIndex();

    // Change current marble to regular marble
    this.gameArray[oldCurrentIndex] = parseInt(
      this.gameArray[oldCurrentIndex],
      10
    );

    let indexToInsert = oldCurrentIndex + 2;

    if (indexToInsert > this.gameArray.length) {
      indexToInsert = 1;
    }

    const marbleToInsert = `${this.round}x`;

    this.gameArray.splice(indexToInsert, 0, marbleToInsert);
  }

  assignNextPlayer() {
    if (this.players[this.currentPlayer.id + 1]) {
      this.currentPlayer = this.players[this.currentPlayer.id + 1];
    } else {
      this.currentPlayer = this.players[0];
    }
  }

  handle23() {
    this.currentPlayer.addPoints(this.round);

    const oldCurrentIndex = this.getActiveIndex();
    // reset currentIndex
    this.gameArray[oldCurrentIndex] = parseInt(
      this.gameArray[oldCurrentIndex],
      10
    );

    // Marble index to remove is 7 counter clockwise
    let takeIndex = oldCurrentIndex - 7;
    // If the marble index is below 0, start from end of array
    if (takeIndex < 0) {
      takeIndex = this.gameArray.length + takeIndex;
    }

    // The new current will be 1 clockwise from marble to remove
    const nextCurrentIndex = takeIndex + 1;
    // If marble is at the end of the array, next current is first in array
    if (takeIndex === this.gameArray.length) {
      nextCurrentIndex = 0;
    }
    // Set current
    this.gameArray[nextCurrentIndex] = `${this.gameArray[nextCurrentIndex]}x`;

    // Remove take marble and set score for current player
    const takeMarbleValue = this.gameArray[takeIndex];
    this.gameArray.splice(takeIndex, 1);
    this.currentPlayer.addPoints(takeMarbleValue);
  }

  tick() {
    this.assignNextPlayer();
    if (this.round % 23 === 0) {
      this.handle23();
    } else {
      this.addMarble();
    }
    // this.logRound();
  }

  getWinner() {
    return this.players.reduce((highestPlayer, player) => {
      return player.score > highestPlayer.score ? player : highestPlayer;
    }, this.players[0]);
  }

  logRound() {
    console.log(`[${this.round}] ${this.gameArray.join(' ')}`);
  }
}

const parseInput = (input) => {
  const inputSplit = input.split(' players; last marble is worth ');
  const numPlayers = parseInt(inputSplit[0], 10);
  const lastMarble = parseInt(inputSplit[1].split(' points:')[0], 10);
  return { numPlayers, lastMarble };
};

const inputs = [
  '9 players; last marble is worth 25: high score is 32',
  '10 players; last marble is worth 1618 points: high score is 8317',
  '13 players; last marble is worth 7999 points: high score is 146373',
  '17 players; last marble is worth 1104 points: high score is 2764',
  '21 players; last marble is worth 6111 points: high score is 54718',
  '30 players; last marble is worth 5807 points: high score is 37305'
];

const playGame = (input) => {
  const { numPlayers, lastMarble } = parseInput(input);
  const game = new Game(numPlayers, lastMarble);
  game.startGame();
  const winner = game.getWinner();
  return winner.score;
};

const playAllExampleInputsAndCheck = () => {
  inputs.forEach((input) => {
    const expectedOut = parseInt(input.split('high score is ')[1], 10);
    const output = playGame(input);
    console.log(output === expectedOut);
  });
};

const playFinalGame = () => {
  const input = '426 players; last marble is worth 7205800 points';
  console.log(playGame(input));
};

// playAllExampleInputsAndCheck()
playFinalGame();
