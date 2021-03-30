const logger = require('./logger.js');
const constants = require('./constants');

/**
 * Validate the x and y axis of the robot, needs to within 0-4
 *
 * @param {xAxis} The x-axis of the robot
 * @param {yAxis} The y-axis of the robot
 * @return {boolean}
 */
const isValidCoordinate = (xAxis, yAxis) => {
  const validX = xAxis >= constants.board.startingX && xAxis < constants.board.maxColumn;
  const validY = yAxis >= constants.board.startingY && yAxis < constants.board.maxRow;
  if ((!validX || !validY) && process.env.NODE_ENV !== 'test') {
    logger.error('Invalid coordinate, please re-enter');
  }
  return validX && validY;
};

/**
 * Validate the x and y axis of the robot, needs to within 0-4
 *
 * @param {firstInput} If firstInput is true, validate against the firstInput regex
 * @param {command} The user input
 * @return {boolean}
 */
const validateInput = (firstInput, command) => {
  let result = false;
  // First round need to check for PLACE command
  if (firstInput) {
    result = validateFirstInput(command);
    if (!result) {
      logger.error('Invalid input - Format of first input is "PLACE x,y,cardinalPoint"\nExample: PLACE 1,2,NORTH');
    }
  } else {
    result = validateSubsequenceInput(command);
    if (!result) {
      logger.error('Please enter a valid command: PLACE x,y,cardinalPoint, MOVE, LEFT, RIGHT, REPORT');
    }
  }
  return result;
};

/**
 * Validate the command against first input regex
 *
 * @param {command} The user input
 * @return {boolean}
 */
const validateFirstInput = command => {
  return constants.regex.FIRST_INPUT_REGEX.test(command);
};

/**
 * Validate the command against subsequent input regex
 *
 * @param {command} The user input
 * @return {boolean}
 */
const validateSubsequenceInput = command => {
  return constants.regex.SUBSEQUENT_INPUT_REGEX.test(command);
};

const exportFunctions = {
  isValidCoordinate,
  validateSubsequenceInput,
  validateFirstInput,
  validateInput
};

module.exports = exportFunctions;