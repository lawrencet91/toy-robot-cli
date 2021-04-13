#!/usr/bin/env node

const commands = require('./commands.js');
const output = require('./output.js');
const constants = require('./constants.js');
const lineReader = require('line-reader');

/**
 * Start the application by reading user input
 * First input needs to contain PLACE 0-4,0-4,cardinalPoints which will be validated by regex
 * Next input can be either PLACE, LEFT, RIGHT, REPORT or MOVE
 */
const readInput = (fileName) => {
  const stdin = process.openStdin();
  let robot = {
    xCoordinate: constants.board.startingX,
    yCoordinate: constants.board.startingY,
    facingDirection: ''
  };
  let firstInput = true;
  
  if (fileName) {
    lineReader.eachLine(fileName, (line) => {
      [firstInput, robot] = commands.executeCommand(firstInput, line, robot);
    });
  } else {
    stdin.addListener('data', (input) => {
      let command = input.toString().trim().toUpperCase();
      if (command.includes('HELP')) {
        output.showHelp();
      } else {
        [firstInput, robot] = commands.executeCommand(firstInput, command, robot);
      }
    });
  }
};

const run = () => {
  const fileName = process.argv[2];
  !fileName && output.initialise();
  readInput(fileName);
};

run();