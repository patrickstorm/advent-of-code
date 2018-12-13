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

const getSectionPower = (grid, [colIndex, rowIndex], sectionSize) => {
  let totalPower = 0;
  for (let i = 0; i < sectionSize; i++) {
    for (let j = 0; j < sectionSize; j++) {
      totalPower =
        totalPower + getCoordPowerLevel(grid, [rowIndex + i, colIndex + j]);
    }
  }
  return totalPower;
};

const findLargestSection = (grid, sectionSize = 3) => {
  //console.log(grid);
  let maxCoords = [];
  let maxPower = -Infinity;
  for (let rowIndex = 0; rowIndex < grid.length - sectionSize + 1; rowIndex++) {
    for (
      let colIndex = 0;
      colIndex < grid.length - sectionSize + 1;
      colIndex++
    ) {
      const power = getSectionPower(grid, [colIndex, rowIndex], sectionSize);
      if (power > maxPower) {
        maxCoords = [rowIndex, colIndex];
        maxPower = power;
      }
    }
  }
  maxCoords.reverse();
  return { maxCoords, maxPower };
};

const findLargestSectionAndSize = (grid, maxSize = 300) => {
  let maxRecord = null;
  let sectionRecord = null;
  for (let sectionSize = 1; sectionSize < maxSize + 1; sectionSize++) {
    if (sectionSize % 10 === 0) {
      console.log(
        'testing',
        sectionSize,
        ' - time: ',
        (Date.now() - timeStart) / 1000,
        'seconds'
      );
    }
    sectionRecord = findLargestSection(grid, sectionSize);
    if (!maxRecord || sectionRecord.maxPower > maxRecord.maxPower) {
      maxRecord = sectionRecord;
      maxRecord.size = sectionSize;
      console.log('new max', maxRecord);
    }
  }
  console.log(maxRecord);
  return maxRecord;
};

const testSolution = () => {
  const input = 18;
  const grid = createGrid(input);
  const max = findLargestSectionAndSize(grid);
  console.log(max);
  console.log('is success?');
  console.log(max.maxCoords[0] === 90 && max.maxCoords[1] === 269);
  console.log(max.maxPower === 113);
  console.log(max.size === 16);
};

// const input = 8;
const input = 7989;

const timeStart = Date.now();
// testPowerLevel();
// testSolution();

const grid = createGrid(input);
const maxRecord = findLargestSectionAndSize(grid);
console.log(maxRecord);
