#!/usr/bin/env node

const commands = require('./commands.js');
const output = require('./output.js');
const constants = require('./constants.js');
const validation = require('./validation.js');

/**
 * Start the application by reading user input
 * First input needs to contain PLACE 0-4,0-4,cardinalPoints which will be validated by regex
 * Next input can be either PLACE, LEFT, RIGHT, REPORT or MOVE
 */
const readInput = () => {
  const stdin = process.openStdin();
  let robot = {
    xCoordinate: constants.board.startingX,
    yCoordinate: constants.board.startingY,
    facingDirection: ''
  };
  let firstInput = true;
  
  stdin.addListener('data', function(input) {
    let command = input.toString().trim().toUpperCase();
    if (command.includes('HELP')) {
      output.showHelp();
    } else {
      let isValid = validation.validateInput(firstInput, command);
      if (isValid) {
        firstInput = false;
        if (command.includes(constants.commands.PLACE)) {
          const [xAxis, yAxis, direction, validCoordinate] = commands.placeRobot(command);
          if (validCoordinate) {
            robot.xCoordinate = xAxis;
            robot.yCoordinate = yAxis;
            robot.facingDirection = direction;
          }
        } else {
          robot = commands.changeLocation(command, robot);
        }
      }
    }
  });
};

const run = () => {
  output.initialise();
  readInput();
};

run();