const fs = require('fs');

// Moves are 'l', 's', 'r' in that order
const MOVES = ['l', 's', 'r'];
const cartMoves = {};

const CART_LETTERS = ['>', 'v', '<', '^'];
const isCart = (letter) => CART_LETTERS.includes(letter);

const formatInput = (input) => {
  const rows = input.split('\n');
  return rows.map((a) => a.split(''));
};

const getBlankMap = (map) => {
  return map.map((row, rowIndex) => {
    let newRow = '';
    for (let letterIndex = 0; letterIndex < row.length; letterIndex++) {
      if (isCart(row[letterIndex])) {
        if (row[letterIndex] === '>' || row[letterIndex] === '<') {
          newRow = `${newRow}-`;
        } else {
          newRow = `${newRow}|`;
        }
        cartMoves[`${letterIndex},${rowIndex}`] = MOVES[2];
      } else {
        newRow = `${newRow}${row[letterIndex]}`;
      }
    }
    return newRow;
  });
};

let crashHasHappened = false;

const moveCart = (rowIndex, letterIndex, map, blankMap) => {
  const row = map[rowIndex];
  const letter = row[letterIndex];
  const cartIndex = CART_LETTERS.indexOf(letter);

  const changeLetterTo = blankMap[rowIndex][letterIndex];
  let nextCartCoords = [];
  const currentCoords = `${letterIndex},${rowIndex}`;
  if (letter === '>') {
    nextCartCoords = [letterIndex + 1, rowIndex];
  } else if (letter === '<') {
    nextCartCoords = [letterIndex - 1, rowIndex];
  } else if (letter === '^') {
    nextCartCoords = [letterIndex, rowIndex - 1];
  } else if (letter === 'v') {
    nextCartCoords = [letterIndex, rowIndex + 1];
  }
  const nextLetter = map[nextCartCoords[1]][nextCartCoords[0]];

  if (CART_LETTERS.includes(nextLetter)) {
    console.log('CRASH!!!!!!', [nextCartCoords[0], nextCartCoords[1]]);
    crashHasHappened = true;
    // logMap(map);
  } else if (nextLetter === '-' || nextLetter === '|') {
    map[nextCartCoords[1]][nextCartCoords[0]] = letter;
    cartMoves[`${nextCartCoords[0]},${nextCartCoords[1]}`] =
      cartMoves[`${letterIndex},${rowIndex}`];
    delete cartMoves[`${letterIndex},${rowIndex}`];
  } else if (nextLetter === '+') {
    const previousMove = cartMoves[currentCoords]; // r is end of cycle
    const moveToMakeIndex = MOVES.indexOf(previousMove);
    const moveToMake = MOVES[moveToMakeIndex + 1] || 'l'; // begining of cycle

    if (moveToMake === 's') {
      map[nextCartCoords[1]][nextCartCoords[0]] = letter;
    } else if (moveToMake === 'r') {
      const newLetter = CART_LETTERS[cartIndex + 1] || CART_LETTERS[0];
      map[nextCartCoords[1]][nextCartCoords[0]] = `${newLetter}`;
    } else {
      const newLetter = CART_LETTERS[cartIndex - 1] || CART_LETTERS[3];
      map[nextCartCoords[1]][nextCartCoords[0]] = `${newLetter}`;
    }
    delete cartMoves[`${letterIndex},${rowIndex}`];
    cartMoves[`${nextCartCoords[0]},${nextCartCoords[1]}`] = moveToMake;
  } else if (nextLetter === '/') {
    let newLetter = '';
    if (letter === '>') newLetter = '^';
    else if (letter === 'v') newLetter = '<';
    else if (letter === '<') newLetter = 'v';
    else if (letter === '^') newLetter = '>';

    map[nextCartCoords[1]][nextCartCoords[0]] = `${newLetter}`;
    cartMoves[`${nextCartCoords[0]},${nextCartCoords[1]}`] =
      cartMoves[`${letterIndex},${rowIndex}`];
    delete cartMoves[`${letterIndex},${rowIndex}`];
  } else if (nextLetter === '}') {
    // AKA \
    let newLetter = '';
    if (letter === '>') newLetter = 'v';
    else if (letter === 'v') newLetter = '>';
    else if (letter === '<') newLetter = '^';
    else if (letter === '^') newLetter = '<';

    map[nextCartCoords[1]][nextCartCoords[0]] = `${newLetter}`;
    cartMoves[`${nextCartCoords[0]},${nextCartCoords[1]}`] =
      cartMoves[`${letterIndex},${rowIndex}`];
    delete cartMoves[`${letterIndex},${rowIndex}`];
  }

  map[rowIndex][letterIndex] = blankMap[rowIndex][letterIndex];
};

const moveCarts = (map, blankMap) => {
  Object.keys(cartMoves).forEach((cartPos) => {
    const cartPosArr = cartPos.split(',');
    const rowIndex = parseInt(cartPosArr[1], 10);
    const letterIndex = parseInt(cartPosArr[0], 10);
    moveCart(rowIndex, letterIndex, map, blankMap);
  });
};

const logMap = (map) => {
  // console.log(map)
  console.log(map.map((row) => row.join('')));
};

const moveNRounds = (rounds, map, blankMap) => {
  for (let i = 0; i < rounds; i++) {
    if (crashHasHappened) return;
    moveCarts(map, blankMap);
    // logMap(map);
  }
};

const test = () => {
  let input = String.raw`
/->-\
|   |  /----\
| /-+--+-\  |
| | |  | v  |
\-+-/  \-+--/
  \------/
`;
  // replacing \ with } since \ is a special character in js
  input = input.replace(new RegExp('\\\\', 'g'), '}');
  const map = formatInput(input);
  const blankMap = getBlankMap(map);
  moveNRounds(15, map, blankMap);
};

// test();

const getInputAndRun = () => {
  fs.readFile(`${__dirname}/input.txt`, 'utf8', function(err, input) {
    if (err) throw err;
    input = input.replace(new RegExp('\\\\', 'g'), '}');
    const map = formatInput(input);
    const blankMap = getBlankMap(map);
    moveNRounds(1500, map, blankMap);
  });
};
getInputAndRun();
