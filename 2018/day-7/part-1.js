const { isEmpty } = require('lodash');

// const input = [
//   'Step C must be finished before step A can begin.',
//   'Step C must be finished before step F can begin.',
//   'Step A must be finished before step B can begin.',
//   'Step A must be finished before step D can begin.',
//   'Step B must be finished before step E can begin.',
//   'Step D must be finished before step E can begin.',
//   'Step F must be finished before step E can begin.'
// ];

const input = [
  'Step F must be finished before step R can begin.',
  'Step I must be finished before step P can begin.',
  'Step C must be finished before step O can begin.',
  'Step H must be finished before step K can begin.',
  'Step Y must be finished before step N can begin.',
  'Step M must be finished before step J can begin.',
  'Step D must be finished before step W can begin.',
  'Step B must be finished before step N can begin.',
  'Step T must be finished before step A can begin.',
  'Step R must be finished before step L can begin.',
  'Step P must be finished before step S can begin.',
  'Step O must be finished before step J can begin.',
  'Step X must be finished before step N can begin.',
  'Step A must be finished before step K can begin.',
  'Step N must be finished before step G can begin.',
  'Step W must be finished before step U can begin.',
  'Step Q must be finished before step U can begin.',
  'Step V must be finished before step U can begin.',
  'Step J must be finished before step G can begin.',
  'Step G must be finished before step S can begin.',
  'Step Z must be finished before step U can begin.',
  'Step U must be finished before step S can begin.',
  'Step E must be finished before step L can begin.',
  'Step K must be finished before step L can begin.',
  'Step L must be finished before step S can begin.',
  'Step M must be finished before step N can begin.',
  'Step T must be finished before step E can begin.',
  'Step J must be finished before step U can begin.',
  'Step G must be finished before step L can begin.',
  'Step D must be finished before step P can begin.',
  'Step T must be finished before step Z can begin.',
  'Step U must be finished before step L can begin.',
  'Step Z must be finished before step K can begin.',
  'Step Q must be finished before step V can begin.',
  'Step G must be finished before step K can begin.',
  'Step Z must be finished before step E can begin.',
  'Step Q must be finished before step Z can begin.',
  'Step J must be finished before step S can begin.',
  'Step G must be finished before step U can begin.',
  'Step I must be finished before step M can begin.',
  'Step W must be finished before step K can begin.',
  'Step Y must be finished before step V can begin.',
  'Step B must be finished before step Q can begin.',
  'Step Y must be finished before step D can begin.',
  'Step I must be finished before step G can begin.',
  'Step A must be finished before step S can begin.',
  'Step X must be finished before step S can begin.',
  'Step O must be finished before step N can begin.',
  'Step M must be finished before step X can begin.',
  'Step V must be finished before step Z can begin.',
  'Step W must be finished before step Z can begin.',
  'Step C must be finished before step L can begin.',
  'Step Q must be finished before step G can begin.',
  'Step A must be finished before step U can begin.',
  'Step G must be finished before step Z can begin.',
  'Step P must be finished before step Q can begin.',
  'Step C must be finished before step Z can begin.',
  'Step U must be finished before step K can begin.',
  'Step Q must be finished before step L can begin.',
  'Step X must be finished before step U can begin.',
  'Step A must be finished before step N can begin.',
  'Step N must be finished before step S can begin.',
  'Step Z must be finished before step L can begin.',
  'Step F must be finished before step D can begin.',
  'Step D must be finished before step A can begin.',
  'Step J must be finished before step K can begin.',
  'Step W must be finished before step Q can begin.',
  'Step T must be finished before step J can begin.',
  'Step T must be finished before step W can begin.',
  'Step E must be finished before step K can begin.',
  'Step P must be finished before step U can begin.',
  'Step O must be finished before step Z can begin.',
  'Step D must be finished before step B can begin.',
  'Step R must be finished before step J can begin.',
  'Step O must be finished before step A can begin.',
  'Step N must be finished before step E can begin.',
  'Step D must be finished before step G can begin.',
  'Step M must be finished before step Q can begin.',
  'Step F must be finished before step W can begin.',
  'Step T must be finished before step L can begin.',
  'Step U must be finished before step E can begin.',
  'Step X must be finished before step L can begin.',
  'Step M must be finished before step G can begin.',
  'Step Z must be finished before step S can begin.',
  'Step F must be finished before step Y can begin.',
  'Step N must be finished before step Z can begin.',
  'Step T must be finished before step U can begin.',
  'Step D must be finished before step O can begin.',
  'Step H must be finished before step X can begin.',
  'Step V must be finished before step E can begin.',
  'Step M must be finished before step T can begin.',
  'Step Y must be finished before step O can begin.',
  'Step P must be finished before step E can begin.',
  'Step C must be finished before step E can begin.',
  'Step P must be finished before step L can begin.',
  'Step M must be finished before step A can begin.',
  'Step F must be finished before step T can begin.',
  'Step I must be finished before step C can begin.',
  'Step X must be finished before step Z can begin.',
  'Step Y must be finished before step U can begin.',
  'Step B must be finished before step E can begin.'
];

