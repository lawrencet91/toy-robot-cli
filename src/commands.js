const logger = require('./logger.js');
const constants = require('./constants.js');
const validation = require('./validation');

/**
 * Actions for the robot
 *
 * @param {command} The user input.
 * @param {robot} The robot contains of x,y and cardinalPoint.
 * @return {robot} The state of the robot
 */
const changeLocation = (command, robot) => {
  let {xCoordinate, yCoordinate, facingDirection} = robot;
  switch (command) {    
    case constants.commands.MOVE:
      const [newX, newY] = move(parseInt(xCoordinate), parseInt(yCoordinate), facingDirection);
      robot.xCoordinate = newX;
      robot.yCoordinate = newY;
      break;
    case constants.commands.LEFT:
      robot.facingDirection = turnLeft(facingDirection);
      break;
    case constants.commands.RIGHT:
      robot.facingDirection = turnRight(facingDirection);
      break;
    case constants.commands.REPORT:
      const location = [xCoordinate, yCoordinate, facingDirection].join();
      if (process.env.NODE_ENV !== 'test') {
        logger.success(`Current position of the toy robot: ${location}\n`);
      }
  }

  return robot;
};

/**
 * Return the location of the robot
 *
 * @param {command} The user input.
 * @return {xAxis} x-axis of the robot.
 * @return {yAxis} y-axis of the robot.
 * @return {direction} cardinal point of the robot.
 * @return {validCoordinate} if the location is within the board size.
 */
const placeRobot = (command) => {
  const coordinate = command.split(constants.regex.GET_COORINATE_REGEX);
  const xAxis = parseInt(coordinate[1]);
  const yAxis = parseInt(coordinate[2]);
  const direction = coordinate[3];
  const validCoordinate = validation.isValidCoordinate(xAxis, yAxis);

  return [xAxis, yAxis, direction, validCoordinate];
};

const executeCommand = (firstInput, command, robot) => {
  let isValid = validation.validateInput(firstInput, command);
  if (!isValid) {
    return;
  }
  firstInput = false;
  if (command.includes(constants.commands.PLACE)) {
    const [xAxis, yAxis, direction, validCoordinate] = placeRobot(command);
    if (validCoordinate) {
      robot.xCoordinate = xAxis;
      robot.yCoordinate = yAxis;
      robot.facingDirection = direction;
    }
  } else {
    robot = changeLocation(command, robot);
  }
  return [firstInput, robot];
};

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
  let tempX, tempY, isValid;
  switch (currentDirection) {
    case 'NORTH':
      tempY = y + 1;
      isValid = validation.isValidCoordinate(x, tempY);
      return isValid ? [x, tempY] : [x, y];
    case 'SOUTH':
      tempY = y - 1;
      isValid = validation.isValidCoordinate(x, tempY);
      return isValid ? [x, tempY] : [x, y];
    case 'WEST':
      tempX = x - 1;
      isValid = validation.isValidCoordinate(tempX, y);
      return isValid ? [tempX, y] : [x, y];
    case 'EAST':
      tempX = x + 1;
      isValid = validation.isValidCoordinate(tempX, y);
      return isValid ? [tempX, y] : [x, y];
  }
};

const exportFunctions = {
  changeLocation,
  placeRobot,
  executeCommand,
  move,
  turnLeft,
  turnRight
};

module.exports = exportFunctions;