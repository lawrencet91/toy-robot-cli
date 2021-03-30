const constants = require('./constants');
const validation = require('./validation');

/**
 * Action - turn left
 *
 * @param {direction} Direction of the robot
 * @return {direction} New direction after it turns left
 */
const turnLeft = (direction) => {
  return constants.turnLeft[direction];
}

/**
 * Action - turn right
 *
 * @param {direction} Direction of the robot
 * @return {direction} New direction after it turns right
 */
const turnRight = (direction) => {
  return constants.turnRight[direction];
}

/**
 * Action - move
 *
 * @param {x} The x-axis of the robot
 * @param {y} The y-axis of the robot
 * @param {currentDirection} Cardinal point of the robot
 * @return {[x, y]} New x and y axis
 */
const move = (x, y, currentDirection) => {
  let tempX, tempY;
  switch (currentDirection) {
    case 'NORTH':
      tempY = y + 1;
      validation.isValidCoordinate(x, tempY);
      return [x, tempY];
    case 'SOUTH':
      tempY = y - 1;
      validation.isValidCoordinate(x, tempY);
      return [x, tempY];
    case 'WEST':
      tempX = x - 1;
      validation.isValidCoordinate(tempX, y);
      return [tempX, y];
    case 'EAST':
      tempX = x + 1;
      validation.isValidCoordinate(tempX, y);
      return [tempX, y];
  }
};

const exportFunctions = {
  move,
  turnLeft,
  turnRight
};

module.exports = exportFunctions;