const getFormattedInput = (input) => {
  const output = {};
  input.forEach((instruction) => {
    const requirement = instruction.split(' must be ')[0].slice(-1);
    const step = instruction.split(' can ')[0].slice(-1);
    if (!output[step]) {
      output[step] = { actionable: false, done: false, requirements: [] };
    }

    if (!output[requirement]) {
      output[requirement] = {
        actionable: false,
        done: false,
        requirements: []
      };
    }

    output[step].requirements.push(requirement);
  });
  return output;
};

const setActionableSteps = (input) => {
  Object.keys(input).forEach((step) => {
    if (step.done) {
      input[step].actionable = false;
      return;
    }

    if (isEmpty(input[step].requirements)) {
      input[step].actionable = true;
      return;
    }
    input[step].actionable = input[step].requirements.every((requirement) => {
      return input[requirement].done;
    });
  });
  return input;
};

const getNextActionableStep = (input) => {
  const actionable = Object.keys(input).reduce((acc, step) => {
    if (input[step].actionable && !input[step].done) acc.push(step);
    return acc;
  }, []);
  actionable.sort();
  return actionable[0];
};

const getActionableSteps = (input) => {
  const actionable = Object.keys(input).reduce((acc, step) => {
    if (input[step].actionable && !input[step].done) acc.push(step);
    return acc;
  }, []);
  actionable.sort();
  return actionable;
};

const getSteps = (input) => {
  const steps = [];
  Object.keys(input).forEach(() => {
    const nextStep = getNextActionableStep(input);
    input[nextStep].done = true;
    setActionableSteps(input);
    steps.push(nextStep);
  });
  return steps.join('');
};

const ALPHABET = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
const getAlphaDelay = (letter) => ALPHABET.indexOf(letter) + 1;

class Worker {
  constructor(id) {
    this.id = id;
    this.stopWorking();
  }

  startWorking(step, timeNow) {
    this.isWorking = true;
    this.startedWorking = timeNow;
    this.workingTil = timeNow + DELAY + getAlphaDelay(step);
    this.workingOn = step;
    console.log(step, this.startedWorking, this.workingTil);
  }

  stopWorking() {
    if (this.workingOn) {
      formattedInput2[this.workingOn].done = true;
    }
    this.isWorking = false;
    this.startedWorking = null;
    this.workingTil = null;
    this.workingOn = null;
  }

  updateStatus(timeIndex) {
    if (this.isWorking) {
      // console.log(this.workingTil, timeIndex)
    }
    if (this.isWorking && this.workingTil === timeIndex) {
      this.stopWorking();
    }
  }
}

class WorkForce {
  constructor(numWorkers, input, steps) {
    this.workers = Array(numWorkers)
      .fill()
      .map((a, index) => new Worker(index));
    this.input = input;
    this.steps = steps.split('');
    this.actionable = [];
    this.stillWorking = true;
  }

  startWork() {
    let i = 0;
    while (this.stillWorking) {
      // console.log(i)
      this.tick(i);
      i++;
    }
  }

  findAvailableWorker() {
    return this.workers.find((worker) => !worker.isWorking);
  }

  assignWorkers(timeIndex) {
    if (
      this.input[this.actionable[0]] &&
      this.input[this.actionable[0]].actionable
    ) {
      const step = this.steps.shift();
      const availableWorker = this.findAvailableWorker();
      if (availableWorker) {
        availableWorker.startWorking(step, timeIndex);
      }
    }
  }

  updateStillWorking() {
    if (this.steps.length) return;
    const allWorkersDone = this.workers.every((worker) => !worker.isWorking);
    if (allWorkersDone) this.stillWorking = false;
  }

  tick(timeIndex) {
    this.input = setActionableSteps(this.input);
    this.actionable = getActionableSteps(this.input);
    this.workers.forEach((worker) => worker.updateStatus(timeIndex));
    this.assignWorkers(timeIndex);
    this.updateStillWorking();
    if (timeIndex > 100) this.stillWorking = false;
  }
}

const formattedInput = getFormattedInput(input);
setActionableSteps(formattedInput);
const steps = getSteps(formattedInput);

console.log(steps);
