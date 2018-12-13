const getRegexes = (rules) => {
  return rules.map((rule) => {
    const splitRule = rule.split('').join('\\');
    const newRule = `\\${splitRule}`;
    return new RegExp(newRule, 'g');
  });
};

const getMatchIndices = (regex, str) => {
  const result = [];
  let match;
  regex = new RegExp(regex);
  while ((match = regex.exec(str))) {
    result.push(match.index);
    regex.lastIndex = match.index + 1;
  }
  return result;
};

// dumb but easy to code
const getExpandedCurrent = (current) => {
  let expandedCurrent = current;
  if (!current.startsWith('....')) {
    if (current.startsWith('...')) expandedCurrent = `.${expandedCurrent}`;
    else if (current.startsWith('..')) expandedCurrent = `..${expandedCurrent}`;
    else if (current.startsWith('.')) expandedCurrent = `...${expandedCurrent}`;
    else expandedCurrent = `....${expandedCurrent}`;
  }

  if (!current.endsWith('....')) {
    if (current.endsWith('...')) expandedCurrent = `${expandedCurrent}.`;
    else if (current.endsWith('..')) expandedCurrent = `${expandedCurrent}..`;
    else if (current.endsWith('.')) expandedCurrent = `${expandedCurrent}...`;
    else expandedCurrent = `${expandedCurrent}....`;
  }
  return expandedCurrent;
};

const getNextGeneration = (current, regexes) => {
  const expandedCurrent = getExpandedCurrent(current);
  const next = Array(expandedCurrent.length).fill('.');
  let indexes = [];
  regexes.forEach((regex) => {
    indexes = getMatchIndices(regex, expandedCurrent);
    indexes.forEach((index) => {
      next[index + 2] = '#';
    });
  });
  return next.join('');
};

const logGeneration = (current, generation) => {
  return console.log(`${generation}: ${current}`);
};

// This is just to make sure string never grows so indexes stay put
const padInput = (input) => {
  const padStr = Array(INPUT_PAD_AMOUNT)
    .fill('.')
    .join('');
  return `${padStr}${input}${padStr}`;
};

const hashRegex = new RegExp('#', 'g');
const countPlants = (string) => {
  const indices = getMatchIndices(hashRegex, string);
  return indices.reduce((acc, i) => acc + i - INPUT_PAD_AMOUNT, 0);
};

const getNGenerations = (input, regexes, numberOfGenerations) => {
  let current = padInput(input);
  let nextCurrent = null;
  // logGeneration(current, 0);
  Array(numberOfGenerations)
    .fill()
    .forEach((_, index) => {
      nextCurrent = getNextGeneration(current, regexes);
      // logGeneration(current, index + 1);
      console.log(index, countPlants(nextCurrent) - countPlants(current));
      current = nextCurrent;
    });

  return countPlants(current);
};

const test = () => {
  const rules = [
    '...##',
    '..#..',
    '.#...',
    '.#.#.',
    '.#.##',
    '.##..',
    '.####',
    '#.#.#',
    '#.###',
    '##.#.',
    '##.##',
    '###..',
    '###.#',
    '####.'
  ];

  const input = '#..#.#..##......###...###';

  const regexes = getRegexes(rules);
  const total = getNGenerations(input, regexes, 20);
  console.log('Total: ', total);
  console.log('Passes test?', total === 325);
};

const rules = [
  '#.#.#',
  '..###',
  '.#..#',
  '####.',
  '###..',
  '.#.#.',
  '#...#',
  '..#.#',
  '#..#.',
  '.#...',
  '.#.##',
  '#.##.',
  '...##',
  '###.#',
  '#####'
];

// test();

const INPUT_PAD_AMOUNT = 500;
const input =
  '##.###.......#..#.##..#####...#...#######....##.##.##.##..#.#.##########...##.##..##.##...####..####';

const regexes = getRegexes(rules);
const total = getNGenerations(input, regexes, 111);
console.log('Total: ', total);

// index 111 and beyond adds 23 always
// answer is total at index 110 + (50000000 - 111) * 23
// 3010 + (50000000000 - 111) * 23
