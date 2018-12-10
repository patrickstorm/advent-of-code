class Player {
  constructor(id) {
    this.id = id;
    this.score = 0;
  }

  addPoints(points) {
    this.score = this.score + points;
  }
}

class Marble {
  constructor(value, next, prev) {
    this.value = value;
    if (!next) {
      this.next = this;
      this.prev = this;
    } else {
      this.next = next;
      this.prev = prev;
    }
  }
}

class Game {
  constructor(numPlayers, lastMarble) {
    this.gameActive = false;
    this.players = Array(numPlayers)
      .fill()
      .map((a, index) => new Player(index));
    this.currentPlayer = this.players[0];
    this.currentMarble = new Marble(0, 0, 0);
    this.round = 0;
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

  addMarble() {
    const newMarble = new Marble(
      this.round,
      this.currentMarble.next.next,
      this.currentMarble.next
    );
    this.currentMarble.next.next = newMarble;
    newMarble.next.prev = newMarble;
    this.currentMarble = newMarble;
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

    const marbleToTake = this.currentMarble.prev.prev.prev.prev.prev.prev.prev;
    this.currentPlayer.addPoints(marbleToTake.value);

    this.currentMarble = marbleToTake.next;

    this.currentMarble.prev = marbleToTake.prev;
    this.currentMarble.prev.next = this.currentMarble;
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
    console.log(
      `[${this.round}] ${this.currentMarble.prev.value} > ${
        this.currentMarble.value
      }`
    );
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
  '30 players; last marble is worth 5807 points: high score is 37305',
  '426 players; last marble is worth 72058 points: high score is 424112'
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

// console.log(playGame(inputs[0]));
// playAllExampleInputsAndCheck()
playFinalGame();
