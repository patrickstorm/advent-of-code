const getRackId = (coords) => coords[0] + 10;

// intentionally left verbose
const getPowerLevel = (coords, input) => {
  const rackId = getRackId(coords);
  let powerLevel = rackId * coords[1];
  powerLevel = powerLevel + input;
  powerLevel = powerLevel * rackId;
  powerLevel = Math.floor((powerLevel / 100) % 10);
  return powerLevel - 5;
};

const testPowerLevel = () => {
  console.log(getPowerLevel([3, 5], 8) === 4);
  console.log(getPowerLevel([122, 79], 57) === -5);
  console.log(getPowerLevel([217, 196], 39) === 0);
  console.log(getPowerLevel([101, 153], 71) === 4);
};

const getCoordPowerLevel = (grid, coords) => {
  if (grid[coords[0]] && grid[coords[0]][coords[1]]) {
    return grid[coords[0]][coords[1]];
  }
  return 0;
};

const createGrid = (input, maxSize = 300) => {
  const grid = [];
  for (let rowIndex = 0; rowIndex < maxSize; rowIndex++) {
    const row = [];
    for (let colIndex = 0; colIndex < maxSize; colIndex++) {
      row.push(getPowerLevel([colIndex, rowIndex], input));
    }
    grid.push(row);
  }
  return grid;
};

const getSectionPower = (grid, [colIndex, rowIndex]) => {
  // console.log(grid);

  return (
    getCoordPowerLevel(grid, [rowIndex, colIndex]) +
    getCoordPowerLevel(grid, [rowIndex + 1, colIndex]) +
    getCoordPowerLevel(grid, [rowIndex + 2, colIndex]) +
    getCoordPowerLevel(grid, [rowIndex, colIndex + 1]) +
    getCoordPowerLevel(grid, [rowIndex, colIndex + 2]) +
    getCoordPowerLevel(grid, [rowIndex + 1, colIndex + 1]) +
    getCoordPowerLevel(grid, [rowIndex + 1, colIndex + 2]) +
    getCoordPowerLevel(grid, [rowIndex + 2, colIndex + 1]) +
    getCoordPowerLevel(grid, [rowIndex + 2, colIndex + 2])
  );
};

const findLargestSection = (grid) => {
  //console.log(grid);
  let maxCoords = [];
  let maxPower = -Infinity;
  for (let rowIndex = 0; rowIndex < grid.length - 2; rowIndex++) {
    for (let colIndex = 0; colIndex < grid.length - 2; colIndex++) {
      const power = getSectionPower(grid, [colIndex, rowIndex]);
      if (power > maxPower) {
        maxCoords = [rowIndex, colIndex];
        maxPower = power;
      }
    }
  }
  console.log(maxCoords.reverse(), maxPower);
  return maxCoords;
};

const testSolution = () => {
  const input = 42;
  const grid = createGrid(input);
  const maxCoords = findLargestSection(grid);
  console.log(maxCoords);
  console.log(maxCoords[0] === 21 && maxCoords[1] === 61);
};

// const input = 8;
const input = 7989;

// testPowerLevel();
// testSolution();
const grid = createGrid(input);
findLargestSection(grid);
